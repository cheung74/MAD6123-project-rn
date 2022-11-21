import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { CreateTasks, AdminHome, CreateUser } from "../views";
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
        component={AdminHome}
        options={{ title: "Projects" }}
      />
      <Stack.Screen
        name="createUser"
        component={CreateUser}
        options={{ title: "Create new user" }}
      />
    </Stack.Navigator>
  );
};

export default AdminProjectStack;
