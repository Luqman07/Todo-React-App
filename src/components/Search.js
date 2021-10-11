import React from "react";


const Search = ({ searchInput, setSearchInput, searchArr, isSeaArrEmpty, setIsSeaArrEmpty, setSearchEmpty }) => {

    const searchHandler = (e) => {
        let val = e.target.value
        setSearchInput(val)

    }


    return (
        <div className="search-container">
            <form className="search-field">
                <input
                    onChange={searchHandler}
                    value={searchInput.trim()}
                    placeholder="Search..."
                    type="text" />
            </form>
            <ul className="search-render">
                {searchArr.map(res => (
                    <li key={res.id}>{res.todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;