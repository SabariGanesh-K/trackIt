import React from "react";
import { View, Text,SafeAreaView,StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const SundayMode = () => {
  return (
    <SafeAreaView style = {{flex:1}}>
        <View><Text></Text></View>
        <View><Text></Text></View>
        <View><Text></Text></View>
        <View
        style={{
        
          justifyContent: "space-around",
          alignContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style = {styles.text}>🎉🥂🤩</Text>
      </View>
      <View
        style={{
        
          justifyContent: "space-around",
          alignContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style = {styles.text}>...SUNDAY</Text>
      </View>
      <View
        style={{
        
          justifyContent: "space-around",
          alignContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style = {styles.text}>FUNDAY ...</Text>
      </View>
      <View
        style={{
        
          justifyContent: "space-around",
          alignContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style = {styles.text}>🎉🥂🤩</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    text:{
        color:'white',
        fontSize:50,
        fontWeight:'bold'
    },
})
export default SundayMode;
