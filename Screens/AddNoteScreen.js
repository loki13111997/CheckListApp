import { useLayoutEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AddNoteScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Note",
      headerRight: () => (
        <AntDesign
          name="check"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
          style={{ paddingRight: 7 }}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={{ paddingBottom: 5 }}>
      <TextInput
        style={{ borderWidth: 1, fontSize: 20, textAlignVertical: "top" }}
        multiline={true}
        numberOfLines={5}
      />
    </View>
  );
};
export default AddNoteScreen;
