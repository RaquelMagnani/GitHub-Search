import React from "react";
import "./searchBar.css"

const SearchBar =({user,loading,error,buttonAction,changeUser})=>(
  <div className="searchBarContainer">
    <input
    type="text"
    value={user}
    placeholder="Usuario"
    onChange={e => changeUser(e.target.value)}
    />
    <button onClick={buttonAction}>Search</button>

    <p>{error}</p>
  </div>
)



export default SearchBar;
