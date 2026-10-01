function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-bar__item">
        <span className="search-bar__label">Where</span>
        <span className="search-bar__value">Search destinations</span>
      </div>

      <div className="search-bar__item">
        <span className="search-bar__label">Check in</span>
        <span className="search-bar__value">Add dates</span>
      </div>

      <div className="search-bar__item">
        <span className="search-bar__label">Check out</span>
        <span className="search-bar__value">Add dates</span>
      </div>

      <div className="search-bar__item">
        <span className="search-bar__label">Who</span>
        <span className="search-bar__value">Add guests</span>
      </div>

      <button className="search-bar__button">
        Search
      </button>
    </div>
  );
}

export default SearchBar;