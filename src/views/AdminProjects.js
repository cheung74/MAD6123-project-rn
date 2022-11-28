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
import { getDateString } from "../helper";
import { getProjects } from "../services/project";
import { Ionicons } from "@expo/vector-icons";

const AdminProjects = () => {
  const navigation = useNavigation();
  const [list, setList] = React.useState([]);
  const [completed, setCompleted] = React.useState([]);
  const [shown, setShown] = React.useState(false);
  const [sorting, setSorting] = React.useState("desc");

  React.useEffect(() => {
    getList();
  }, []);

  const handleNewProject = () => {
    navigation.navigate("createProject");
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getList();
      setShown(false);
    });
  }, []);

  const getList = React.useCallback(async () => {
    const result = await getProjects();
    if (Array.isArray(result)) {
      setList(result);
    }
  }, []);

  const handleItemOnPress = (item) => {
    navigation.navigate("projectDetail", { item });
  };

  const handleCompleted = () => {
    if (!shown) {
      setShown(true);
      let _list = list.filter((item) => item.status === "completed");
      _list = [..._list].sort((a, b) =>
        parseFloat(a.cost) < parseFloat(b.cost) ? +1 : -1
      );
      setCompleted(_list);
    } else {
      setCompleted([]);
      setShown(false);
    }
  };

  return (
    <Container>
      <FlatList
        ListHeaderComponent={() => (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button onPress={handleCompleted}>Completed projects</Button>
            {!shown ? (
              <Button onPress={handleNewProject}>+ project</Button>
            ) : null}
            {shown ? (
              <Button
                onPress={() => {
                  if (sorting === "desc") {
                    setSorting("asc");
                    const _list = completed.sort((a, b) =>
                      parseFloat(a.cost) > parseFloat(b.cost) ? +1 : -1
                    );
                    setCompleted(_list);
                  } else {
                    setSorting("desc");
                    const _list = completed.sort((a, b) =>
                      parseFloat(a.cost) < parseFloat(b.cost) ? +1 : -1
                    );
                    setCompleted(_list);
                  }
                }}
              >
                {sorting !== "desc" ? "high to low" : "low to high"}
              </Button>
            ) : null}
          </View>
        )}
        data={!shown ? list : completed}
        style={{ flex: 1, width: "100%", padding: 16 }}
        keyExtractor={({ _id }) => _id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1.5, backgroundColor: "lightgray" }} />
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 16 }}
            onPress={() => handleItemOnPress(item)}
          >
            <Text style={styles.text}>Project name: {item.name}</Text>
            <Text style={styles.text}>Project status: {item.status}</Text>

            <Text style={styles.text}>Cost: ${item.cost}</Text>
            <Text style={styles.text}>
              Start Date: {getDateString(item.startDate)}
            </Text>
            <Text style={styles.text}>
              End Date: {getDateString(item.endDate)}
            </Text>
            <Text style={styles.text}>
              Assignee:{" "}
              {item.assignee
                .map((item) => {
                  return item.firstName + " " + item.lastName;
                })
                .join(", ")}
            </Text>
            <Text style={styles.text}>Tasks: </Text>
            {item.task.map((item, index) => (
              <View
                key={`item-${index}`}
                style={{ borderBottomWidth: 1, paddingVertical: 16 }}
              >
                <Text style={styles.text}>
                  PIC: {item.assignee.firstName + " " + item.assignee.lastName}
                </Text>
                <Text style={styles.text}>Status: {item.status}</Text>
                <Text style={styles.text}>Task name: {item.name}</Text>
                <Text style={styles.text}>Task desc: {item.desc}</Text>
                <Text style={styles.text}>Cost: ${item.cost}</Text>
              </View>
            ))}
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default AdminProjects;

const styles = StyleSheet.create({
  text: {
    paddingVertical: 8,
  },
});
