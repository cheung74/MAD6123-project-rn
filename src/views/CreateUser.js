import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container, CustomText, CustomTextInput } from "../components";
import { Button } from "@rneui/base";

const CreateUser = () => {
  const [id, setId] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [fName, setFname] = React.useState("");
  const [lName, setLname] = React.useState("");
  const [title, setTitle] = React.useState("");

  const handleSubmit = async () => {
    const user = {
      id,
      email,
      fName,
      lName,
      title,
    };
  };

  return (
    <Container>
      <CustomText value={id} setValue={setId} placeholder="Member Id" />
      <CustomText value={email} setValue={setEmail} placeholder="Email" />
      <CustomText value={fName} setValue={setFname} placeholder="First name" />
      <CustomText value={lName} setValue={setLname} placeholder="Last name" />
      <CustomText value={title} setValue={setTitle} placeholder="Job title" />
      <Button onPress={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default CreateUser;
