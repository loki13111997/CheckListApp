import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

const Card = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.cardContainer}>
      {children}
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    // flex: 1,
    marginHorizontal: "2%",
    padding: "3%",
    borderRadius: 5,
    elevation: 2,
    paddingHorizontal: "3%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
});
