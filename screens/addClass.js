import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
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
      const [info,updateinfo] = useState([])
    const addClassToStorage = () =>{


     
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
          if(( item.fromHour >= fromHour && item.toHour <= toHour && item.fromMinute >= fromMinute && item.toMinute <= toHour)||(item.fromHour<=toHour && item.fromMinute <= toMinute && item.toHour >= fromHour && item.toMinute >= fromMinute)) changeDone(false)
        })
        return(
            done
        )
      }
      const key = (fromHour.toString()+ fromMinute.toString()+toHour.toString()+toMinute.toString()+className )
      if (valid) {
        console.warn("info is",info)
        console.warn(dat[day])
        dat[day].push({type:"theory",name:className,code:classCode,credits:1,fromHour: fromHour ,fromMinute: fromMinute ,toHour: toHour ,toMinute: toMinute ,key: key})
        console.warn("Adding",info)
         AsyncStorage.mergeItem('@storage_Key', JSON.stringify(info))
        Alert.alert("Class addeddd. :)")
        navigation.push("Main")
      }
      else{
        Alert.alert("Dear idiot , Data already exist !!" )
      }


    }
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
        <Picker
        selectedValue={fromHour}
        style = {{width:'50%'}}
        onValueChange={(itemValue, itemIndex) => changeFromHour(itemValue)}
      >
        <Picker.Item label="0" value={0} />
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
        <Picker.Item label="5" value={5} />
        <Picker.Item label="6" value={6} />
        <Picker.Item label="7" value={7} />
        <Picker.Item label="8" value={8} />
        <Picker.Item label="9" value={9} />
        <Picker.Item label="10" value={10} />
        <Picker.Item label="11" value={11} />
        <Picker.Item label="12" value={12} />
        <Picker.Item label="13" value={13} />
        <Picker.Item label="14" value={14} />
        <Picker.Item label="15" value={15} />
        <Picker.Item label="16" value={16} />
        <Picker.Item label="17" value={17} />
        <Picker.Item label="18" value={18} />
        <Picker.Item label="19" value={19} />
        <Picker.Item label="20" value={20} />
        <Picker.Item label="21" value={21} />
        <Picker.Item label="22" value={22} />
        <Picker.Item label="23" value={23} />
       
      </Picker>
      <Picker
        selectedValue={fromMinute}
        style = {{width:'50%'}}
        onValueChange={(itemValue, itemIndex) => changeFromMinute(itemValue)}
      > 
        <Picker.Item label="0" value={0} />
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
        <Picker.Item label="5" value={5} />
        <Picker.Item label="6" value={6} />
        <Picker.Item label="7" value={7} />
        <Picker.Item label="8" value={8} />
        <Picker.Item label="9" value={9} />
        <Picker.Item label="10" value={10} />
        <Picker.Item label="11" value={11} />
        <Picker.Item label="12" value={12} />
        <Picker.Item label="13" value={13} />
        <Picker.Item label="14" value={14} />
        <Picker.Item label="15" value={15} />
        <Picker.Item label="16" value={16} />
        <Picker.Item label="17" value={17} />
        <Picker.Item label="18" value={18} />
        <Picker.Item label="19" value={19} />
        <Picker.Item label="20" value={20} />
        <Picker.Item label="21" value={21} />
        <Picker.Item label="22" value={22} />
        <Picker.Item label="23" value={23} /> 
        <Picker.Item label="24" value={24} />
        <Picker.Item label="25" value={25} />
        <Picker.Item label="26" value={26} />
        <Picker.Item label="27" value={27} />
        <Picker.Item label="28" value={28} />
        <Picker.Item label="29" value={29} />
        <Picker.Item label="30" value={30} />
        <Picker.Item label="31" value={31} />
        <Picker.Item label="32" value={32} />
        <Picker.Item label="33" value={33} />
        <Picker.Item label="34" value={34} />
        <Picker.Item label="35" value={35} />
        <Picker.Item label="36" value={36} />
        <Picker.Item label="37" value={37} />
        <Picker.Item label="38" value={38} />
        <Picker.Item label="39" value={39} />
        <Picker.Item label="40" value={40} />
        <Picker.Item label="41" value={41} />
        <Picker.Item label="42" value={42} />
        <Picker.Item label="43" value={43} />
        <Picker.Item label="44" value={44} />
        <Picker.Item label="45" value={45} />
        <Picker.Item label="46" value={46} />
        <Picker.Item label="47" value={47} />
        <Picker.Item label="48" value={48} />
        <Picker.Item label="49" value={49} />
        <Picker.Item label="50" value={50} />
        <Picker.Item label="51" value={51} />
        <Picker.Item label="52" value={52} />
        <Picker.Item label="53" value={53} />
        <Picker.Item label="54" value={54} />
        <Picker.Item label="55" value={55} />
        <Picker.Item label="56" value={56} />
        <Picker.Item label="57" value={57} />
        <Picker.Item label="58" value={58} />
        <Picker.Item label="59" value={59} />
      </Picker>
        </View>

      </View>
      <View>
        <Text style={styles.text}>TO </Text>
        <View style={styles.timepicker}>
            <Picker
        selectedValue={toHour}
        style = {{width:'50%'}}
        onValueChange={(itemValue, itemIndex) => changeToHour(itemValue)}
      >
        <Picker.Item label="0" value={0} />
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
        <Picker.Item label="5" value={5} />
        <Picker.Item label="6" value={6} />
        <Picker.Item label="7" value={7} />
        <Picker.Item label="8" value={8} />
        <Picker.Item label="9" value={9} />
        <Picker.Item label="10" value={10} />
        <Picker.Item label="11" value={11} />
        <Picker.Item label="12" value={12} />
        <Picker.Item label="13" value={13} />
        <Picker.Item label="14" value={14} />
        <Picker.Item label="15" value={15} />
        <Picker.Item label="16" value={16} />
        <Picker.Item label="17" value={17} />
        <Picker.Item label="18" value={18} />
        <Picker.Item label="19" value={19} />
        <Picker.Item label="20" value={20} />
        <Picker.Item label="21" value={21} />
        <Picker.Item label="22" value={22} />
        <Picker.Item label="23" value={23} />
       
      </Picker>
      <Picker
        selectedValue={toMinute}
        style = {{width:'50%'}}
        onValueChange={(itemValue, itemIndex) => changeToMinute(itemValue)}
      > 
        <Picker.Item label="0" value={0} />
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
        <Picker.Item label="5" value={5} />
        <Picker.Item label="6" value={6} />
        <Picker.Item label="7" value={7} />
        <Picker.Item label="8" value={8} />
        <Picker.Item label="9" value={9} />
        <Picker.Item label="10" value={10} />
        <Picker.Item label="11" value={11} />
        <Picker.Item label="12" value={12} />
        <Picker.Item label="13" value={13} />
        <Picker.Item label="14" value={14} />
        <Picker.Item label="15" value={15} />
        <Picker.Item label="16" value={16} />
        <Picker.Item label="17" value={17} />
        <Picker.Item label="18" value={18} />
        <Picker.Item label="19" value={19} />
        <Picker.Item label="20" value={20} />
        <Picker.Item label="21" value={21} />
        <Picker.Item label="22" value={22} />
        <Picker.Item label="23" value={23} /> 
        <Picker.Item label="24" value={24} />
        <Picker.Item label="25" value={25} />
        <Picker.Item label="26" value={26} />
        <Picker.Item label="27" value={27} />
        <Picker.Item label="28" value={28} />
        <Picker.Item label="29" value={29} />
        <Picker.Item label="30" value={30} />
        <Picker.Item label="31" value={31} />
        <Picker.Item label="32" value={32} />
        <Picker.Item label="33" value={33} />
        <Picker.Item label="34" value={34} />
        <Picker.Item label="35" value={35} />
        <Picker.Item label="36" value={36} />
        <Picker.Item label="37" value={37} />
        <Picker.Item label="38" value={38} />
        <Picker.Item label="39" value={39} />
        <Picker.Item label="40" value={40} />
        <Picker.Item label="41" value={41} />
        <Picker.Item label="42" value={42} />
        <Picker.Item label="43" value={43} />
        <Picker.Item label="44" value={44} />
        <Picker.Item label="45" value={45} />
        <Picker.Item label="46" value={46} />
        <Picker.Item label="47" value={47} />
        <Picker.Item label="48" value={48} />
        <Picker.Item label="49" value={49} />
        <Picker.Item label="50" value={50} />
        <Picker.Item label="51" value={51} />
        <Picker.Item label="52" value={52} />
        <Picker.Item label="53" value={53} />
        <Picker.Item label="54" value={54} />
        <Picker.Item label="55" value={55} />
        <Picker.Item label="56" value={56} />
        <Picker.Item label="57" value={57} />
        <Picker.Item label="58" value={58} />
        <Picker.Item label="59" value={59} />
      </Picker>
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
              onPress={addClassToStorage}
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
    flexDirection:'row'
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
