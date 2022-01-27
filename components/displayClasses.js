import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import DisplayClass from "./displayClass";
import NoClasss from "./noClass";
const DisplayClasses = (props) => {
  const day = props.currentday;
  const data = require("../testData/test.json");

  const dat = {
    Monday: data.monday,
    Tuesday: data.tuesday,
    Wednesday: data.wednesday,
    Thursday: data.thursday,
    Friday: data.friday,
    Saturday: data.saturday,
  };
  console.warn(dat[day]);
  const [status,changeStatus] = useState(dat[day].length===0)
  console.warn([]===null)

  useEffect(()=>{
      changeStatus(dat[day].length===0)
  })
  let display;
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
if (status) return (
    <View>
    <NoClasss currentday = {day} />
    </View>
             
)
else return(  <FlatList
    data={dat[day]}
     keyExtractor={(item) => item.key}
     renderItem={(item) => <DisplayClass data={item} nav = {props.nav} />}
   />)
};

export default DisplayClasses;
