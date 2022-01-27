import React, { useState, useEffect } from "react";
import { View, Text , StyleSheet } from "react-native";

const Greeting = () => {
  const [greeted, changeGreetedStatus] = useState(false);
  const [greeting, changeGreeting] = useState("Welcome 🎧✔🏅");

  useEffect(() => {
    setTimeout(() => {
      const d = new Date();
      let hour = d.getHours();
      hour = 19
      if (hour <= 12 && hour >= 0) {
        changeGreeting("Good Morning ... 😄");
      } else if (hour > 12 && hour <= 16) {
        changeGreeting("Good Afternoon ... 🤗");
      } else if (hour > 16 && hour <= 19) {
        changeGreeting("Good Evening ... 🥂");
      } else {
        changeGreeting("Nightt Vibezzz 😈");
      }
    },5000);
  });
  return (
   <View>
        <Text style = {styles.text}></Text>
        <Text style = {styles.text}>{greeting} 🚀</Text>
      
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
