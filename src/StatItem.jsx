import { View, StyleSheet } from "react-native";
import Text from "./components/Text";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexGrow: 1,
    alignItems: "center",
  },
});

const StatItem = ({ label, stat }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{stat}</Text>
      <Text>{label}</Text>
    </View>
  );
};

export default StatItem;
