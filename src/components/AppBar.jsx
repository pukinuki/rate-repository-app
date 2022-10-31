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

const userLoggedTabs = () => {
  return (
    <>
      <AppBarTab tabName={"Review"} path={"/Review"} />
      <AppBarTab tabName={"My Reviews"} path={"/MyReviews"} />
      <AppBarTab tabName={"Sign out"} path={"/SignOut"} />
    </>
  );
};

const userNotLoggedTabs = () => {
  return (
    <>
      <AppBarTab tabName={"Sign Up"} path={"/SignUp"} />
      <AppBarTab tabName={"Sign in"} path={"/SignIn"} />
    </>
  );
};

const AppBar = () => {
  const me = useMe();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName={"Repositories"} path={"/"} />
        {me.me ? userLoggedTabs() : userNotLoggedTabs()}
      </ScrollView>
    </View>
  );
};

export default AppBar;
