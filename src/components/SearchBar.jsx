import * as React from "react";
import { Searchbar } from "react-native-paper";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      style={{ marginHorizontal: 10 }}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;
