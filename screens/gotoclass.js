import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
} from "react-native";
import AppLink from 'react-native-app-link';

function openTeams(){
    AppLink.maybeOpenURL("https://teams.microsoft.com/u/chat",{ appName:"Microsoft Teams", playStoreId: "com.microsoft.teams"}).then(() => {
    //    navigation.push("Main")
      })
      .catch((err) => {
        console.warn(err)
      });
       AppLink.openInStore({ appName:"Microsoft Teams", playStoreId: "com.microsoft.teams"}).then(() => {
         //    navigation.push("Main")
           })
           .catch((err) => {
             console.warn(err)
           });
}
function openMeet(){
    AppLink.maybeOpenURL("https://meet.google.com",{ appName:"Google Meet", playStoreId:"com.google.android.apps.meetings" }).then(() => {
        // navigation.push("Main")
      })
      .catch((err) => {
        console.warn(err)
      });
    //   AppLink.openInStore({ appName:"Google Meet", playStoreId:"com.google.android.apps.meetings" }).then(() => {
    //     //    navigation.push("Main")
    //       })
    //       .catch((err) => {
    //         console.warn(err)
    //       });
}

function openzoom(){
    AppLink.maybeOpenURL("zoomus://", {appName:"ZOOM Cloud Meetings", playStoreId :"us.zoom.videomeetings"}).then(() => {
        // navigation.push("Main")
      })
      .catch((err) => {
        console.warn(err)
      });
    //   AppLink.openInStore( {appName:"ZOOM Cloud Meetings", playStoreId :"us.zoom.videomeetings"}).then(() => {
    //     //    navigation.push("Main")
    //       })
    //       .catch((err) => {
    //         console.warn(err)
    //       });
}

function openClassroom(){
    AppLink.maybeOpenURL("https://classroom.google.com/h", {appName:"Google Classroom", playStoreId :"com.google.android.apps.classroom"}).then(() => {
        // navigation.push("Main")
      })
      .catch((err) => {
        console.warn(err)
      });
        //     AppLink.openInStore( {appName:"Google Classroom", playStoreId :"com.google.android.apps.classroom"}).then(() => {
        // //    navigation.push("Main")
        //   })
        //   .catch((err) => {
        //     console.warn(err)
        //   });
}

const GoToClass = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={(styles.app, { justifyContent: "space-between" })}>
        <Button title="<Back" onPress={() => navigation.push("Main")} />
        <Text style={styles.text}>Choose your App:-</Text>
      </View>
      <Pressable
        onPress={() => {openMeet()}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "black" : " rgba(0,0,0,0)",
          },
          styles.wrapperCustom,
        ]}
      >
        <View style={styles.app}>
          <Image source={require("../assets/meet.png")} />
        </View>
      </Pressable>
      <Pressable
        onPress={() => {openTeams()}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "black" : " rgba(0,0,0,0)",
          },
          styles.wrapperCustom,
        ]}
      >
        <View style={styles.app}>
          <Image source={require("../assets/teams.png")} />
        </View>
      </Pressable>
      <Pressable
        onPress={() => {openzoom()}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "black" : " rgba(0,0,0,0)",
          },
          styles.wrapperCustom,
        ]}
      >
        <View style={styles.app}>
          <Image source={require("../assets/zoom.png")} />
        </View>
      </Pressable>
      <Pressable
        onPress={() => {openClassroom()}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "black" : " rgba(0,0,0,0)",
          },
          styles.wrapperCustom,
        ]}
      >
        <View style={styles.app}>
          <Image source={require("../assets/classroom.png")} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#290001",
  },
  app: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default GoToClass;
