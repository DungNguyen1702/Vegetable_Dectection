import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesignicons from 'react-native-vector-icons/AntDesign';

import HomePage from "../pages/HomePage";
import AccountInfo from "../pages/AccountInfo";

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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

                    if (route.name === "Home Page") {
                        iconName = focused ? "home" : "home-outline";
                        return <Ionicons name={iconName} size={size} color={color} />;
                    } else if (route.name === "CameraIcon") {
                        iconName = focused ? "camera" : "camerao";
                        return <AntDesignicons name={iconName} size={size}/>;
                    } else if (route.name === "Person")
                    {
                        iconName = focused ? "person" : "person-outline"
                        return <Ionicons name ={iconName} size={size} color={color} />
                    }
                },
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "black",
                tabBarActiveBackgroundColor: "#A6CF98",
                tabBarInactiveBackgroundColor: "#F2FFE9",
            })}
        >
            <Tab.Screen
                name="Home Page"
                component={HomePage}
                options={{ headerShown: false, tabBarStyle: styles.NormalTab }}
            />
            <Tab.Screen
                name="CameraIcon"
                options={{ headerShown: false, tabBarStyle : styles.NormalTab }}
                component={SettingsScreen}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.navigate("CameraScreen");
                    },
                })}
            />
            <Tab.Screen
                name="Person"
                component={AccountInfo}
                options={{ headerShown: false , tabBarStyle : styles.NormalTab }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    NormalTab: {
        height : 80,
    },
});
