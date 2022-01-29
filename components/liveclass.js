import React from 'react'

import {View,Text,StyleSheet,Pressable,SafeAreaView} from 'react-native'
const data = require("../testData/test.json")

const LiveClass = (props) =>{
    const dat = {
        Monday: data.monday,
        Tuesday: data.tuesday,
        Wednesday: data.wednesday,
        Thursday: data.thursday,
        Friday: data.friday,
        Saturday: data.saturday,
      };
      const d = new Date()
      const hour = 8
      const minute = d.getMinutes()
    const live = dat["Monday"].map((item)=>{
        console.warn(item)
        if (item.fromHour <= hour && item.toHour >= hour && item.fromMinute <= minute && item.toMinute>=minute){
            return(item)
        }
    

    })
    const fromTime = (live[0].fromHour.toString() +" : "+ live[0].fromMinute.toString())
    const toTime = (live[0].toHour.toString() +" : "+ live[0].toMinute.toString())
    return(
        <Pressable
        onPress={() => {}}
        onLongPress = {()=>{
          
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'black'
              :' rgba(0,0,0,0)'
          },
          styles.wrapperCustom
        ]}>
      <SafeAreaView style={styles.box}>
          <Text>LIVE</Text>
          <View style={{ backgroundColor: "lightgreen" }}>
            <Text style={styles.text}>{fromTime} - </Text>
            
            <Text style={styles.text}>{toTime}</Text>
          
          </View>
          <View>
          <Text style={styles.text}>{live[0].code}</Text>
            <Text style={styles.text}>{live[0].name}</Text>
          </View>
          <View>
         
          </View>
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
      borderRadius:12,
      padding: 20,
      
    },
    text: {
      fontSize: 15,
      alignContent:'center',
      justifyContent:'center'
    },
  });

export default LiveClass