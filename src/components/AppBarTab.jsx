import { Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import theme from "../theme";

const styles = StyleSheet.create({
  tab: {
    margin: 20,
    color: theme.colors.tab,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ tabName, path }) => {
  return (
    <Link to={path}>
      <Text style={styles.tab}>{tabName}</Text>
    </Link>
  );
};

export default AppBarTab;
