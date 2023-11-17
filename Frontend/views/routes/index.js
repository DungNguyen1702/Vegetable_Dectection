import {NavigationContainer, useNavigation, useRoute} from "@react-navigation/native"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text, Button } from "react-native"
import LoginPage from "../pages/login"

const Login = ()=>{

    const navigation = useNavigation();
    return (
        <View style = {{flex : 1, alignContent : 'center', justifyContent : 'center', backgroundColor : 'red'}}>
            <Text style = {{textAlign : 'center'}}>Login</Text>
            <Button title="Click" onPress={()=>navigation.navigate('Home',{name : "Dung", obj : {id : 1, name: 'AS', price : 900}})}></Button>
        </View>
    )
}

const Home = ()=>{

    const route = useRoute();
    const {name, obj} = route.params; 

    return (
        <View style = {{flex : 1, alignContent : 'center', justifyContent : 'center'}}>
            <Text>home</Text>
            <Text>{name}</Text>
            <Text>{obj.id}</Text>
        </View>
    )
}

const Stack = createNativeStackNavigator();

export default function AllRouter(){
    return (
        <View style = {{width:'100%', height : '100%'}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginPage} options={{headerShown : false}} ></Stack.Screen>
                    <Stack.Screen name="Home" component={Home} options={{headerShown : false}} ></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer> 
        </View>
    )
}