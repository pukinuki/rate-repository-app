import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import RepositoryList from "./RepositoryList";
import Review from "./Review";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import SignUp from "./SignUp";
import AppBar from "./AppBar";
import SingleRepository from "./SingleRepository";
import MyReviews from "./MyReviews";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/Review" element={<Review />} exact />
        <Route path="/SignIn" element={<SignIn />} exact />
        <Route path="/SignOut" element={<SignOut />} exact />
        <Route path="/SignUp" element={<SignUp />} exact />
        <Route path="/MyReviews" element={<MyReviews />} exact />
        <Route
          path="/SingleRepository"
          element={<SingleRepository single />}
          exact
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
