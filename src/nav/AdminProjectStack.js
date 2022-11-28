import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import {
  CreateTasks,
  AdminProjects,
  CreateUser,
  CreateProject,
} from "../views";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { clearLocalUserData } from "../storages/asyncStorage";

const Stack = createNativeStackNavigator();

const AdminProjectStack = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    const result = await clearLocalUserData();
    if (result) {
      await navigation.navigate("Auth");
    }
  };
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
