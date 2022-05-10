import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import AppNavigator from "./Navigation/AppNavigator";
import { createTable, fetchPlaces, insertCheckList } from "./Utility/Database";
import AppLoading from "expo-app-loading";

export default function App() {
  const [dbIntialized, setDbInitialized] = useState(false);
  const [table,setTable]=useState()
  useEffect(async () => {
    // createTable().then
    //   .then(() => {
    //     setDbInitialized(true);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    try {
      await createTable();
      await insertCheckList(
        "aaaa",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw2naTCRsBkPxMlNrw4eRYIV&ust=1652272599371000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCIjf0pz51PcCFQAAAAAdAAAAABAD",
        "yes"
      );
      const a = await fetchPlaces();
      console.log(a,'ppppppppppp');
      await setTable(a)
      setDbInitialized(true);
    } catch (err) {
      alert(err.message);
    }
  }, []);
  // console.log(table,'ppppppppppppp');
  if (!dbIntialized) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
