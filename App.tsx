import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Expenses, Reports, Add, Settings } from "./screens";
import { theme } from "./theme";
import { TabBarIcons } from "./components/TabBarIcons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.card,
          },
          headerTitleStyle: {
            fontSize: 26,
          },
          tabBarBadgeStyle: {
            height: 100
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcons {...props} type="expenses" />,
          }}
          name="Expenses"
          component={Expenses}
        />
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcons {...props} type="reports" />,
          }}
          name="Reports"
          component={Reports}
        />
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcons {...props} type="add" />,
          }}
          name="Add"
          component={Add}
        />
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcons {...props} type="settings" />,
          }}
          name="Settings"
          component={Settings}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
