import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";

import Header from "../../../components/header/header";
import FormLogin from "./formLogin";
import Footer from "./footer";
import { useState } from "react";

export default function Login() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const [errAccount, setErrAccount] = useState(false)
    const [errPassword, setErrPassword] = useState(false)

    return (
        <View style={styles.container}>
            <Header/>
            <FormLogin 
                setAccount = {setAccount}
                setPassword = {setPassword}
                errAccount = {errAccount}
                errPassword = {errPassword}    
            />
            <Footer 
                account = {account}
                password = {password}
                setErrAccount={setErrAccount}
                setErrPassword={setErrPassword}
            />
            <StatusBar backgroundColor="#5AA162"></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5AA162",
        width: "100%",
        height: "100%",
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 10,
    },
});
