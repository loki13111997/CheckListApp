import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  launchImageLibraryAsync,
  useMediaLibraryPermissions,
} from "expo-image-picker";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const AddImageScreen = ({ navigation }) => {
  const [cameraStatus, requestPermission] = useCameraPermissions();
  const [imagePickerStatus, requestImagePermission] =
    useMediaLibraryPermissions();
  const [pickedImage, setPickedImage] = useState([]);
  const verifyPermission = async () => {
    if (cameraStatus.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraStatus.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission",
        "You need to grant permission to take image"
      );
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage((prevState) => [...prevState, image.uri]);
  };

  const verifyImagePermission = async () => {
    if (imagePickerStatus.status === PermissionStatus.UNDETERMINED) {
      const imagePermissionResponse = await requestImagePermission();
      return imagePermissionResponse.granted;
    }
    if (imagePickerStatus.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission",
        "You need to grant permission to pick image"
      );
    }
    return true;
  };

  const openImagePickerAsync = async () => {
    const hasImagePermission = await verifyImagePermission();
    if (!hasImagePermission) {
      return;
    }
    const pickerResult = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage((prevState) => [...prevState, pickerResult.uri]);
  };

  const ListEmptyComponent = () => (
    <Text style={styles.noData}>No image picked yet.</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={takeImageHandler}>
          <Text style={styles.buttonTitle}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openImagePickerAsync}>
          <Text style={styles.buttonTitle}>Album</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={pickedImage}
        keyExtractor={(item, index) => index}
        ListEmptyComponent={ListEmptyComponent}
        renderItem={({ item }) => {
          return (
            <>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item }} />
              </View>
              <View style={styles.imageButtonContainer}>
                <AntDesign name="delete" size={42} color="black" />
                <SimpleLineIcons
                  name="note"
                  size={38}
                  color="black"
                  onPress={() => navigation.navigate("AddCaptionScreen")}
                />
              </View>
            </>
          );
        }}
      />
    </View>
  );
};

export default AddImageScreen;

const styles = StyleSheet.create({
  noData: {
    textAlign: "center",
    marginVertical: "3%",
  },
  container: { flex: 1 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "green",
    height: 60,
    alignItems: "center",
    paddingHorizontal: "2%",
  },
  buttonTitle: { color: "white", fontSize: 18 },
  imageContainer: { alignItems: "center", marginTop: "5%", height: 200 },
  image: { height: "100%", width: "100%" },
  imageButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "10%",
  },
});
