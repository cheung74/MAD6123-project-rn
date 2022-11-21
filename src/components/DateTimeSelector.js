import { StyleSheet, View } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Text } from "@rneui/themed";
import moment from "moment";

const DateTimeSelector = ({ label, val, setVal, minimumDate }) => {
  const onChange = (event, date) => {
    const selectedValue = date || new Date();
    setVal(selectedValue);
  };

  return (
    <View style={styles.container}>
      <Text style={{ paddingRight: 8, fontSize: 18 }}>{label} :</Text>
      <DateTimePicker
        value={val}
        mode="datetime"
        minimumDate={!minimumDate ? new Date() : minimumDate}
        onChange={onChange}
      />
    </View>
  );
};

export default DateTimeSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
});
