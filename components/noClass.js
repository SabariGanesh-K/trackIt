import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NoClasss = (props) => {
  console.warn("No class entered");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>
          You do not have any class added on {props.currentday}{" "}
        </Text>
      </View>
      <View>
          <Text></Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}> Click </Text>
        <Text style={styles.buttontype}>+ADD CLASS </Text>
        <Text style={styles.text}> to add a new class </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: "grey",
    alignContent: "center",
    fontWeight: "bold",
  },
  buttontype: {
    backgroundColor: "orange",
    color: "white",
    padding: "1%",
  },
});

export default NoClasss;
