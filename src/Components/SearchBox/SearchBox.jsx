import React from "react";
import "./SearchBox.css";

function SearchBox({query, setQuery, search}) {
    return (
        <div className="SearchTool">
            <input
            type="text"
            className="SearchCity"
            placeholder="Please enter the city name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search} />
            <button>Click</button>
        </div>
    )
}

export default SearchBox;
