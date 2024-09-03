import React from "react";
import './Search.css'

function Search({ searchText, setSearchText }){
    return(
        <div className="search">
            <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Buscar"
            />
        </div>
    )
}

export default Search