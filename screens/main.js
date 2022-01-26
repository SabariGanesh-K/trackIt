import React from 'react'
import {View,Text,StyleSheet,SafeAreaView} from 'react-native';
import { StatusBar } from "expo-status-bar";
import DisplayClass from '../components/displayClass'
const data = require("../testData/test.json");
const Main = () =>{
    return (
        <SafeAreaView style={styles.container}>
          
          <StatusBar style="auto" />
          <DisplayClass/>
          
        </SafeAreaView>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      backgroundColor: '#290001',
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
  });
  export default Main