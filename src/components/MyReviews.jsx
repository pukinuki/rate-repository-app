import useMyReviews from "../hooks/useMyReviews";
import { View, FlatList } from "react-native";
import { StyleSheet } from "react-native-web";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const { reviews, refetch } = useMyReviews();

  if (reviews) {
    const reviewNodes = reviews.reviews
      ? reviews.reviews.edges.map((edge) => edge.node)
      : [];
    return (
      <>
        <FlatList
          data={reviewNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            <ReviewItem item={item} myReviews refetch={refetch} />
          )}
          keyExtractor={({ id }) => id}
        />
      </>
    );
  } else return <></>;
};

export default MyReviews;
