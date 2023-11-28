import {NavigationContainer, useNavigation, useRoute} from "@react-navigation/native"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text, Button } from "react-native"
import LoginPage from "../pages/Login"
import HomePage from "./home.router"
import Camera from "../pages/Camera"

const Stack = createNativeStackNavigator();

export default function AllRouter(){
    return (
        <View style = {{width:'100%', height : '100%'}}>
            <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen name="Login" component={LoginPage} options={{headerShown : false}} ></Stack.Screen> */}
                    <Stack.Screen name="HomePage" component={HomePage} options={{headerShown : false}} ></Stack.Screen>
                    <Stack.Screen name="CameraScreen" component={Camera} options={{headerShown : false}} ></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer> 
        </View>
    )
}