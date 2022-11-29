import React from "react";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Container, CustomText } from "../components";
import { login as auth } from "../services/auth";
import { getLocalUserData, storeLocalUserData } from "../storages/asyncStorage";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  React.useEffect(() => {
    checkCurrentUser();
  }, []);

  const checkCurrentUser = async () => {
    const user = await getLocalUserData();
    if (user && user.type === "admin") {
      await navigation.navigate("RootTab");
    } else if (user && user.type === "user") {
      await navigation.navigate("UserPage");
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
        if (_user.type === "admin") {
          await navigation.navigate("RootTab");
          setEmail("")
          setPassword("")
        } else {
          await navigation.navigate("UserPage");
          setEmail("")
          setPassword("")
        }
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
