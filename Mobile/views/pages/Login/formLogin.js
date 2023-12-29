import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/Entypo";

export default function FormLogin({
    setAccount,
    setPassword,
    errAccount,
    errPassword,
}) {
    const [showIcon, setShowIcon] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
            <Text style={styles.title}>Welcome</Text>
            <View style={styles.formInputStyle}>
                <Text style={styles.label}> Account </Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Account"
                    onChangeText={(value) => {
                        setAccount(value);
                    }}
                ></TextInput>
                {errAccount && (
                    <Text style={styles.error}>can't find account</Text>
                )}
            </View>
            <View style={styles.formInputStyle}>
                <Text style={styles.label}> Password </Text>
                <View style = {{paddingBottom : 30}}>
                    <View style={{ justifyContent: "center" }}>
                        <TextInput
                            style={styles.inputStyle}
                            secureTextEntry={!showPassword}
                            placeholder="Password"
                            onFocus={() => {
                                setShowIcon(true);
                            }}
                            onBlur={() => {
                                setShowIcon(false);
                                setShowPassword(false);
                            }}
                            onChangeText={(value) => setPassword(value)}
                        ></TextInput>
                        {showIcon && (
                            <TouchableOpacity
                                onPress={() => {
                                    setShowPassword(!showPassword);
                                }}
                                style={styles.icon}
                            >
                                {showPassword ? (
                                    <Icon
                                        name="eye-with-line"
                                        size={30}
                                        color={"black"}
                                    ></Icon>
                                ) : (
                                    <Icon
                                        name="eye"
                                        size={30}
                                        color={"black"}
                                    ></Icon>
                                )}
                            </TouchableOpacity>
                        )}
                    </View>
                    {errPassword && (
                        <Text style={styles.error}>Wrong password</Text>
                    )}
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#A5EE9F",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 20,
    },
    formInputStyle: {
        width: "94%",
        paddingVertical: 10,
        paddingLeft: 10,
    },
    label: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#AF2655",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
        color: "#860A35",
    },
    inputStyle: {
        height: 43,
        width: "95%",
        borderWidth: 2,
        paddingHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 10,
        fontSize: 15,
    },
    icon: {
        position: "absolute",
        right: 30,
    },
    error: {
        color: "red",
        textAlign: "center",
        marginTop: 10,
        marginBottom: -9,
    },
});
