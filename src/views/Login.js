import React from "react";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Container, CustomText } from "../components";
import { login as auth } from "../services/auth";
import { getLocalUserData, storeLocalUserData } from "../storages/asyncStorage";

const Login = () => {
  const [email, setEmail] = React.useState("admin@admin.com");
  const [password, setPassword] = React.useState("admin");
  const navigation = useNavigation();

  React.useEffect(() => {
    checkCurrentUser();
  }, []);

  const checkCurrentUser = async () => {
    const user = await getLocalUserData();
    if (user) {
      await navigation.navigate("RootTab");
    }
  };

  const handleLogin = () => {
    login();
  };

  const login = async () => {
    const _user = await auth(email, password);
    if (_user) {
      //save to local
      const result = await storeLocalUserData(_user);
      if (result) {
        await navigation.navigate("RootTab");
      }
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
