import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TimePicker } from "react-native-simple-time-picker";

const AddClassModal = ({navigation,route}) => {
  const [day, changeDay] = useState(route.params.currentday);
  const [className, changeClassname] = useState("");
  const [classCode, changeClassCode] = useState("");
  const [fromHour, changeFromHour] = useState(0);
  const t = "rgba(0,0,0,0)"

  const [dayList,changeDayList] = useState([t,t,t,t,t,t])
  
  const [toHour, changeToHour] = useState(0);
  const [fromMinute, changeFromMinute] = useState(0);
  const [toMinute, changeToMinute] = useState(0);
  const ff = { hours: fromHour, minutes: fromMinute };
  const tt = { hours: toHour, minutes: toMinute };
    const dayId = [{"Monday":0,"Tuesday":1,"Wednesday":2,"Thursday":3,"Friday":4,"Saturday":5}]
  
    const reset = () =>{
      changeDay(route.params.currentday)
      changeClassname("")
      changeClassCode("")
      changeFromHour(0)
      changeToHour(0)
      changeFromMinute(0)
      changeToMinute(0)
    }
useEffect(()=>{
    const temp = [t,t,t,t,t,t]
    temp[dayId[0][day]] = "purple"
   
    changeDayList(temp)
},[day,changeDay])
  return (
    <ScrollView style={styles.container}>
      <Text></Text>
      <View style = {styles.addpageheader}>
        <Button title = "<Back" onPress = {()=>navigation.goBack()} />
        <View style = {styles.titletextbox}>
          
          <Text style = {styles.titletext}>ADD YOUR CLASS</Text>
          
      </View>
      </View>
      <View style={styles.days}>
        <Button title="M" onPress = {()=>changeDay("Monday")} color = {dayList[0]} />
        <Button title="T" onPress = {()=>changeDay("Tuesday")} color = {dayList[1]} />
        <Button title="W" onPress = {()=>changeDay("Wednesday")} color = {dayList[2]}/>
        <Button title="T" onPress = {()=>changeDay("Thursday")} color = {dayList[3]}/>
        <Button title="F" onPress = {()=>changeDay("Friday")} color = {dayList[4]}/>
        <Button title="S" onPress = {()=>changeDay("Saturday")} color = {dayList[5]}/>
      </View>
      <View style = {styles.currentdayBG}>
          <View>
          <Text style = {styles.currentdaytext}>{day}</Text>
          </View>
      </View>
      <View>
        <Text style={styles.text}>CLASS NAME </Text>
        <TextInput
          style={styles.input}
          onChangeText={changeClassname}
          value={className}
        />
      </View>

      <View>
        <Text style={styles.text}>CLASS CODE </Text>
        <TextInput
          style={styles.input}
          onChangeText={changeClassCode}
          value={classCode}
        />
      </View>

      <View>
        <Text style={styles.text}>FROM </Text>
        <View style={styles.timepicker}>
          <TimePicker
            value={ff}
            onChange={(value) => {
              changeFromHour(value.hours);
              changeFromMinute(value.minutes);
            }}
          />
        </View>
      </View>
      <View>
        <Text style={styles.text}>TO </Text>
        <View style={styles.timepicker}>
          <TimePicker
            value={tt}
            zeroPadding={true}
            onChange={(value) => {
              changeToHour(value.hours);
              changeToMinute(value.minutes);
            }}
          />
        </View>
      </View>

      <View style={{ justifyContent: "space-around", margin: "10%" }}>
        <View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="RESET"
              onPress={reset}
              color="grey"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="ADD THE CLASSS"
              onPress={() => {}}
              color="green"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="DELETE AND GO BACKKKK"
              onPress={()=>navigation.goBack()}
              color="red"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",

  
    backgroundColor: '#290001',
  },
  days: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10%",
    borderRadius: 20,
  },
  text: {
    color: "white",
  },
  button: {
    borderRadius: 6,
    height: "3",
  },
  buttonContainer: {
    margin: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#DBCBBD",
    borderColor: "#C87941",
  },
  timepicker: {
    backgroundColor: "#DBCBBD",
  },
  currentdayBG :{
      backgroundColor:'black',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignContent:'center',
      padding:6,
      margin:'5%',
      borderRadius:10
  },
  currentdaytext:{
      color:'white',
      justifyContent:'center',
      alignContent:'center'
  },
  addpageheader:{
 
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    padding:6,
    margin:'5%',
    borderRadius:10,
    justifyContent: "flex-start",
  },
  titletextbox:{
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
  
  },
  titletext:{
    color:'white',
 
    
  }
});

export default AddClassModal;
