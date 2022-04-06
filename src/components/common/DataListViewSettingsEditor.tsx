import Tab from "./forms/Tab"
import TabMenu from "./forms/TabMenu"
import TabMenuItem from "./forms/TabMenuItem"
import TabNavigator from "./forms/TabNavigator"
import { Icon } from "./icons"


export type SortBy = {
    field: string
    descending?: boolean
}

export type DataListViewSettings = {
    limit: number
    offset: number
    sortBy: SortBy
}

export type DataListViewSettingsChangeEvent = DataListViewSettings & { }

interface Props {
    total: number
    limit: number
    offset: number
    sortByOptions: string[]
    sortByTitles?: { [k:string]: string }
    sortBy: SortBy
    onChange: (e: DataListViewSettingsChangeEvent) => void
}

export const DataListViewSettingsEditor:React.FC<Props> = ({ offset, limit, total, sortBy, sortByOptions, sortByTitles = {}, onChange }) => {

    const pageIndex = Math.floor(offset / limit);
    let pages = [];
    const totalPages = Math.ceil(total / limit);
    for (let i = 0; i < totalPages; ++i) pages.push(i);

    const handleSortByChange = (field:string) => {
        onChange({
            limit,
            offset: 0,
            sortBy: { ...sortBy, field }
        })
    }

    const handleSortDescendingChange = (descending:boolean) => {
        onChange({
            limit,
            offset: 0,
            sortBy: { ...sortBy, descending }
        })
    }

    return (
       
        <div className="w-full flex py-1 mb-3">
            <div className="text-sm py-1">Total&nbsp;
                <strong>{total}</strong>&nbsp;
                records, showing (<strong>{offset + 1}</strong> - <strong>{Math.min(total, offset + limit)}</strong>)
            </div>
            <Tab key="ll"><Icon shape="chevronDoubleLeft" className="h-2" /></Tab>
            <Tab key="l"><Icon shape="chevronLeft" className="h-2" /></Tab>
            {pages.map(p => (<Tab key={p} selected={p === pageIndex}>{p + 1}</Tab>))}
            <Tab key="r"><Icon shape="chevronRight" className="h-2" /></Tab>
            <Tab key="rr"><Icon shape="chevronDoubleRight" className="h-2" /></Tab>
            <div className="flex grow py-1" />
            <div className="text-sm py-1">Sort By</div>
            <TabMenu title={sortByTitles[sortBy.field ?? ""] || sortBy.field}>{

                sortByOptions.map(opt => (
                    <TabMenuItem key={opt} onClick={() => handleSortByChange(opt)} selected={sortBy.field === opt}>{sortByTitles[opt] || opt}</TabMenuItem>
                ))
            }
            </TabMenu>
            <TabMenu title={ sortBy.descending ? "Descending": "Ascending" }>
                <TabMenuItem selected={!sortBy.descending} key="asc" onClick={() => handleSortDescendingChange(false)}>Ascending</TabMenuItem>
                <TabMenuItem selected={!!sortBy.descending} key="desc" onClick={() => handleSortDescendingChange(true)}>Descending</TabMenuItem>
            </TabMenu>
        </div>
        
    );
}