import { View, Text, TextInput, StyleSheet } from "react-native";

const AddCaptionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Title</Text>
      <TextInput style={styles.inputTitle} />
      <Text>Comment</Text>
      <TextInput multiline={true} numberOfLines={3} style={styles.inputTitle} />
    </View>
  );
};

export default AddCaptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputTitle: {
    borderWidth: 1,
    marginVertical: "2%",
    paddingVertical: "2.5%",
  },
});
