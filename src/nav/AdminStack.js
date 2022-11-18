import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AdminHome } from "../views";

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={AdminHome} />
    </Stack.Navigator>
  );
};

export default AdminStack;
