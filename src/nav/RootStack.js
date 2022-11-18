import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AdminStack from "./AdminStack";
import AuthStack from "./AuthStack";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="AdminHome" component={AdminStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
