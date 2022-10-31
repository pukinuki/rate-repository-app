import { View, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import useReview from "../hooks/useReview";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
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
  ownerName: yup
    .string()
    /*.min(2, "Repository owner name too short!")
    .max(10, "Repository owner name too long!")*/
    .required("Repository owner name is required"),
  repositoryName: yup
    .string()
    /*.min(2, "Repository name too short!")
    .max(10, "Repository name too long!")*/
    .required("Repository name is required"),
  rating: yup
    .number()
    .min(0, "Rating too low!")
    .max(100, "Rating too high!")
    .required("Rating is required"),
  text: yup.string().optional(),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.field}
        name="ownerName"
        placeholder="Repository owner name"
      />
      <FormikTextInput
        style={styles.field}
        name="repositoryName"
        placeholder="Repository name"
      />
      <FormikTextInput
        style={styles.field}
        name="rating"
        placeholder="Rating between 0 and 100"
      />
      <FormikTextInput style={styles.field} name="text" placeholder="Review" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text fontWeight="bold" style={{ color: theme.colors.tab }}>
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export const ReviewFormContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const Review = () => {
  const [review] = useReview();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      await review({
        ownerName,
        repositoryName,
        rating,
        text,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewFormContainer onSubmit={onSubmit} />;
};

export default Review;
