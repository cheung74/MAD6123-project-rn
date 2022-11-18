import React from "react";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Container, CustomTextInput } from "../components";

const Login = () => {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("AdminHome");
  };
  return (
    <Container>
      <CustomTextInput
        placeholder="Username"
        value={username}
        setValue={setUserName}
      />
      <CustomTextInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />
      <Button onPress={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;
