import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./AuthStack";
import TabStack from "./TabStack";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="RootTab" component={TabStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
