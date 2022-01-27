import React , {useState,useEffect} from 'react'
import {View,Text,StyleSheet,SafeAreaView , Button} from 'react-native';
import { StatusBar } from "expo-status-bar";
import DisplayClass from '../components/displayClass'
import Greeting from '../components/greeting';
import DisplayClasses from '../components/displayClasses';
import { ScrollView } from 'react-native-gesture-handler';
import NoClass from '../components/noClass';

const data = require("../testData/test.json");
const Main = ({navigation}) =>{
  const t = "rgba(0,0,0,0)"
  const d = new Date();
  let dayy = d.getDay()
  const dayId = [{0:"Monday",1:"Tuesday",2:"Wednesday",3:"Thursday",4:"Friday",5:"Saturday"}]
  const dayIdInv = [{"Monday":0,"Tuesday":1,"Wednesday":2,"Thursday":3,"Friday":4,"Saturday":5}]
  const [classes,changeclasses] = useState(<View></View>)
  const [day, changeDay] = useState(dayId[0][dayy]);
  const temp = [t,t,t,t,t,t]
  const l =["M","T","W","T","F","S","S"]
  l[dayy] = dayId[0][dayy]
 const [dayNames,changeDayNames] = useState(l)

  temp[day] = "purple"
  const [dayList,changeDayList] = useState(temp)
console.warn(dayNames)

  useEffect(()=>{
changeclasses( <DisplayClasses currentday = {day} nav = {navigation} />)
    const l =["M","T","W","T","F","S","S"]
      const temp = [t,t,t,t,t,t]
      temp[dayIdInv[0][day]] = ""
      l[dayIdInv[0][day]] = day
      changeDayList(temp)
      changeDayNames(l)
  },[day,changeDay])
    return (
       <View style = {styles.mastercontainer}>
    
          <Greeting/>
          <View style={styles.days}>
            <Button title = "Go To Class" />
            <Button title = "+ ADD CLASS" color="orange" onPress = {()=>navigation.push("AddClass",{currentday:day})}/>
          </View>
          <View>
            <LiveClass/>
          </View>
          <View style={styles.days}>
        <Button title={dayNames[0]} onPress = {()=>changeDay("Monday")} color = {dayList[0]}/>
        <Button title={dayNames[1]} onPress = {()=>changeDay("Tuesday")} color = {dayList[1]}/>
        <Button title={dayNames[2]} onPress = {()=>changeDay("Wednesday")} color = {dayList[2]}/>
        <Button title={dayNames[3]} onPress = {()=>changeDay("Thursday")} color = {dayList[3]}/>
        <Button title={dayNames[4]} onPress = {()=>changeDay("Friday")} color = {dayList[4]}/>
        <Button title={dayNames[5]} onPress = {()=>changeDay("Saturday")} color = {dayList[5]}/>
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