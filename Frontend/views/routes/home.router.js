import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Settings!</Text>
        </View>
    );
}

export default function HomePageRouter() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused
                            ? "ios-information-circle"
                            : "ios-information-circle-outline";
                    } else if (route.name === "Settings") {
                        iconName = focused ? "ios-list" : "ios-list-outline";
                    }

                    // You can return any component that you like here!
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
                style = {styles.NormalTab}
            />
            <Tab.Screen
                name="Personalization"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    NormalTab : {
        backgroundColor : 'red',
    }
})