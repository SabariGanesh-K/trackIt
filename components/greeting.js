import React, { useState, useEffect } from "react";
import { View, Text , StyleSheet } from "react-native";

const Greeting = () => {
  const [greeted, changeGreetedStatus] = useState(false);
  const [greeting, changeGreeting] = useState("Welcome ๐งโ๐");

  useEffect(() => {
    setTimeout(() => {
      const d = new Date();
      let hour = d.getHours();
     
      if (hour <= 12 && hour >= 0) {
        changeGreeting("Good Morning ... ๐");
      } else if (hour > 12 && hour <= 16) {
        changeGreeting("Good Afternoon ... ๐ค");
      } else if (hour > 16 && hour <= 19) {
        changeGreeting("Good Evening ... ๐ฅ");
      } else {
        changeGreeting("Nightt Vibezzz ๐");
      }
    },5000);
  });
  return (
   <View>
        <Text style = {styles.text}></Text>
        <Text style = {styles.text}>{greeting} ๐</Text>
      
      </View>

  );
};

const styles  = StyleSheet.create({
    body:{
       
    
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        fontStyle:'italic',
        backgroundColor:"#DBCBBD",
        padding:7,
    }
})
export default Greeting;
