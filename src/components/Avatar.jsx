import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexGrow: 0,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

const Avatar = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: source,
        }}
      />
    </View>
  );
};

export default Avatar;
