import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
  },
  error: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.container, error && styles.error];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
