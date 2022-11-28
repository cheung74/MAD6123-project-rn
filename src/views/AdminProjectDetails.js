import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { Container } from "../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getDateString } from "../helper";
import { Button } from "@rneui/themed";

const AdminProjectDetails = () => {
  const [list, setList] = React.useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const { params } = route;
  const item = params.item;
  console.log(item);
  React.useEffect(() => {
    // getList();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View>
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
        </View>
        <View style={{ marginRight: "auto" }} />
        <View>
          <Button
            title={"New task"}
            onPress={() => {
              navigation.navigate("createNewTask", { item });
            }}
          />
        </View>
      </View>
      <Text style={{ fontWeight: "bold" }}>Tasks</Text>
      <FlatList
        data={item.task}
        keyExtractor={(_, index) => `item-${index}`}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1.5, backgroundColor: "lightgray" }} />
        )}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.text}>Task name: {item.name}</Text>
            <Text style={styles.text}>Task Desc: {item.desc}</Text>
            <Text style={styles.text}>Task hour rate: ${item.rate}</Text>
            <Text style={styles.text}>
              Assignee: {item.assignee.firstName + " " + item.assignee.lastName}{" "}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default AdminProjectDetails;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    paddingVertical: 8,
  },
});
