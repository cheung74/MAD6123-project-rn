import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";

import { Button, Text } from "@rneui/themed";
import { Container, CustomText, DateTimeSelector } from "../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createTask } from "../services/project";

const CreateTasks = () => {
  const route = useRoute();
  const { params } = route;
  const navigation = useNavigation();
  const item = params.item;

  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [rate, setRate] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState("");

  //
  const [items, setItems] = React.useState(
    item.task.length > 0
      ? item.task.map((item) => ({ label: item.name, value: item.id }))
      : []
  );

  const [open2, setOpen2] = React.useState(false);
  const [assignee, setAssignee] = React.useState("");

  const [users, setUsers] = React.useState(
    item.assignee.map((item) => ({
      label: item.firstName + " " + item.lastName,
      value: item,
    }))
  );

  const handleSubmit = async () => {
    const projectId = item._id;
    const preTask = value ? item.task.find((item) => item.id === value) : null;
    const data = {
      id: projectId + new Date().getTime(),
      name,
      desc,
      rate,
      assignee,
      hour: "0",
      cost: "0",
      prerequisite: preTask,
      status: "initialized",
    };
    const result = await createTask(projectId, data);
    if (result.status === "success") {
      navigation.navigate("adminProject");
    }
  };

  return (
    <Container>
      <Text h4>Project: {item.name}</Text>

      <CustomText
        placeholder={"Sub-task name"}
        value={name}
        setValue={setName}
      />

      <CustomText
        placeholder={"Sub-task description"}
        value={desc}
        setValue={setDesc}
      />

      <CustomText placeholder={"Hourly rate"} value={rate} setValue={setRate} />
      <View>
        <Text style={{ paddingLeft: 8, fontSize: 16 }}>Assignee</Text>
        <View style={{ width: "96%", padding: 8 }}>
          <DropDownPicker
            dropDownDirection="TOP"
            open={open2}
            value={assignee}
            items={users}
            setOpen={setOpen2}
            setValue={setAssignee}
            setItems={setUsers}
            itemKey="label"
            placeholder="Select Assignee"
            mode="BADGE"
            itemSeparator={true}
          />
        </View>
      </View>
      <View>
        <Text style={{ paddingLeft: 8, fontSize: 16 }}>Prerequisite task</Text>
        <View style={{ width: "96%", padding: 8 }}>
          <DropDownPicker
            dropDownDirection="TOP"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Prerequisite task"
            mode="BADGE"
            itemKey="label"
            itemSeparator={true}
          />
        </View>
      </View>

      <Button onPress={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default CreateTasks;
