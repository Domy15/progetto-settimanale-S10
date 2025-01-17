function SearchBar() {
        return(
        <form className="d-flex w-75 m-auto pt-5">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        )
}

export default SearchBar