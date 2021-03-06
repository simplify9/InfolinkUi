

interface Props {
    label: string
    value:string
}

const ExchangeProperty:React.FC<Props> = ({ label,value }) => {
    if (!value) return<></>;
    return (
        <div><strong>{label}</strong>: {value}</div>
    )
}

export default ExchangeProperty;

