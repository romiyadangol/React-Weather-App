import '../assets/css/search.css';
function Search({ placeholder, value, onChange, onKeyPress, onClick }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-city"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button className="search-btn" onClick={onClick}>Search</button>
    </div>
  );
}

export default Search;
