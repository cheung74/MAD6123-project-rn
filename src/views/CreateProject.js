import { Button, Text } from "@rneui/themed";
import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { Container, CustomTextInput, DateTimeSelector } from "../components";

const CreateProject = () => {
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);

  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const handleSetEndDate = (date) => {
    setEndDate(date);
  };

  const handleSubmit = () => {
    const project = {
      name,
      desc,
      startDate: startDate.getTime(),
      endDate: endDate.getTime(),
      value,
    };
  };

  return (
    <Container>
      <Text h4>Create Project</Text>
      <CustomTextInput
        placeholder={"Task name"}
        value={name}
        setValue={setName}
      />
      <CustomTextInput
        placeholder={"Task description"}
        value={desc}
        setValue={setDesc}
      />
      <DateTimeSelector
        label={"Start date"}
        val={startDate}
        setVal={setStartDate}
      />
      <DateTimeSelector
        label={"End date"}
        val={endDate}
        setVal={handleSetEndDate}
        minimumDate={startDate}
      />
      <View>
        <View style={{ width: "90%", padding: 8 }}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            multiple={true}
            min={0}
            placeholder="Assign values"
            mode="BADGE"
            itemKey="value"
            itemSeparator={true}
          />
        </View>
      </View>
      <View style={{ marginTop: "auto" }} />
      <Button onPress={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default CreateProject;
