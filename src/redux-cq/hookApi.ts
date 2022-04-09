import { Dispatch, useEffect, useState } from "react"
import { shallowEqual, useDispatch } from "react-redux"
import { querySuccess, queryRun, viewUnmount, dataSync, CqAction } from "./actions"
import { QueryResponse, useCqSelector, EntityModel, Denormalized, ChangeReport, ErrorType } from "./core"
import useQueryString, { QueryStringMapping } from "./useQueryString"


type AsyncQueryHandler<TReq,TData> = (req:TReq) => Promise<QueryResponse<TData>>

type SViewSummary<TModel extends EntityModel,TReq,TEntityName extends keyof TModel> = {
    data: Denormalized<TModel,TModel[TEntityName]["props"]>[]
    total: number
    pending: boolean
    lastError: string | null
    lastErrorType: ErrorType | null
    lastCreatedReq: TReq
    lastHandledReq: Partial<TReq>
} 
  
let __seq = 0;
const nextId = () => ++__seq;

export const queryHook = <
    TModel extends EntityModel,
    TReq,
    TName extends keyof TModel,
    TProps extends TModel[TName]["props"],
    TData extends Denormalized<TModel,TProps>>(
    entityModel:TModel, 
    entityName:TName, 
    handler:AsyncQueryHandler<TReq,TData>) => {

        const createFetcher = (viewSeq:string, dispatch:Dispatch<CqAction<TModel>>, maxDepth:number) =>
            (req:TReq) => {
                dispatch(queryRun(req, viewSeq, entityName, maxDepth));
                handler(req)
                    .then(res => {
                        dispatch(querySuccess(viewSeq, req, entityName, maxDepth, res.results, res.total));
                    }); 
            }
    
        const initViewState = (req:TReq) => ({
            data: [],
            pending: true,
            lastError: null,
            lastErrorType: null,
            total: 0,
            lastCreatedReq: req,
            lastHandledReq: {}
        });

        return (req: TReq, maxDepth: number = 3): [SViewSummary<TModel,TReq,TName>, (req:TReq) => void] => {
            const [viewSeq, _] = useState(nextId().toString());
            const sView = useCqSelector(s => s.views[viewSeq] as SViewSummary<TModel,TReq,TName> ?? initViewState(req), shallowEqual);
            const dispatch = useDispatch();

            // view mounting / unmounting
            const fetcher = createFetcher(viewSeq, dispatch, maxDepth);

            useEffect(() => {
                fetcher(req);
                return () => {
                    dispatch(viewUnmount(viewSeq));
                }
            }, Object.values(req as any)); //[initReq]);

            // return view state and one-way fetcher method
            return [sView, fetcher];
        }
    
}

export type QueryHook<TModel extends EntityModel,TReq,TName extends keyof TModel> = (initReq:TReq, maxDepth:number) => [SViewSummary<TModel,TReq,TName>,(req:TReq) => void]

export const withUrlSupport = <
    TModel extends EntityModel,
    TReq,
    TName extends keyof TModel>(hook:QueryHook<TModel,TReq,TName>, mapping:QueryStringMapping<TReq>) => {

    return (initReq:TReq, maxDepth:number = 3):[SViewSummary<TModel,TReq,TName>,(req:TReq) => void] => {

        const [req, newQuery] = useQueryString<TReq>(mapping, initReq);

        const [queryState, _] = hook(req, maxDepth);

        return [queryState, newQuery];
    }

}








type CommandResponse<TPayload> = TPayload

type CommandHandler<TCommand,TRes> = (params:TCommand) => Promise<CommandResponse<TRes>>

interface WithUpdates<TModel extends EntityModel,TRes> {
    updates?: Partial<ChangeReport<TModel>>
    result?: TRes
}

export const commandHook = <
    TModel extends EntityModel,
    TCommand,
    TRes>(entityModel:TModel, handler:CommandHandler<TCommand,WithUpdates<TModel,TRes>>) => {

        return () => {
            const dispatch = useDispatch();

            return (params:TCommand) => {
                handler(params)
                    .then(({ result, updates = { } }) => {

                        dispatch(dataSync({
                            modified: { },
                            created: { },
                            deleted: { },
                            ...updates
                        }));

                        return result;
                    })
            }
        }
}