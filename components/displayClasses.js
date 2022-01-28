import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DisplayClass from "./displayClass";
import NoClasss from "./noClass";
const DisplayClasses = (props) => {
  
  const [day,changeDay] = useState(props.currentday)
  // const data = require("../testData/test.json");
  const [info,updateinfo] = useState([])

  
  const [status,changeStatus] = useState(false)
  const dat = {
    "Monday": info.monday,
    "Tuesday": info.tuesday,
    "Wednesday": info.wednesday,
    "Thursday": info.thursday,
    "Friday": info.friday,
    "Saturday": info.saturday,
  };
function isEmpty(){
//   const dat = {
//     "Monday": info.monday,
//     "Tuesday": info.tuesday,
//     "Wednesday": info.wednesday,
//     "Thursday": info.thursday,
//     "Friday": info.friday,
//     "Saturday": info.saturday,
//   };
//  console.warn(dat[props.currentday].length)
  return(dat[props.currentday].length == 0)
// return(dat[props.currentday].length)
}
  // useEffect(()=>{
  //     // changeStatus(dat[day].length===0)
  //     
  // },[day])
  var  display;
  //   function display(){
  //     if (dat[day] !== []) {
  //         return(
  //          <FlatList
  //            data={dat[day]}
  //            keyExtractor={(item) => item.key}
  //            renderItem={(item) => <DisplayClass data={item} />}
  //          />
  //        )
  //        }
  //        else{
  //            return(
  // <View><NoClass currentday={day} /></View>
  //            )
  //        }
  //   };

  //       if (dat[day] !== []){
  //
  //           display = <NoClass currentday = {day} />
  //       }
  //       else{
  //         display = (
  //             <FlatList
  //             data={dat[day]}
  //             keyExtractor={(item) => item.key}
  //             renderItem={(item) => <DisplayClass data={item} />}
  //           />
  //
  //         )
  //       }



  console.log("Info is",info)


useEffect(()=>{
  
  changeDay(props.currentday)
  const fetchdata = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      console.warn("given is",JSON.parse(jsonValue),"day",day,"dat[day]")
      updateinfo(JSON.parse(jsonValue))
    } catch(e) {
      console.warn("error:",e)
    }
  }
  fetchdata()
},[])

// useEffect(()=>{
//   changeStatus(isEmpty())
// },[day,changeDay])


console.warn("cdscdsc",props.currentday,isEmpty===true)
if (status && 1) {
  
  display =  (
    <View>
    <NoClasss currentday = {day} />
    </View>
             
)}
else{ 
  console.log("reacchheddddd")
  display = (  <FlatList
    data={dat[day]}
     keyExtractor={(item) => item.key}
     renderItem={(item) => <DisplayClass data={item} nav = {props.nav} />}
   />)


}
return(display)
};

export default DisplayClasses;
