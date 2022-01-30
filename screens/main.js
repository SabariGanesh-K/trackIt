import React , {useState,useEffect} from 'react'
import {View,Text,StyleSheet,SafeAreaView , Button} from 'react-native';
import { StatusBar } from "expo-status-bar";
import DisplayClass from '../components/displayClass'
import Greeting from '../components/greeting';
import DisplayClasses from '../components/displayClasses';
import { ScrollView } from 'react-native-gesture-handler';
import NoClass from '../components/noClass';
import LiveClass from '../components/liveclass';
import SundayMode from '../components/sundayMode';
// const data = require("../testData/test.json");
const Main = ({navigation}) =>{
  const data = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
  const t = "rgba(0,0,0,0)"
  const d = new Date();
  let dayy = d.getDay()
 
  const dayId = [{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}]
  const dayIdInv = [{"Sunday":0,"Monday":1,"Tuesday":2,"Wednesday":3,"Thursday":4,"Friday":5,"Saturday":6}]
  const [classes,changeclasses] = useState(<View></View>)
  const [day, changeDay] = useState(dayId[0][dayy]);
  const temp = [t,t,t,t,t,t,t]
  const l =["S","M","T","W","T","F","S"]
  l[dayy] = dayId[0][dayy]
 const [dayNames,changeDayNames] = useState(l)

  temp[day] = "purple"
  const [dayList,changeDayList] = useState(temp)
console.warn(dayNames)

  useEffect(()=>{
    console.log("Called for ",day)


    const l =["S","M","T","W","T","F","S"]
    const temp = [t,t,t,t,t,t,t]
      temp[dayIdInv[0][day]] = "purple"
      l[dayIdInv[0][day]] = day
      changeDayList(temp)
      changeDayNames(l)
      const curr = day
      if (day == "Sunday"){
        changeclasses(<SundayMode/>)
      }
      else{
        changeclasses( <DisplayClasses currentday = {curr} nav = {navigation} />)
      }
      
  },[day,changeDay])

//   useEffect(()=>{  
// 
//   },[])
    return (
       <View style = {styles.mastercontainer}>
    
          <Greeting/>
          <View style={styles.days}>
            <Button title = "Go To Class" onPress = {()=>navigation.push("Go to Class")} />
            <Button title = "+ ADD CLASS" color="orange" onPress = {()=>navigation.push("AddClass",{currentday: day})}/>
          </View>
          <View>
            {/* <LiveClass  /> */}
          </View>
          <View style={styles.days}>
        <Button title={dayNames[1]} onPress = {()=>changeDay("Monday")} color = {dayList[1]}/>
        <Button title={dayNames[2]} onPress = {()=>changeDay("Tuesday")} color = {dayList[2]}/>
        <Button title={dayNames[3]} onPress = {()=>changeDay("Wednesday")} color = {dayList[3]}/>
        <Button title={dayNames[4]} onPress = {()=>changeDay("Thursday")} color = {dayList[4]}/>
        <Button title={dayNames[5]} onPress = {()=>changeDay("Friday")} color = {dayList[5]}/>
        <Button title={dayNames[6]} onPress = {()=>changeDay("Saturday")} color = {dayList[6]}/>
      </View>
    
    <ScrollView style = {{height:'100%'}}>
         {classes}
      </ScrollView>
       </View>
      );
}
const styles = StyleSheet.create({
  mastercontainer:{
    display:'flex',
  
    flexDirection: 'column',
    
flex:1,
backgroundColor: '#290001',
  },
    container: {
      flex: 1,
     backgroundColor: '#290001',
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },

    days: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "5%",
      borderRadius: 20,
    },
  });
  export default Main