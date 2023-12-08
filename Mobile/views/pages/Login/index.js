import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";

import Header from "../../../components/header/header";1
import FormLogin from "./formLogin";
import Footer from "./footer";
import { useState } from "react";

export default function Login() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const [errAccount, setErrAccount] = useState(false)
    const [errPassword, setErrPassword] = useState(false)

    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#5AA162"></StatusBar>
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
                setLoading={setLoading}
                loading={loading}
            />
            {loading && (
                <View style={styles.loadingModal}>
                    <ActivityIndicator size="large" color="#fff" />
                    <Text style={styles.loadingText}>Đang kiểm tra...</Text>
                </View>
            )}
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
    loadingModal: {
        position : "absolute",
        width: 200,
        height: 120,
        borderRadius: 20,
        marginTop : -300,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    loadingText: {
        color: "#fff",
        marginTop: 10,
    },
});
