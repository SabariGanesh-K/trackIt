import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView,Pressable } from "react-native";

// const data = require("../testData/test.json");
const id = 1;


const DisplayClass = (props) => {
  const day = props.currentday
  const data = props.data.item
  console.warn(data)
  // const [time, setTime] = useState("");
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("HOUR");
  const [subjectCode, setSubjectCode] = useState("FREE");
  const [status, setStatus] = useState("free");
//   useEffect(() => {
// 
//     setSubject(data.name)
//     setSubjectCode(data.code)
//     if (data.monday[id].type == "theory") {
//       setType("LAB");
//     } else {r
//       setType("THEORY");
//     }
//   });
 
const fromTime = (data.fromHour.toString() +" : "+ data.fromMinute.toString())
const toTime = (data.toHour.toString() +" : "+ data.toMinute.toString())
console.warn("dqwdxwqdx",day)
const key = (data.fromHour.toString()+ data.fromMinute.toString()+data.toHour.toString()+data.toMinute.toString()+data.name )
  return (
    <Pressable
    onPress={() => {}}
    onLongPress = {()=>{
      props.nav.push("EditClass",{currentday:props.currentday,name : data.name,code:data.code,fromHour:data.fromHour,toHour:data.toHour,fromMinute:data.fromMinute,toMinute:data.toMinute,key :key})
    }}
    style={({ pressed }) => [
      {
        backgroundColor: pressed
          ? 'black'
          :' rgba(0,0,0,0)'
      },
      styles.wrapperCustom
    ]}>
  <SafeAreaView style={styles.box}>
      <View style={{ backgroundColor: "#87431D" }}>
        <Text style={styles.text}>{fromTime} - </Text>
        
        <Text style={styles.text}>{toTime}</Text>
      
      </View>
      <View>
      <Text style={styles.text}>{data.code}</Text>
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <View>
     
      </View>
    </SafeAreaView>
  </Pressable>
  //  'rgba(210, 230, 255,0.5)'
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
