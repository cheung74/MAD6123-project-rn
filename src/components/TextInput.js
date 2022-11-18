import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomTextInput = ({ value, placeholder, setValue }) => {
  return (
    <TextInput
      style={styles.text}
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 8,
    borderWidth: 1,
    height: 50,
    width: "85%",
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});

export default CustomTextInput;
