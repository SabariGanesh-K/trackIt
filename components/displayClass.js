import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const data = require("../testData/test.json");
const id = 1;


const DisplayClass = () => {
  const [time, setTime] = useState("");
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("HOUR");
  const [subjectCode, setSubjectCode] = useState("FREE");
  const [status, setStatus] = useState("free");
  useEffect(() => {
    if (id == 1) {
      setTime("8:00-8:50");
    }
    setSubject(data.monday[id].name)
    setSubjectCode(data.monday[id].code)
    if (data.monday[id].type == "theory") {
      setType("LAB");
    } else {
      setType("THEORY");
    }
  });

  return (
    <SafeAreaView style={styles.box}>
      <View style={{ backgroundColor: "#87431D" }}>
        <Text style={styles.text}>{time}</Text>
        <Text style={styles.text}>{type}</Text>
      </View>
      <View>
      <Text style={styles.text}>{subjectCode}</Text>
        <Text style={styles.text}>{subject}</Text>
      </View>
      <View>
     
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#C87941",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "5%",
    borderRadius:12,
    padding: 20,
    
  },
  text: {
    fontSize: 15,
    alignContent:'center',
    justifyContent:'center'
  },
});
export default DisplayClass;
