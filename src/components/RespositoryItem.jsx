import { View, Pressable, StyleSheet, Linking } from "react-native";
import { useNavigate } from "react-router-native";
import Text from "./Text";
import Avatar from "./Avatar";
import StatItem from "../StatItem";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 10,
  },
  content: {
    flexDirection: "row",
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
  },
});

const formatNumber = (number) => {
  if (number / 1000 >= 1) return `${(number / 1000).toFixed(1)}k`;
  else return number.toString();
};

const RepositoryItem = ({ item, single, test = false }) => {
  const navigate = !test ? useNavigate() : null;

  return (
    <View testID="repositoryItem" style={styles.container}>
      <Pressable
        onPress={() => {
          navigate("/SingleRepository", {
            state: { repositoryId: item.id },
          });
        }}
      >
        <View>
          <View style={styles.content}>
            <Avatar source={item.ownerAvatarUrl} />
            <View style={styles.mainInfo}>
              <Text
                fontWeight="bold"
                fontSize="subheading"
                style={styles.mainInfoItem}
              >
                {item.fullName}
              </Text>
              <View style={styles.mainInfo}>
                <Text style={styles.mainInfoItem}>{item.description}</Text>
              </View>
              <View style={styles.language}>
                <Text style={{ color: "white" }}>{item.language}</Text>
              </View>
            </View>
          </View>
          <View style={styles.content}>
            <StatItem
              label={"Stars"}
              stat={formatNumber(item.stargazersCount)}
            />
            <StatItem label={"Forks"} stat={formatNumber(item.forksCount)} />
            <StatItem label={"Reviews"} stat={item.reviewCount} />
            <StatItem label={"Rating"} stat={item.ratingAverage} />
          </View>
        </View>
      </Pressable>
      {single ? (
        <View>
          <Pressable
            style={styles.button}
            onPress={() => {
              Linking.openURL(item.url);
            }}
          >
            <Text fontWeight="bold" style={{ color: theme.colors.tab }}>
              Open in Git Hub
            </Text>
          </Pressable>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default RepositoryItem;
