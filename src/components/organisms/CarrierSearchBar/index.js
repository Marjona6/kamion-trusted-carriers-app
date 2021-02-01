import SearchBar from '../../molecules/SearchBar'

const CarrierSearchBar = ({ searchText, setSearchText }) => {
  return (
    <SearchBar
      labelText='Search for a carrier by name'
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  )
}

export default CarrierSearchBar
