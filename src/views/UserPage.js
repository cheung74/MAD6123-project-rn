import {
  StyleSheet,
  Text,
  FlatList,
  View,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native";
import { getProjects, updateProject } from "../services/project";
import { clearLocalUserData, getLocalUserData } from '../storages/asyncStorage';
import Prompt from 'react-native-input-prompt'
import { updateTaskState } from '../helper'

const UserHomeScreen = () => {

  const navigation = useNavigation();
  const [list, setList] = useState([]);
  const [projects, setProjects] = useState([]);
  const [promptVisible, setPromptVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const handleLogout = async () => {
    const result = await clearLocalUserData();
    if (result) {
      await navigation.navigate("Auth");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true)
    fetchTasks().then(setRefreshing(false))
  }

  const fetchTasks = async () => {
    const user = await getLocalUserData()
    let list = [];
    await getProjects()
    .then(projects => {
      setProjects(projects)
      for (project of projects){
        for(task of project.task){
          if (task.assignee._id===user._id){
            const tmp = project
            list.push({...tmp,
              id:task.id,
              name:task.name,
              desc:task.desc,
              prerequisite:task.prerequisite,
              startDate:tmp.startDate,
              endDate:tmp.endDate,
              status:task.status,
              completedAt:task.completedAt,
              hour:task.hour
            })
          }
        }
      }
      setList(list)
    })
  }

  const onTaskUpdate = async hours => {
    const project = projects.filter(e=>e._id===currentTask._id)[0]
    const updatedTask = updateTaskState(project, currentTask.id, hours)
    
    await updateProject(updatedTask._id, updatedTask).then(
      alert("Update completed."),
      setPromptVisible(false),
      setCurrentTask({}),
    )
  }

  const onItemClick = (item) => {
    let pre = projects.find(e=>e._id===item._id).task.find(e=>e.id===item.prerequisite.id)
    if (item.prerequisite && pre.status !== "completed") {
      alert("You should complete prerequisite task first!")
      return
    }
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
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1.5, backgroundColor: "lightgray" }} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 16}}
            onPress={() => item.completed? undefined : onItemClick(item)}
          >
            <Text style={styles.text}>Task Name: {item.name}</Text>
            <Text style={styles.text}>Task Description: {item.desc}</Text>
            {item.prerequisite ? <Text style={styles.text}>Prerequisite: {item.prerequisite.name}</Text> : undefined}
            <Text style={styles.text}>Start Date: {item.startDate}</Text>
            <Text style={styles.text}>End Date: {item.endDate}</Text>
            <Text style={styles.text}>Completed: {item.status === "completed" ? "Yes" : "No"}</Text>
            {item.status === "completed" ? <Text style={styles.text}>Completed At: {new Date(item.completedAt).toLocaleString()}</Text> : undefined}
            {item.status === "completed"? <Text style={styles.text}>Working Hours: {item.hour}</Text> : undefined}
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