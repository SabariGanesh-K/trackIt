import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import DisplayClass from "./components/displayClass";
import {createStackNavigator} from '@react-navigation/stack';
import AddClassModal from "./screens/addClass";
import EditClassModal from "./screens/editClass";
import Main from "./screens/main";
import { NavigationContainer } from "@react-navigation/native";
import ShowLiveClass from './components/showliveclass';
import AsyncStorage from "@react-native-async-storage/async-storage";
import SundayMode from './components/sundayMode';
import GoToClass from './screens/gotoclass';
  const MainStack = createStackNavigator();
  const RootStack = createStackNavigator();

  async function createEmptyStorage(){
    const emptydata = require('./assets/emptydata.json')
    const stringifiedemptydata = JSON.stringify(emptydata)
    await AsyncStorage.setItem('@storage_Key', stringifiedemptydata)
    .then(()=> console.warn("empty data added"))
    .catch(e => console.warn("error:-",e));
    console.log('default values set')  
  }
  const MainStackScreen = () => {
    console.log("App opened")
    return (
     
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Main}   options={{ headerShown: false }}/>

      </MainStack.Navigator>
    );
  };

  const RootStackScreen = () =>{
    return (
      <NavigationContainer style = {styles.container}>
        <RootStack.Navigator mode="modal">
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="EditClass"
            component={EditClassModal}
            options={{ headerShown: false }}
          />
  
           <RootStack.Screen
            name="AddClass"
            component={AddClassModal}
            options={{ headerShown: false }}
          />
                     <RootStack.Screen
            name="Go to Class"
            component={GoToClass}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
  // <ShowLiveClass/>
  // <SundayMode/>
  // <GoToClass/>
    );
  }


  const App = () => {

    const [display,changedisplay] = useState((<View style = {styles.container}>

      </View>))

const [checking,changechecking] = useState(true)
      async function checkEmpty() {
        
        await AsyncStorage.getAllKeys()
          .then(async (res) => {
            // await AsyncStorage.clear()
            if(res.length == 0)
            {
              createEmptyStorage();
              changechecking(false)
              changedisplay(RootStackScreen())
            }
            else{
              console.warn("Data available")
              changechecking(false)
              changedisplay(RootStackScreen())
              
            }     
          })
          .catch((e) => console.log(e));
      }

      if (checking){
        checkEmpty();
      }
  
  
      return(display)

  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      backgroundColor: '#290001',
      alignContent:'center',
      justifyContent:'center'
    },
  });
  export default App

