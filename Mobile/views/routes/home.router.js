import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesignicons from "react-native-vector-icons/AntDesign";

import HomePage from "../pages/HomePage";
import AccountInfo from "../pages/AccountInfo";
import { useRoute } from "@react-navigation/native";
import userAPI from "../../api/userAPI";

import { createStore } from "redux";
import { Provider } from "react-redux";

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
    const route = useRoute();

    const user = route.params.user;

    // Redux
    const initialState = {
        user: user,
    };

    const rootReducer = (state = initialState, action) => {
        return state;
    };
    const store = createStore(rootReducer);

    const Tab = createBottomTabNavigator();
    return (
        <Provider store={store}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Home Page") {
                            iconName = focused ? "home" : "home-outline";
                            return (
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === "CameraIcon") {
                            iconName = focused ? "camera" : "camerao";
                            return (
                                <AntDesignicons name={iconName} size={size} />
                            );
                        } else if (route.name === "Person") {
                            iconName = focused ? "person" : "person-outline";
                            return (
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
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
                    initialParams={{ user }}
                    options={{
                        headerShown: false,
                        tabBarStyle: styles.NormalTab,
                    }}
                />
                <Tab.Screen
                    name="CameraIcon"
                    options={{
                        headerShown: false,
                        tabBarStyle: styles.NormalTab,
                    }}
                    component={SettingsScreen}
                    initialParams={{ user }}
                    listeners={({ navigation }) => ({
                        tabPress: (e) => {
                            e.preventDefault();
                            navigation.navigate("CameraScreen", { user });
                        },
                    })}
                />
                <Tab.Screen
                    name="Person"
                    component={AccountInfo}
                    initialParams={{ user }}
                    options={{
                        headerShown: false,
                        tabBarStyle: styles.NormalTab,
                    }}
                />
            </Tab.Navigator>
        </Provider>
    );
}

const styles = StyleSheet.create({
    NormalTab: {
        height: 90,
    },
});
