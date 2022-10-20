import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import useMe from "../hooks/useMe";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    flexDirection: "row",
  },
});

const AppBar = () => {
  const me = useMe();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName={"Repositories"} path={"/"} />
        {me.me ? (
          <AppBarTab tabName={"Sign out"} path={"/SignOut"} />
        ) : (
          <AppBarTab tabName={"Sign in"} path={"/SignIn"} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
