import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName={"Repositories"} path={"/"} />
        <AppBarTab tabName={"Sign in"} path={"/SignIn"} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
