import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/base";
import React from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import { Container } from "../components";

const AdminTasks = () => {
  const navigation = useNavigation();
  // const users = [
  //   {
  //     username: "abc",
  //     email: "123@gmail.com",
  //     firstName: "123123",
  //     lastName: "abcc",
  //     id: "1",
  //     title: "manager",
  //   },
  //   {
  //     username: "bb",
  //     id: "2",
  //     email: "123@gmail.com",
  //     firstName: "123123",
  //     lastName: "abcc",
  //     title: "manager",
  //   },
  // ];
  const handleNewTask = () => {
    
  }
  return (
    <Container>
      <Text>Tasks Screen</Text>
      <Button>Create new task</Button>
      {/* <FlatList
        ListHeaderComponent={() => (
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: "auto" }} />
            <Button
              onPress={() => {
                navigation.navigate("createUser");
              }}
            >
              Create user
            </Button>
          </View>
        )}
        data={users}
        style={{ flex: 1, width: "100%", padding: 16 }}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1.5, backgroundColor: "lightgray" }} />
        )}
        renderItem={({ item }) => (
          <View style={{ padding: 16 }}>
            <Text style={styles.text}>User name: {item.username}</Text>
            <Text style={styles.text}>First name: {item.firstName}</Text>
            <Text style={styles.text}>Last name: {item.lastName}</Text>
            <Text style={styles.text}>Email: {item.email}</Text>
            <Text style={styles.text}>Job title: {item.title}</Text>
          </View>
        )}
      /> */}
    </Container>
  );
};

export default AdminTasks;

const styles = StyleSheet.create({
  text: {
    paddingVertical: 8,
  },
});
