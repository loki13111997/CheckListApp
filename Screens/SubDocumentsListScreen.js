import { useLayoutEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Card from "../Components/UI/Card";

const myArray = [
  {
    title: "Crew Certificates",
    content:
      "Are valid crew certificates kept onboards? -Crew certificates (STCW) and the Flag administration's endorsements -Medical certificates",
  },
  {
    title: "Manuals",
    content:
      "Are valid crew certificates kept onboards? -Crew certificates (STCW) and the Flag administration's endorsements -Medical certificates",
  },
];

const SubDocumentsListScreen = ({ route, navigation }) => {
  const screnName = route.params.screnName;
  const [isChecked, setChecked] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: screnName,
    });
  }, [navigation]);
  return (
    <>
      <FlatList
        data={myArray}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <Card>
            <View style={styles.cardContainer}>
              <View style={styles.titleContainer}>
                <Text>{item.title}</Text>
                <Checkbox value={isChecked} onValueChange={setChecked} />
              </View>
              <Text style={styles.content}>{item.content}</Text>
              <View style={styles.addNoteContainer}>
                <Text>Add Note:</Text>
                <SimpleLineIcons
                  name="note"
                  size={24}
                  color="black"
                  onPress={() => navigation.navigate("AddNoteScreen")}
                />
              </View>
              <View style={styles.addNoteContainer}>
                <Text>Add Image:</Text>
                <AntDesign
                  name="plus"
                  size={24}
                  color="black"
                  onPress={() => navigation.navigate("AddImageScreen")}
                />
              </View>
            </View>
          </Card>
        )}
      />
    </>
  );
};

export default SubDocumentsListScreen;

const styles = StyleSheet.create({
  cardContainer: {
    margin: "3%",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: { marginVertical: "5%" },
  addNoteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "3%",
  },
});
