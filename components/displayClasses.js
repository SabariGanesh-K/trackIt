import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DisplayClass from "./displayClass";
import NoClasss from "./noClass";
import SundayMode from "./sundayMode";
const DisplayClasses = (props) => {
  console.warn("program started")
  const [day,changeDay] = useState(props.currentday)
  const [info,updateinfo] = useState([])

  const fetchdata = async() =>{
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      console.warn("given is",JSON.parse(jsonValue),"day",day,"dat[day]")
      updateinfo(JSON.parse(jsonValue))
    } catch(e) {
      console.warn("error:",e)
    }
  }

  if (info.length === 0){
    fetchdata()
  }

 function isEmpty(){
  const dat = {
    Monday: info.monday,
    Tuesday: info.tuesday,
    Wednesda: info.wednesday,
    Thursday: info.thursday,
    Friday: info.friday,
    Saturday: info.saturday,
  };
let count = 0
  for (var i in dat[props.currentday]){
count+=1
  }
//  console.warn("len is ",Object.keys(info.saturday).length,info)
 if (count === 0){
   return(true)
 }
 else{
  return(count === 0)
 }
}

  let   display;
  console.log("Info is",info)

useEffect(()=>{
  console.warn("useeffect reached")
  changeDay(props.currentday)
},[])
console.warn("qwert",props.currentday)
function displayit(){
  const status = isEmpty()

  if (day == "Sunday"){
    // return(
    //   <SundayMode/>
    // )
  }
  if (status) {
    console.warn("cdscdsc","isempty true",props.currentday,day)
   return  (
      <View>
      <NoClasss currentday = {props.currentday} />
      </View>
               
  )}
  else{ 
    // console.warn("cdscdsc",status,props.currentday,day)
    const dat = {
      "Monday": info.monday,
      "Tuesday": info.tuesday,
      "Wednesday": info.wednesday,
      "Thursday": info.thursday,
      "Friday": info.friday,
      "Saturday": info.saturday,
    };
    console.warn("reacchheddddd")
    return (  <FlatList
      data={dat[props.currentday]}
       keyExtractor={(item) => item.key}
       renderItem={(item) => <DisplayClass data={item} nav = {props.nav} currentday = {props.currentday}/>}
     />)
  
  
  }
}
console.warn("work done")
return(displayit())
};

export default DisplayClasses;
