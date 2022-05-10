import { useLayoutEffect } from "react";
import { View, Text, Pressable } from "react-native";

const CheckListInformationScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Checklist Information",
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate("DocumentsListScreen")}>
          <Text>Save</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>CheckListInformationScreen</Text>
    </View>
  );
};
export default CheckListInformationScreen;
