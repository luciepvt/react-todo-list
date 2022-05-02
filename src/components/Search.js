const Search = ({ setSearch }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search for a task ? "
      onChange={(event) => {
        setSearch(event.target.value);
      }}
    />
  );
};
export default Search;
