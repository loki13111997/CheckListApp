import { View, Text, FlatList, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Card from "../Components/UI/Card";

const List = [
  "Documents",
  "Bridge",
  "Accommodations",
  "Outside of Accommodations",
  "Survival Craft & Launching Arrangements",
  "Steering Gear Room (incl. Emergency Fire Pump)",
  "Deck Area",
  "Engine Room",
  "Other Spaces",
];

const DocumentsListScreen = ({ navigation }) => {
  const navigationHandler = (screnName) => {
    navigation.navigate("SubDocumentsListScreen", {
      screnName,
    });
  };
  return (
    <View>
      <FlatList
        data={List}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card onPress={() => navigationHandler(item)}>
            <View style={styles.cardContainer}>
              <Text>{item}</Text>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </Card>
        )}
      />
    </View>
  );
};

export default DocumentsListScreen;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: "2%",
  },
});
