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
import { getTasks } from "../services/project";

const AdminProjects = () => {
  const navigation = useNavigation();
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    getList();
  }, []);

  const handleNewProject = () => {
    navigation.navigate("createProject");
  };

  const getList = React.useCallback(async () => {
    const result = await getTasks();
    if (Array.isArray(result)) {
      setList(result);
    }
  }, []);

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
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1.5, backgroundColor: "lightgray" }} />
        )}
        renderItem={({ item }) => (
          <View style={{ padding: 16 }}>
            <Text style={styles.text}>Project name: {item.name}</Text>
            <Text style={styles.text}>Start Date: {item.startDate}</Text>
            <Text style={styles.text}>Last name: {item.lastName}</Text>
            <Text style={styles.text}>Email: {item.email}</Text>
            <Text style={styles.text}>Job title: {item.title}</Text>
          </View>
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
