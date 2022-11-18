import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const Container = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
