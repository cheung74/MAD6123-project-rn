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
  const users = [
    {
      username: "abc",
      email: "123@gmail.com",
      firstName: "123123",
      lastName: "abcc",
      id: "1",
      title: "manager",
    },
    {
      username: "bb",
      id: "2",
      email: "123@gmail.com",
      firstName: "123123",
      lastName: "abcc",
      title: "manager",
    },
  ];

  const tasks = [
    {
      taskName: "abb",
      taskDesc: "12312312323123",
      hourlyRate: "20",
      hour: "2",
      assignee: "abc",
      assignId: "vasdasd",
      status: "completed",
      projectName: "abccccc",
      taskId: "1232323231",
      cost: "40",
    },
    {
      taskName: "abb",
      taskDesc: "12312312323123",
      hourlyRate: "20",
      assignee: "abc",
      hour: "2",
      assignId: "vasdasd",
      status: "completed",
      projectName: "abccccc",
      taskId: "1232323231",
      cost: "40",
    },
  ];
  const handleNewTask = () => {
    navigation.navigate("createNewTask");
  };

  return (
    <Container>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: "auto" }} />
            <Button onPress={handleNewTask}>Create new task</Button>
          </View>
        )}
        data={tasks}
        style={{ flex: 1, width: "100%", padding: 16 }}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1.5, backgroundColor: "lightgray" }} />
        )}
        renderItem={({ item }) => (
          <View style={{ padding: 16 }}>
            <Text style={styles.text}>Task name: {item.taskName}</Text>
            <Text style={styles.text}>Task desc: {item.taskDesc}</Text>
            <Text style={styles.text}>Status: {item.status}</Text>
            <Text style={styles.text}>PIC: {item.assignee}</Text>
            <Text style={styles.text}>Project name: {item.projectName}</Text>
            <Text style={styles.text}>Hourly rate: {item.hourlyRate}</Text>
            <Text style={styles.text}>Hours: {item.hour}</Text>
            <Text style={styles.text}>Cost: {item.cost}</Text>
          </View>
        )}
      />
    </Container>
  );
};

export default AdminTasks;

const styles = StyleSheet.create({
  text: {
    paddingVertical: 8,
  },
});
