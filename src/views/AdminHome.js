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
import { getUsers } from "../services/user";

const AdminHome = () => {
  const navigation = useNavigation();
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchUsers();
    });
  }, []);

  const fetchUsers = async () => {
    const _list = await getUsers();
    setList(_list);
  };

  const handleItem = (item) => {
    navigation.navigate("editUser", { item });
  };

  return (
    <Container>
      <FlatList
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
        data={list}
        style={{ flex: 1, width: "100%", padding: 16 }}
        keyExtractor={({ _id }) => _id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1.5, backgroundColor: "lightgray" }} />
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 16 }}
            onPress={() => handleItem(item)}
          >
            <Text style={styles.text}>First name: {item.firstName}</Text>
            <Text style={styles.text}>Last name: {item.lastName}</Text>
            <Text style={styles.text}>Email: {item.email}</Text>
            <Text style={styles.text}>Job title: {item.title}</Text>
            <Text style={styles.text}>Password: {item.password}</Text>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default AdminHome;

const styles = StyleSheet.create({
  text: {
    paddingVertical: 8,
  },
});
