import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { CreateTasks, AdminHome, CreateUser } from "../views";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const AdminHomeStack = () => {
  const handleLogout = async () => {};
  return (
    <Stack.Navigator
      initialRouteName="adminHome"
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
        name="adminHome"
        component={AdminHome}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="createUser"
        component={CreateUser}
        options={{ title: "Create new user" }}
      />
      <Stack.Screen
        name="editUser"
        component={CreateUser}
        options={{ title: "Edit user" }}
      />
    </Stack.Navigator>
  );
};

export default AdminHomeStack;
