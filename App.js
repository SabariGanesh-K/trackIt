
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import DisplayClass from "./components/displayClass";
import {createStackNavigator} from '@react-navigation/stack';
import AddClassModal from "./screens/addClass";
import EditClassModal from "./screens/editClass";
import Main from "./screens/main";
import { NavigationContainer } from "@react-navigation/native";

  const MainStack = createStackNavigator();
  const RootStack = createStackNavigator();

  const MainStackScreen = () => {
    return (
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Main}   options={{ headerShown: false }}/>

      </MainStack.Navigator>
    );
  };
  const App = () => {
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
          />
  
           <RootStack.Screen
            name="Add Class"
            component={AddClassModal}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
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

