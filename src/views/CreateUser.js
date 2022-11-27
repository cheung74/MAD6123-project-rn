import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container, CustomText, CustomTextInput } from "../components";
import { Button } from "@rneui/base";
import DropDownPicker from "react-native-dropdown-picker";
import { createUser, updateUser } from "../services/user";
import { useNavigation, useRoute } from "@react-navigation/native";

const CreateUser = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { params } = route;

  const editUser = params.item;
  const isEdit = React.useMemo(() => {
    if (params.item) {
      return params.item;
    }
  }, [params.item]);

  const [email, setEmail] = React.useState(editUser ? editUser.email : "");
  const [fName, setFname] = React.useState(editUser ? editUser.firstName : "");
  const [lName, setLname] = React.useState(editUser ? editUser.lastName : "");
  const [title, setTitle] = React.useState(editUser ? editUser.title : "");
  const [password, setPassword] = React.useState(
    editUser ? editUser.password : ""
  );

  const [open, setOpen] = React.useState(false);

  const [type, setType] = React.useState(editUser ? editUser.type : "");

  const [items, setItems] = React.useState([
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
  ]);

  const handleSubmit = async () => {
    const user = {
      email,
      password,
      firstName: fName,
      lastName: lName,
      type,
      title,
    };
    const res = await createUser(user);
    if (res) {
      await navigation.goBack();
    }
  };

  const handleEdit = async () => {
    const user = {
      _id: editUser._id,
      email,
      password,
      firstName: fName,
      lastName: lName,
      type,
      title,
    };
    const res = await updateUser(user);
    if (res) {
      await navigation.goBack();
    }
  };

  return (
    <Container>
      <CustomText value={email} setValue={setEmail} placeholder="Email" />
      <CustomText
        value={password}
        setValue={setPassword}
        placeholder="Password"
      />
      <CustomText value={fName} setValue={setFname} placeholder="First name" />
      <CustomText value={lName} setValue={setLname} placeholder="Last name" />
      <CustomText value={title} setValue={setTitle} placeholder="Job title" />
      <View style={{ paddingVertical: 8, width: "92%" }}>
        <Text
          style={{
            paddingLeft: 8,
            paddingBottom: 8,
            fontSize: 16,
          }}
        >
          User type
        </Text>
        <DropDownPicker
          open={open}
          value={type}
          items={items}
          setOpen={setOpen}
          setValue={setType}
          setItems={setItems}
          placeholder="User type"
          itemSeparator={true}
        />
      </View>
      <Button onPress={!isEdit ? handleSubmit : handleEdit}>
        {!isEdit ? "Submit" : "Edit user"}
      </Button>
    </Container>
  );
};

export default CreateUser;
