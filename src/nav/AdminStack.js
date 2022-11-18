import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateTasks } from "../views";

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CreateTasks} />
    </Stack.Navigator>
  );
};

export default AdminStack;
