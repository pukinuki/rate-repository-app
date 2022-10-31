import { View, StyleSheet, Pressable, Alert } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { format } from "date-fns";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 10,
  },
  content: {
    flexDirection: "row",
  },
  rating: {
    flexGrow: 0,
    margin: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    alignContent: "center",
    justifyContent: "center",
  },
  ratingText: {
    color: theme.colors.primary,
    textAlign: "center",
    fontSize: 20,
  },
  mainInfo: {
    flexGrow: 1,
    flexShrink: 1,
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    alignSelf: "flex-start",
  },
  mainInfoItem: {
    marginTop: 10,
    marginLeft: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    flexGrow: 1,
  },
  buttonDelete: {
    backgroundColor: theme.colors.error,
  },
});

const ReviewItem = ({ item, myReviews, refetch }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const deleteReviewHandler = (deleteReviewId, refetchReviews) => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "CANCEL",
          onPress: () => {
            console.log("Delete review caceled");
          },
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            await deleteReview(deleteReviewId);
            refetchReviews();
          },
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.rating}>
          <Text fontWeight="bold" style={styles.ratingText}>
            {item.rating}
          </Text>
        </View>
        <View style={styles.mainInfo}>
          <Text
            fontWeight="bold"
            fontSize="subheading"
            style={styles.mainInfoItem}
          >
            {myReviews
              ? `${item.repository.ownerName}/${item.repository.name}`
              : item.user.username}
          </Text>
          <View style={styles.mainInfo}>
            <Text style={styles.mainInfoItem}>
              {format(new Date(item.createdAt), "dd.MM.yyyy")}
            </Text>
          </View>
          <View style={styles.mainInfo}>
            <Text style={styles.mainInfoItem}>{item.text}</Text>
          </View>
        </View>
      </View>
      {myReviews ? (
        <View style={styles.content}>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                navigate("/SingleRepository", {
                  state: { repositoryId: item.repository.id },
                });
              }}
            >
              <Text fontWeight="bold" style={{ color: theme.colors.tab }}>
                View repository
              </Text>
            </Pressable>
          </View>
          <View style={[styles.button, styles.buttonDelete]}>
            <Pressable
              onPress={() =>
                deleteReviewHandler(
                  {
                    deleteReviewId: item.id,
                  },
                  refetch
                )
              }
            >
              <Text fontWeight="bold" style={{ color: theme.colors.tab }}>
                Delete review
              </Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default ReviewItem;
