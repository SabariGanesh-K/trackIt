import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { TimePicker } from "react-native-simple-time-picker";

const EditClassModal = () => {
  const id = "1";
  const data = require("../testData/test.json");
  const day = "monday";
  const hourData = data[day][id];
  const [className, changeClassname] = useState(hourData.name);
  const [classCode, changeClassCode] = useState(hourData.code);
  const [fromHour, changeFromHour] = useState(hourData.fromHour);
  const [toHour, changeToHour] = useState(hourData.toHour);
  const [fromMinute, changeFromMinute] = useState(hourData.fromMinute);
  const [toMinute, changeToMinute] = useState(hourData.toMinute);
  const ff = { hours: fromHour, minutes: fromMinute };
  const tt = { hours: toHour, minutes: toMinute };
  return (
    <View style={styles.container}>
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
              onPress={() => {}}
              color="grey"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="SAVE CHANGES"
              onPress={() => {}}
              color="green"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="DELETE CLASS :)"
              onPress={() => {}}
              color="red"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: "5%",
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
});
export default EditClassModal;
