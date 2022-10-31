import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RespositoryItem";
import useRepositories from "../hooks/useRepositories";
import OrderPicker from "./OrderPicker";
import { useState } from "react";
import SearchBar from "./SearchBar";
import React from "react";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    // this.props contains the component's props
    const props = this.props;
    return (
      <>
        {ItemSeparator()}
        <SearchBar
          searchQuery={props.searchQuery}
          setSearchQuery={props.setSearchQuery}
        />
        {ItemSeparator()}
        <OrderPicker
          selectedOrder={props.selectedOrder}
          setSelectedOrder={props.setSelectedOrder}
        />
        {ItemSeparator()}
      </>
    );
  };

  render() {
    const props = this.props;
    const repositoryNodes = props.repositories
      ? props.repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <RepositoryItem item={item} test={props.test} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState("DEFAULT");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchKeyword] = useDebounce(searchQuery, 500);

  let orderBy, orderDirection;

  switch (selectedOrder) {
    case "DEFAULT":
      orderBy = "CREATED_AT";
      orderDirection = "DESC";
      break;
    case "ASC":
      orderBy = "RATING_AVERAGE";
      orderDirection = "ASC";
      break;
    case "DESC":
      orderBy = "RATING_AVERAGE";
      orderDirection = "DESC";
      break;
  }

  const { repositories, fetchMore } = useRepositories({
    first: 4,
    orderBy,
    orderDirection,
    searchKeyword,
  });

  const onEndReach = () => {
    console.log("You have reached the end of the list");
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
