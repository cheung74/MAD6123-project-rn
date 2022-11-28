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

const AdminProjects = () => {
  const navigation = useNavigation();
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    getList();
  }, []);

  const handleNewProject = () => {
    navigation.navigate("createProject");
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getList();
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

  return (
    <Container>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: "auto" }} />
            <Button onPress={handleNewProject}>Create new project</Button>
          </View>
        )}
        data={list}
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
