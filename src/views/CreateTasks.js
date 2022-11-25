import { StyleSheet, View } from "react-native";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";

import { Button, Text } from "@rneui/themed";
import { Container, CustomText, DateTimeSelector } from "../components";

const CreateTasks = () => {
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [rate, setRate] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState([]);
  const [items, setItems] = React.useState([
    { label: "Task1", value: "task1" },
    { label: "Task2", value: "task2" },
  ]);

  const [open2, setOpen2] = React.useState(false);
  const [assignee, setAssignee] = React.useState([]);

  const [users, setUsers] = React.useState([
    { label: "abc", value: "abc" },
    { label: "abbc", value: "abbc" },
  ]);

  const handleSubmit = () => {
    const data = {
      name,
      desc,
      rate,
    };
  };
  return (
    <Container>
      <Text h4>Create Tasks</Text>
      <Text h4>Project: "projectName"</Text>

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
        <View style={{ width: "90%", padding: 8 }}>
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
            itemSeparator={true}
            multiple={true}
            min={0}
            max={5}
          />
        </View>
      </View>

      <Button onPress={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default CreateTasks;
