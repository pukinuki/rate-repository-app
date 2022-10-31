import { View, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import useSignUp from "../hooks/useSignUp";

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
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
    .min(1, "Username too short!")
    .max(30, "Username too long!")
    .required("Username required"),
  password: yup
    .string()
    .min(5, "Password too short!")
    .max(50, "Password too long!")
    .required("Password required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match")
    .required("Password confirmation is required"),
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.field}
        name="username"
        placeholder="Username"
      />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text fontWeight="bold" style={{ color: theme.colors.tab }}>
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
};

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
