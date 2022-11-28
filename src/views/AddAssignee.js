import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getDateString } from "../helper";
import { getUsers } from "../services/user";

import DropDownPicker from "react-native-dropdown-picker";
import { Button } from "@rneui/base";
import { updateProject } from "../services/project";

const AddAssignee = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params?.item || null;
  const [userList, setUserList] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([]);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    getUserList();
  }, []);

  const getUserList = React.useCallback(async () => {
    const list = await getUsers();
    const assignee = item.assignee;
    let _filteredList;
    if (Array.isArray(list)) {
      _filteredList = list.filter(
        (item) => !assignee.find(({ _id }) => item._id === _id)
      );
      setItems(
        _filteredList.map((item) => ({
          label: item.firstName + " " + item.lastName,
          value: item,
        }))
      );
    }
  }, []);

  const handleSubmit = async () => {
    const _item = { ...item, assignee: [...item.assignee].concat(value) };

    const result = await updateProject(_item._id, _item);
    if (result.status === "success") {
      navigation.navigate("adminProject");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Project name: {item.name}</Text>
        <Text style={styles.text}>
          Start Date: {getDateString(item.startDate)}
        </Text>
        <Text style={styles.text}>End Date: {getDateString(item.endDate)}</Text>
        <Text style={styles.text}>
          Assignee:{" "}
          {item.assignee
            .map((item) => {
              return item.firstName + " " + item.lastName;
            })
            .join(", ")}
        </Text>
      </View>
      <Text style={{ paddingLeft: 8, fontSize: 16, paddingTop: 16 }}>
        Add Assignee
      </Text>
      <View style={{ width: "96%", padding: 8 }}>
        <DropDownPicker
          dropDownDirection="TOP"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Add Assignee"
          mode="BADGE"
          itemKey="label"
          itemSeparator={true}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Button style={{ width: 90 }} onPress={handleSubmit}>
          Submit
        </Button>
      </View>
    </View>
  );
};

export default AddAssignee;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  text: {
    paddingVertical: 8,
  },
});
