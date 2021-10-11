const Valid = ({validate}) => {
    return  <p className="valid">{validate}</p>;
}
 
export default Valid;

export const Found = () => {
    return <p className="found">No Todos</p>;
}

export const NotFound = ({searchEmpty}) => {
    return <p className="not-found">{searchEmpty}</p>;
}
 
// export Found;