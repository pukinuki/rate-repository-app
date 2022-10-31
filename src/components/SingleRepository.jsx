import RepositoryItem from "./RespositoryItem";
import useRepository from "../hooks/useRepository";
import { useLocation } from "react-router-native";
import { View, FlatList } from "react-native";
import { StyleSheet } from "react-native-web";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const location = useLocation();
  const { repository } = useRepository(location.state.repositoryId);

  if (repository) {
    const reviewNodes = repository.reviews
      ? repository.reviews.edges.map((edge) => edge.node)
      : [];
    return (
      <>
        <FlatList
          data={reviewNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => <ReviewItem item={item} />}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={() => {
            return (
              <>
                <RepositoryItem item={repository} single />
                {ItemSeparator()}
              </>
            );
          }}
          // ...
        />
      </>
    );
  } else return <></>;
};

export default SingleRepository;
