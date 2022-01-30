import React, { useState,useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TimePicker } from "react-native-simple-time-picker";
// import { useEffect } from "react/cjs/react.development";
import AsyncStorage from "@react-native-async-storage/async-storage";
const EditClassModal = ({route,navigation}) => {
  const id = "1";


  const [day,changeDay] = useState(route.params.currentday)
  const [className, changeClassname] = useState(route.params.name);
  const [classCode, changeClassCode] = useState(route.params.code);
  const [fromHour, changeFromHour] = useState(route.params.fromHour);
  const [toHour, changeToHour] = useState(route.params.toHour);
  const [fromMinute, changeFromMinute] = useState(route.params.fromMinute);
  const [toMinute, changeToMinute] = useState(route.params.toMinute);
  const [info,changeinfo] = useState([])
  const ff = { hours: fromHour, minutes: fromMinute };
  const tt = { hours: toHour, minutes: toMinute };
const oldkey = route.params.key


  const editTheClass = () =>{
    const dat = {
      Monday: info.monday,
      Tuesday: info.tuesday,
      Wednesday: info.wednesday,
      Thursday: info.thursday,
      Friday: info.friday,
      Saturday: info.saturday,
    };



    const valid=() =>{
      console.warn(dat[day])
       const [done,changeDone] = useState(true)
       dat[day].map((item)=>{
        if((( item.fromHour >= fromHour && item.toHour <= toHour && item.fromMinute >= fromMinute && item.toMinute <= toHour )||(item.fromHour<=toHour && item.fromMinute <= toMinute && item.toHour >= fromHour && item.toMinute >= fromMinute))&& item.name !== route.params.name && item.code !== route.params.code ) changeDone(false)
      })
      return(
          done
      )
    }
    const newkey = (fromHour.toString()+ fromMinute.toString()+toHour.toString()+toMinute.toString()+className )

 
    function pushit(){
      console.warn("info is now ",info,className)
      dat[day].push({type:"theory",name:className,code:classCode,credits:1,fromHour: fromHour ,fromMinute: fromMinute ,toHour: toHour ,toMinute: toMinute ,key: newkey})
      
      console.warn("Edited as ",JSON.stringify(info))
       AsyncStorage.setItem('@storage_Key', JSON.stringify(info))
      Alert.alert("Class EDITED. :)")
      navigation.push("Main")
    }
    if (valid){

    // const temp = info
      console.warn("info is",info,route.params.currentday,dat[day])
      console.warn(oldkey)
      const change = dat[day].filter((item)=>
        item.key !== oldkey
      )  
      dat[day].length = 0
      change.map((item)=> dat[day].push(item))
      console.warn("after change",dat[day],"dxas",change)
      pushit()
   
    }
    else{
      Alert.alert("Class already exist at that time ... Thinkkkk")
    }


  }

  const deleteTheClass = () =>{
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "DELETEE",
          onPress: () => {
            const dat = {
              Monday: info.monday,
              Tuesday: info.tuesday,
              Wednesday: info.wednesday,
              Thursday: info.thursday,
              Friday: info.friday,
              Saturday: info.saturday,
            };
        
            const change = dat[day].filter((item)=>
            item.key !== oldkey
          )  
          dat[day].length = 0
          change.map((item)=> dat[day].push(item))
          console.warn("deleted",info)
          AsyncStorage.setItem('@storage_Key', JSON.stringify(info))  
navigation.push("Main")

          },
          style: "destructive",
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>{},
      }
    );

  
  }

  // const deleteClass = () =>{
  //   const change = dat[day].filter((item)=>{
  //       item.key === key
  //   })
  //   dat[day] = change
  //   Alert.alert("CLASS DELETED :))")
  //   navigation.push("Main")
  // }
  useEffect(()=>{
    const fetchdata = async () => {
      
      try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        console.warn("given is",JSON.parse(jsonValue),"day",day,"dat[day]")
        changeinfo(JSON.parse(jsonValue))
      } catch(e) {
        console.warn("error:",e)
      }
    }
    fetchdata()
  },[day,changeDay])
  return (
    <ScrollView style={styles.container}>
      <Text>{day}</Text>
      <View style = {styles.addpageheader}>
        <Button title = "<Back" onPress = {()=>navigation.goBack()} />
        <View style = {styles.titletextbox}>
          
          <Text style = {styles.titletext}>  EDIT YOUR CLASS</Text>
          
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

      <View style={{ justifyContent: "space-between", margin: "10%" }}>
        <View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="GO BACK !! DON'T CHANGE IT"
              onPress={() => navigation.goBack()}
              color="grey"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="SAVE CHANGES"
              onPress={editTheClass}
              color="green"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="DELETE CLASS :)"
              onPress={deleteTheClass}
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
   padding:10,
  
    backgroundColor: '#290001',
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
  titletextbox:{
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
  
  },
  titletext:{
    color:'white',
 
    
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
});
export default EditClassModal;
