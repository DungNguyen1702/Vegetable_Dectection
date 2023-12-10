import {NavigationContainer, useNavigation, useRoute} from "@react-navigation/native"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View} from "react-native"
import LoginPage from "../pages/Login"
import HomePage from "./home.router"
import Camera from "../pages/Camera"
import DetailFruit from "../pages/DetailFruit"
import UpdateInfo from "../pages/UpdatePage/updateInfo"
import UpdatePassword from "../pages/UpdatePage/uploadPassword"
import LikeFruits from "../pages/LikePage/LikeFruits"
import LikeDishes from "../pages/LikePage/LikeDishes"
import HistoryPage from "../pages/HistoryPage"
import Register from "../pages/Register"

const Stack = createNativeStackNavigator();

export default function AllRouter(){
    return (
        <View style = {{width:'100%', height : '100%'}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginPage} options={{headerShown : false}} ></Stack.Screen>
                    <Stack.Screen name="HomePage" component={HomePage} options={{headerShown : false}} ></Stack.Screen>
                    <Stack.Screen name="CameraScreen" component={Camera} options={{headerShown : false}} ></Stack.Screen>
                    <Stack.Screen name="DetailFruit" component={DetailFruit} options={{headerShown : false}} ></Stack.Screen>
                    <Stack.Screen name="UpdateInfo" component={UpdateInfo} options={{headerShown : false}} ></Stack.Screen>
                    <Stack.Screen name="UpdatePassword" component={UpdatePassword} options={{headerShown : false}} ></Stack.Screen>
                    <Stack.Screen name="LikeFruit" component={LikeFruits} options={{headerShown : false}} ></Stack.Screen>
                    <Stack.Screen name="LikeDish" component={LikeDishes} options={{headerShown : false}} ></Stack.Screen>
                    <Stack.Screen name="History" component={HistoryPage} options={{headerShown : false}} ></Stack.Screen>
                    <Stack.Screen name="Register" component={Register} options={{headerShown : false}} ></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer> 
        </View>
    )
}