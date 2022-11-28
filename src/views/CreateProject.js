import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { Container, CustomText, DateTimeSelector } from "../components";
import { createProject } from "../services/project";
import { getUsers } from "../services/user";

const CreateProject = () => {
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([]);
  const [userList, setUserList] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const navigation = useNavigation();
  const handleSetEndDate = (date) => {
    setEndDate(date);
  };

  React.useEffect(() => {
    getUserList();
  }, []);

  React.useEffect(() => {
    const _item = userList.map((item) => {
      return {
        label: item.firstName + " " + item.lastName,
        value: item,
      };
    });
    setItems(_item);
  }, [userList]);

  const getUserList = React.useCallback(async () => {
    const list = await getUsers();
    if (Array.isArray(list)) {
      setUserList(list);
    }
  }, []);

  const handleSubmit = async () => {
    const project = {
      name,
      desc,
      startDate: startDate.getTime(),
      endDate: endDate.getTime(),
      assignee: value,
    };
    const result = await createProject(project);
    if (result.status === "success") {
      navigation.goBack();
    }
  };

  return (
    <Container>
      <CustomText placeholder={"Task name"} value={name} setValue={setName} />
      <CustomText
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
            placeholder="Assignee"
            mode="BADGE"
            itemKey="label"
            itemSeparator={true}
            dropDownDirection="TOP"
          />
        </View>
      </View>

      <Button onPress={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default CreateProject;
