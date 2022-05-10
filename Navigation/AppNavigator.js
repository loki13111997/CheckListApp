import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Pressable, Text } from "react-native";
import ArrivalCheckListScreen from "../Screens/ArrivalCheckListScreen";
import CheckListInformationScreen from "../Screens/CheckListInformationScreen";
import DocumentsListScreen from "../Screens/DocumentsListScreen";
import SubDocumentsListScreen from "../Screens/SubDocumentsListScreen";
import AddNoteScreen from "../Screens/AddNoteScreen";
import AddImageScreen from "../Screens/AddImageScreen";
import AddCaptionScreen from "../Screens/AddCaptionScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ArrivalCheckListScreen"
          component={ArrivalCheckListScreen}
          options={{ title: "ARRIVAL CHECKLIST for PSC" }}
        />
        <Stack.Screen
          name="CheckListInformationScreen"
          component={CheckListInformationScreen}
        />
        <Stack.Screen
          name="DocumentsListScreen"
          component={DocumentsListScreen}
          options={{
            title: "",
            headerRight: () => (
              <Pressable>
                <Text>Edit</Text>
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="SubDocumentsListScreen"
          component={SubDocumentsListScreen}
        />
        <Stack.Screen name="AddNoteScreen" component={AddNoteScreen} />
        <Stack.Screen
          name="AddImageScreen"
          component={AddImageScreen}
          options={{ title: "Add Image" }}
        />
        <Stack.Screen
          name="AddCaptionScreen"
          component={AddCaptionScreen}
          options={{ title: "Add Caption" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
