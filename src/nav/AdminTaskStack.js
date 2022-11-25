import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { CreateTasks, AdminTasks, CreateUser } from "../views";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const AdminTaskStack = () => {
  const handleLogout = async () => {};
  return (
    <Stack.Navigator
      initialRouteName="adminTask"
      screenOptions={({ route }) => ({
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => handleLogout()}>
              <Ionicons name="log-out-outline" size={24} color={"pink"} />
            </TouchableOpacity>
          );
        },
      })}
    >
      <Stack.Screen
        name="adminTask"
        component={AdminTasks}
        options={{ title: "Tasks" }}
      />
      <Stack.Screen
        name="createNewTask"
        component={CreateTasks}
        options={{ title: "Create new task" }}
      />
    </Stack.Navigator>
  );
};

export default AdminTaskStack;
