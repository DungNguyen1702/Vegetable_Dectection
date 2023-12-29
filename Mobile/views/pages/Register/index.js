import {
    ActivityIndicator,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import Header from "../../../components/header/header";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { RadioButton } from "react-native-paper";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import auth from "../../../api/authAPI";

function proccesDate(rawBirthday) {
    const dateObject = new Date(rawBirthday);

    // Lấy các thành phần ngày, tháng, năm từ đối tượng Date
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; // Lưu ý rằng tháng bắt đầu từ 0
    const year = dateObject.getFullYear();

    // Tạo chuỗi ngày tháng năm theo định dạng mong muốn
    return `${day < 10 ? "0" : ""}${day}-${
        month < 10 ? "0" : ""
    }${month}-${year}`;
}

function reverseDate(rawBirthday) {
    const parts = rawBirthday.split("-");
    const outputDate = parts.reverse().join("-");
    return outputDate;
}

export default function Register() {

    const navigation = useNavigation();
    
    const [loading, setLoading] = useState(false);

    const [errAccount, setErrAccount] = useState(false);
    const [errPassword1, setErrPassword1] = useState(false);
    const [errPassword2, setErrPassword2] = useState(false);
    const [errTelephone, setErrTelephone] = useState(false);
    const [errName, setErrName] = useState(false);

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);

    const [account, setAccount] = useState("");
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState(true);
    const [birthday, setBirthday] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const registerHandler = () => {
        if(account==='')
        {
            setErrAccount(true);
            return;
        }

        if(name === '')
        {
            setErrName(true);
            return
        }

        if(telephone.length !== 10 || telephone[0] !== '0')
        {
            setErrTelephone(true);
            return;
        }

        if(password1 === '')
        {
            setErrPassword1(true);
            return;
        }
        if(password1 !== password2)
        {
            setErrPassword2(true);
            return;
        }

        setLoading(true)
        const callAPI = async () => {
            try {
                const newUser = {
                    account : account,
                    password : password1,
                    password2 : password2,
                    name : name,
                    telephone : telephone,
                    address : address,
                    gender : gender ? "Male" : "Female",
                    birthday : reverseDate(birthday)
                }

                console.log(newUser)

                const response = await auth.register(newUser);

                const user = response.data.result;

                console.log(user)

                if(response.status === 200){
                    navigation.navigate("HomePage", { user : user })
                }
            }
            catch (e) {
                console.log(e)

                if (e.response.status === 409) {
                    setAccount(true);
                }
            }
            finally{
                setLoading(false);
            }
        }
        callAPI()
    };
    const havedAccount = ()=>{
        navigation.navigate("Login")
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            keyboardVertical10Offset={Platform.OS === "ios" ? 0 : 10}
        >
            <ScrollView style={{width : "100%"}}>
                <StatusBar></StatusBar>
                <Header></Header>
                <Text style={styles.title}>Register</Text>
                <View style={styles.infoContainer}>
                    {/* account */}
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
                            <Text style={styles.error}>
                                This account is Invalid
                            </Text>
                        )}
                    </View>

                    {/* name */}
                    <View style={styles.formInputStyle}>
                        <Text style={styles.label}> Full Name </Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Full Name"
                            onChangeText={(value) => {
                                setName(value);
                            }}
                        ></TextInput>
                        {errName && (
                            <Text style={styles.error}>
                                Please input your full name
                            </Text>
                        )}
                    </View>

                    {/* gender */}
                    <View
                        style={{
                            ...styles.formInputStyle,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                ...styles.label,
                                width: "25%",
                                marginBottom: 0,
                            }}
                        >
                            {" "}
                            Gender{" "}
                        </Text>
                        <View style={{ ...styles.radioButton }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Text style={{ fontSize: 14 }}>Male</Text>
                                <View
                                    style={{
                                        borderRadius: 80,
                                        borderWidth: 1,
                                        padding: -20,
                                        marginLeft: 10,
                                    }}
                                >
                                    <RadioButton
                                        value="Male"
                                        status={gender ? "checked" : null}
                                        onPress={() => {
                                            setGender(!gender);
                                        }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Text style={{ fontSize: 14 }}>Female</Text>
                                <View
                                    style={{
                                        borderRadius: 80,
                                        borderWidth: 1,
                                        padding: -20,
                                        marginLeft: 10,
                                    }}
                                >
                                    <RadioButton
                                        value="Female"
                                        status={!gender ? "checked" : null}
                                        onPress={() => {
                                            setGender(!gender);
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Ngày sinh */}
                    <View style={styles.formInputStyle}>
                        <Text style={styles.label}> Birthday </Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Birthday"
                            onFocus={() => {
                                setShowCalendar(true);
                            }}
                            onBlur={() => {
                                setShowCalendar(false);
                            }}
                            value={birthday}
                        ></TextInput>
                        {showCalendar && (
                            <Calendar
                                onDayPress={(day) => {
                                    setBirthday(proccesDate(day.dateString));
                                }}
                                calendarHeight={100}
                            />
                        )}
                    </View>

                    {/* telephone */}
                    <View style={styles.formInputStyle}>
                        <Text style={styles.label}> Telephone </Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Telephone"
                            onChangeText={(value) => {
                                setTelephone(value);
                            }}
                        ></TextInput>
                        {errTelephone && (
                            <Text style={styles.error}>
                                This telephone is Invalid
                            </Text>
                        )}
                    </View>

                    {/* address */}
                    <View style={styles.formInputStyle}>
                        <Text style={styles.label}> Address </Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Address"
                            onChangeText={(value) => {
                                setAddress(value);
                            }}
                        ></TextInput>
                    </View>

                    {/* password 1 */}
                    <View style={styles.formInputStyle}>
                        <Text style={styles.label}> Password </Text>
                        <View>
                            <View style={{ justifyContent: "center" }}>
                                <TextInput
                                    style={styles.inputStyle}
                                    secureTextEntry={!showPassword1}
                                    placeholder="Password"
                                    onBlur={() => {
                                        setShowPassword1(false);
                                    }}
                                    onChangeText={(value) =>
                                        setPassword1(value)
                                    }
                                ></TextInput>
                                <TouchableOpacity
                                    onPress={() => {
                                        Keyboard.dismiss;
                                        setShowPassword1(!showPassword1);
                                    }}
                                    style={styles.icon}
                                >
                                    <Icon
                                        name={
                                            showPassword1
                                                ? "eye-with-line"
                                                : "eye"
                                        }
                                        size={30}
                                        color={"black"}
                                    ></Icon>
                                </TouchableOpacity>
                            </View>
                            {errPassword1 && (
                                <Text style={styles.error}>
                                    Please input your password
                                </Text>
                            )}
                        </View>
                    </View>

                    {/* password2 */}
                    <View style={styles.formInputStyle}>
                        <Text style={styles.label}> Confirm Pasword </Text>
                        <View>
                            <View style={{ justifyContent: "center" }}>
                                <TextInput
                                    style={styles.inputStyle}
                                    secureTextEntry={!showPassword2}
                                    placeholder="Confirm"
                                    onBlur={() => {
                                        setShowPassword2(false);
                                    }}
                                    onChangeText={(value) =>
                                        setPassword2(value)
                                    }
                                ></TextInput>
                                <TouchableOpacity
                                    onPress={() => {
                                        Keyboard.dismiss;
                                        setShowPassword2(!showPassword2);
                                    }}
                                    style={styles.icon}
                                >
                                    <Icon
                                        name={
                                            showPassword2
                                                ? "eye-with-line"
                                                : "eye"
                                        }
                                        size={30}
                                        color={"black"}
                                    ></Icon>
                                </TouchableOpacity>
                            </View>
                            {errPassword2 && (
                                <Text style={styles.error}>
                                    Passwords don't match
                                </Text>
                            )}
                        </View>
                    </View>
                </View>
                <View style={styles.buttonHolder}>
                    <TouchableOpacity
                        style={styles.registerButton}
                        onPress={registerHandler}
                    >
                        <Text style={styles.registerText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerContainer} >
                    <Text style={styles.footerText}>Have an account ? </Text>
                    <TouchableOpacity
                        onPress={havedAccount}
                    >
                        <Text style={{...styles.footerText, fontWeight : "bold", textDecorationLine: 'underline', color : "#A5EE9F"}}>
                            Log in ?
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {loading && (
                <View style={styles.loadingModal}>
                    <ActivityIndicator size="large" color="#fff" />
                    <Text style={styles.loadingText}>Checking...</Text>
                </View>
            )}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5AA162",
        width: "100%",
        alignItems : "center",
        justifyContent : "center"
    },
    title: {
        fontSize: 23,
        fontWeight: "bold",
        marginVertical: 10,
        color: "#872341",
        textAlign: "center",
    },
    infoContainer: {
        justifyContent: "center",
        alignItems: "center",
    },

    formInputStyle: {
        width: "90%",
        paddingVertical: 10,
        paddingLeft: 10,
    },
    label: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#AF2655",
    },
    inputStyle: {
        height: 43,
        width: "100%",
        borderWidth: 2,
        paddingHorizontal: 20,
        backgroundColor: "white",
        borderRadius: 10,
        fontSize: 15,
    },
    icon: {
        position: "absolute",
        right: 20,
    },
    error: {
        color: "red",
        textAlign: "center",
        marginTop: 10,
    },
    radioButton: {
        width: "65%",
        paddingVertical: 3,
        paddingLeft: 8,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    buttonHolder: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    registerButton: {
        backgroundColor: "#ECE3CE",
        width: 150,
        justifyContent: "center",
        borderRadius: 20,
        paddingVertical: 10,
    },
    registerText: {
        color: "#3A4D39",
        fontSize: 20,
        textAlign: "center",
    },
    footerContainer: {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        marginVertical: 10,
        marginBottom : 50,
    },
    footerText: {
        color: "white",
        fontSize: 15,
    },

    loadingModal: {
        position : "absolute",
        width: 200,
        height: 120,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        top : 300,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    loadingText: {
        color: "#fff",
        marginTop: 10,
    },
});
