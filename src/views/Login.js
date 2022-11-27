import React from "react";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Container, CustomText } from "../components";
import { login as auth } from "../services/auth";
import { storeLocalUserData } from "../storages/asyncStorage";

const Login = () => {
  const [email, setEmail] = React.useState("admin@admin.com");
  const [password, setPassword] = React.useState("admin");
  const navigation = useNavigation();

  const handleLogin = () => {
    login();
  };

  const login = async () => {
    const _user = await auth(email, password);
    if (_user) {
      //save to local
      await storeLocalUserData(_user);
      await navigation.navigate("RootTab");
    }
  };

  return (
    <Container>
      <CustomText value={email} setValue={setEmail} placeholder="Email" />
      <CustomText
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />
      <Button onPress={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;
