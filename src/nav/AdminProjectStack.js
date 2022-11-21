import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import {
  CreateTasks,
  AdminProjects,
  CreateUser,
  CreateProject,
} from "../views";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const AdminProjectStack = () => {
  const handleLogout = async () => {};
  return (
    <Stack.Navigator
      initialRouteName="adminProject"
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
        name="adminProject"
        component={AdminProjects}
        options={{ title: "Projects" }}
      />
      <Stack.Screen
        name="createProject"
        component={CreateProject}
        options={{ title: "Create new project" }}
      />
    </Stack.Navigator>
  );
};

export default AdminProjectStack;
