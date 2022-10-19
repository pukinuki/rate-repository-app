import { View, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const initialValues = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "column",
  },
  field: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Username too short!")
    .max(10, "Username too long!")
    .required("Username required"),
  password: yup
    .string()
    .min(4, "Password too short!")
    .max(10, "Password too long!")
    .required("Password required"),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.field}
        name="username"
        placeholder="Username"
      />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text fontWeight="bold" style={{ color: theme.colors.tab }}>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;

    console.log(`Username: ${username}. Password: ${password}`);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
