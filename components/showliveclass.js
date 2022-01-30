import React, { useEffect, useState } from "react";

import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
// const data = require("../testData/test.json")
import AsyncStorage from "@react-native-async-storage/async-storage";


const ShowLiveClass = () =>{


    const [fromTime,changefromtime] = useState("")
    const [toTime,changetotime] = useState("")
    const [code,changecode] = useState("")
    const [name,changename] = useState("")
    const [info,updateinfo] = useState("")
    const hour = 10
    const minute = 0
    const [day,changeday] = useState( ()=>{
        const d = new Date()
        return(d.getDay())
    })
    const [detectionstatus,changedetectionstatus] = useState(false)
    const fetchdata = async() =>{
        console.warn("reached fetchdata")
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key')
          console.warn("given is",JSON.parse(jsonValue),"day",day,"dat[day]")
          updateinfo(JSON.parse(jsonValue))
          console.warn("info is now",info)
        } catch(e) {
          console.warn("error:",e)
        }
      }
    
      if (day == 0){
          return(<View></View>)
      }
      if (info.length === 0){
        fetchdata()
      }

      function detectLive() {
        console.warn("reached detectlive")
        const dat = {
            "1": info.monday,
            "2": info.tuesday,
            "3": info.wednesday,
            "4": info.thursday,
            "5": info.friday,
            "6": info.saturday,
        }
        dat[day.toString()].map((item)=>{
            console.warn("iterating",item)
            if (  item.fromHour <= hour &&
                item.toHour >= hour &&
                (hour<item.toHour || item.toMinute >= minute) && ( hour>item.fromHour || item.fromMinute <= minute)){
                    console.warn("detected",item)
                    changename(item.name)
                    changecode(item.code)
                    changefromtime( (item.fromHour.toString() + " : " + item.fromMinute.toString()))
                    changetotime((item.toHour.toString() + " : " + item.toMinute.toString()))

                }
            

        })
        changedetectionstatus(true)
      }


      console.warn("info is nw",info)
      if (!detectionstatus ){
          if (!(info.length == 0)){
              console.log("reached,info len !=0")
          detectLive()}
      }
      else{
          console.warn("detection status true")
      }




    return(
        <Pressable
        onPress={() => {}}
        onLongPress={() => {}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "black" : " rgba(0,0,0,0)",
          },
          styles.wrapperCustom,
        ]}
      >
        {/* */}
        <SafeAreaView style={styles.box}>
          <Text>LIVE</Text>
          <View style={{ backgroundColor: "lightgreen" }}>
            <Text style={styles.text}>{fromTime} - </Text>
  
            <Text style={styles.text}>{toTime}</Text>
          </View>
          <View>
            <Text style={styles.text}>{code}</Text>
            <Text style={styles.text}>{name}</Text>
          </View>
          <View></View>
        </SafeAreaView>
      </Pressable>
    )
}
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
export  default ShowLiveClass