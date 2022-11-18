import { StyleSheet, View } from "react-native";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";

import { Button, Text } from "@rneui/themed";
import { Container, CustomTextInput, DateTimeSelector } from "../components";

const CreateTasks = () => {
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [rate, setRate] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [items, setItems] = React.useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
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

      <CustomTextInput
        placeholder={"Sub-task name"}
        value={name}
        setValue={setName}
      />

      <CustomTextInput
        placeholder={"Sub-task description"}
        value={desc}
        setValue={setDesc}
      />

      <CustomTextInput
        placeholder={"Hourly rate"}
        value={rate}
        setValue={setRate}
      />
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
          />
        </View>
      </View>

      <Button onPress={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default CreateTasks;
