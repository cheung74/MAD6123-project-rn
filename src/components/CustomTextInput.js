import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomTextInput = ({ value, placeholder, setValue, editable = true }) => {
  return (
    <TextInput
      style={styles.text}
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      editable={editable}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 8,
    borderWidth: 1,
    height: 40,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});

export default CustomTextInput;
