import { View, Text, Pressable } from "react-native";

const ArrivalCheckListScreen = ({ navigation }) => {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("CheckListInformationScreen")}
      >
        <Text>ArrivalCheckListScreen</Text>
      </Pressable>
    </View>
  );
};

export default ArrivalCheckListScreen;
