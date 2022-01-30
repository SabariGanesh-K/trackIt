import React, { useEffect, useState } from "react";

import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
// const data = require("../testData/test.json")
import AsyncStorage from "@react-native-async-storage/async-storage";
const LiveClass = () => {
  const [live, changelive] = useState([]);
  const [data, changedata] = useState([]);
  const [fromTime, changefromtime] = useState("");
  const [toTime, changetotime] = useState("");
  const [name, changename] = useState("");
  const [code, changecode] = useState("");
  const [loading,changeloading] = useState(true)
  const [display, changedisplay] = useState(<View></View>);
  const d = new Date();
  const [day, changeDay] = useState(5);
  // if (d.getDay() === 0){
  //   return(<View></View>)
  // }
  // else{
  //   changeDay(d.getDay())
  // }
  const [available,changeavailable] = useState(false)

  // const hour = g.getHours()
  const hour = 10;
  const minute = d.getMinutes();

 
console.warn(data)


useEffect(()=>{
  const fetchdata = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");
      console.warn("given is", JSON.parse(jsonValue), day, "dat[day]");
      changedata(JSON.parse(jsonValue));
     changeloading(false)
    } catch (e) {
      console.warn("error:", e);
    }
  };
fetchdata()
},[])

 


if (!loading){
    console.warn("Reached else")
    const dat = {
      "1": data.monday,
      "2": data.tuesday,
      "3": data.wednesday,
      "4": data.thursday,
      "5": data.friday,
      "6": data.saturday,
    };
   
    dat[day.toString()].map((item) => {
      console.warn("swdxs",item);

   
      if (
        item.fromHour <= hour &&
        item.toHour >= hour &&
        item.fromMinute <= minute ||
        item.toMinute >= minute
      ){ 
        changelive(item);
        changeavailable(true)
}
      
    });
    console.warn(" live",live)

    if (!available){
      return(<View></View>)
    }
    else{
      console.warn(live,"dasdaxsaxssx")
      changefromtime(
        live.fromHour.toString() + " : " + live.fromMinute.toString()
      );
     
      changetotime(live.toHour.toString() + " : " + live.toMinute.toString());
      changename(live.name);
      changecode(live.code);
      changedisplay (
 
      );
    }
   
  }

  return(display)


};
const styles = StyleSheet.create({
  box: {
    backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "5%",
    borderRadius: 12,
    padding: 20,
  },
  text: {
    fontSize: 15,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default LiveClass;
