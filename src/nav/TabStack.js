import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Tasks, Projects } from "../views";

import { Ionicons } from "@expo/vector-icons";

import AdminHomeStack from "./AdminHomeStack";
import AdminTaskStack from "./AdminTaskStack";
import AdminProjectStack from "./AdminProjectStack";

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const handleLogout = async () => {};
  return (
    <Tab.Navigator
      initialRouteName="projects"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "tasks") {
            iconName = focused ? "construct" : "construct-outline";
          } else if (route.name === "projects") {
            iconName = focused ? "albums-sharp" : "albums-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="home" component={AdminHomeStack} />
      <Tab.Screen name="tasks" component={AdminTaskStack} />
      <Tab.Screen name="projects" component={AdminProjectStack} />
    </Tab.Navigator>
  );
};

export default TabStack;
