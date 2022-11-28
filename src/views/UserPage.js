import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native";
import { getTasks, updateTask } from "../services/task";
import { clearLocalUserData, getLocalUserData } from '../storages/asyncStorage';
import Prompt from 'react-native-input-prompt'

const UserHomeScreen = () => {

  const navigation = useNavigation();
  const [list, setList] = useState([]);
  const [promptVisible, setPromptVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const handleLogout = async () => {
    const result = await clearLocalUserData();
    if (result) {
      await navigation.navigate("Auth");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const user = await getLocalUserData()
    const _list = await getTasks().then(res => res.filter(res => res.assignee === user._id));

    setList(_list);
  }

  const onTaskUpdate = async hours => {
    currentTask.workingHours = parseInt(hours)
    currentTask.completed = true
    currentTask.completedAt = Date.now()
    await updateTask(currentTask).then(
      alert("Update completed."),
      setPromptVisible(false),
      setCurrentTask({})
    )
  }

  const onItemClick = (item) => {
    setCurrentTask(item)
    setPromptVisible(true)
  }

  return (
    <SafeAreaView 
      style={styles.container}
    >
      <View style={styles.logoutBtn}>
        <TouchableOpacity onPress={() => handleLogout()}>
          <Ionicons name="log-out-outline" size={36} color={"blue"} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        keyExtractor={({ _id }) => _id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1.5, backgroundColor: "lightgray" }} />
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 16}}
            onPress={() => item.completed? undefined : onItemClick(item)}
          >
            <Text style={styles.text}>Task Name: {item.name}</Text>
            <Text style={styles.text}>Task Description: {item.desc}</Text>
            {item.prerequisite ? <Text style={styles.text}>Prerequisite: {item.prerequisite}</Text> : undefined}
            <Text style={styles.text}>Start Date: {item.startDate}</Text>
            <Text style={styles.text}>End Date: {item.endDate}</Text>
            <Text style={styles.text}>Completed: {item.completed? "Yes" : "No"}</Text>
            {item.completed ? <Text style={styles.text}>Completed At: {new Date(item.completedAt).toLocaleString()}</Text> : undefined}
            {item.completed ? <Text style={styles.text}>Working Hours: {item.workingHours}</Text> : undefined}
          </TouchableOpacity>
        )}
      />
      <Prompt
        visible={promptVisible}
        title="Enter Your Working Hour"
        placeholder="Hours"
        onCancel={() => setPromptVisible(false)}
        onSubmit={text => onTaskUpdate(text)}
    />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoutBtn: {
    alignItems: "flex-end",
    padding: 20,
  },
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  text: {
    paddingVertical: 4,
  },
});

export default UserHomeScreen;