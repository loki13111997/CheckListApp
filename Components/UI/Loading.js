import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

const Loading = (props) => {
  return (
    <ActivityIndicator
      size={props.size}
      {...props}
      color={Colors.primaryColor}
      style={styles.indicator}
    />
  );
};

export default Loading;

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
