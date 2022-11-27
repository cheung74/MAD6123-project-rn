import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomTextInput from "./CustomTextInput";

const CustomText = ({ value, placeholder, setValue, editable = true }) => {
  return (
    <View style={{ width: "100%", padding: 8 }}>
      <Text style={styles.text}>{placeholder}</Text>
      <CustomTextInput
        value={value}
        setValue={setValue}
        placeholder={placeholder}
      />
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    paddingLeft: 8,
    fontSize: 16,
  },
});
