import { StyleSheet, View } from "react-native";
import React from "react";

import { Button, Text } from "@rneui/themed";
import { Container, CustomTextInput, DateTimeSelector } from "../components";

const CreateTasks = () => {
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [rate, setRate] = React.useState("");

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

      <Button onPress={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default CreateTasks;
