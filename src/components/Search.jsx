function Search({placeholder,value,onchange,onclick}){
    return (
        <div className="search-container">
        <input 
        type="text"
        className="search-city"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        />

        <button onClick={onclick}>Search</button>
        </div>
    )
}
export default Search;