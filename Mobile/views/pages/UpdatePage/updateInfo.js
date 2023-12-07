import { StatusBar } from "expo-status-bar";
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from "react-native";
const background = require("../../../assets/background_info.png");
import Icons from "../../../constants/Icons";
import { RadioButton } from "react-native-paper";
import { Calendar } from "react-native-calendars";
import { useEffect, useState } from "react";
import userAPI from "../../../api/userAPI";
import { useNavigation, useRoute } from "@react-navigation/native";

function proccesDate(rawBirthday)
{
    const dateObject = new Date(rawBirthday);

    // Lấy các thành phần ngày, tháng, năm từ đối tượng Date
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; // Lưu ý rằng tháng bắt đầu từ 0
    const year = dateObject.getFullYear();

    // Tạo chuỗi ngày tháng năm theo định dạng mong muốn
    return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
}

function reverseDate(rawBirthday)
{
    const parts = rawBirthday.split('-');
    const outputDate = parts.reverse().join('-');
    return outputDate;
}

export default function UpdateInfo() {

    const navigation = useNavigation();

    const route = useRoute();

    const user = route.params.user

    const [name, setName] = useState(user.name);
    const [gender, setGender] = useState(user.gender=='Nam' ? true : false);
    const [birthday, setBirthday] = useState(proccesDate(user.birthday));
    const [telephone, setTelephone] = useState(user.telephone);
    const [account, setAccount] = useState(user.account);
    const [address, setAddress] = useState(user.address);
    const [showCalendar, setShowCalendar] = useState(true)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {

            let response; 

            const fetchData = async () => {
                try {
                    const updateUser = {
                        name : name,
                        gender : gender ? "Nam" : "Nữ",
                        birthday : reverseDate(birthday),
                        telephone : telephone,
                        address : address,
                        id : user.id,
                    }

                    response = await userAPI.updateInfo(updateUser);

                } catch (e) {
                    console.log(e);
                } finally {
                    setLoading(false);
                    
                    if (response.data.result) {
                        console.log(response.data.result)
                        navigation.navigate("HomePage", {
                            user: response.data.result,
                        });
                    }

                }
            };
            fetchData();
        }
    }, [loading]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#5AA162"></StatusBar>
            <View style={styles.imageContainer}>
                <View style={styles.header}>
                    <TouchableOpacity 
                        style={styles.iconBack}
                        onPress={()=>{
                            navigation.navigate("HomePage", {
                                user: user,
                            });
                        }}
                    >
                        <Image
                            source={Icons.back}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.nameInBar}>{user.name}</Text>
                </View>
                <Image />
                <Image source={background} style={styles.background} />
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.headerTitle}>Thông tin cá nhân</Text>
            </View>
            <ScrollView style={styles.infoContainer}>

                {/* name */}
                <View style={styles.holder}>
                    <Text style={styles.label}>Họ tên</Text>
                    <TextInput 
                        defaultValue={name}
                        style={styles.input}
                        onFocus={()=>setShowCalendar(true)} 
                        onChange={(event)=>setName(event.nativeEvent.text)}
                    />
                </View>

                {/* gender */}
                <View style={styles.holder}>
                    <Text style={styles.label}>Giới tính</Text>
                    <View style={styles.radioButton}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ fontSize: 14 }}>Nam</Text>
                            <View style = {{borderRadius : 80, borderWidth : 1, padding : -20, marginLeft : 10}}>
                                <RadioButton
                                    value="Nam"
                                    status={gender ? "checked" : null}
                                    onPress={() => {
                                        setGender(!gender)
                                        setShowCalendar(true)
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
                            <Text style={{ fontSize: 14 }}>Nữ</Text>
                            <View style = {{borderRadius : 80, borderWidth : 1, padding : -20, marginLeft : 10}}>
                                <RadioButton
                                    value="Nữ"
                                    status={!gender ? "checked" : null}
                                    onPress={() => {
                                        setGender(!gender)
                                        setShowCalendar(true)
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                {/* birthday */}
                <View style={styles.holder}>
                    <Text style={styles.label}>Ngày sinh</Text>
                    <TouchableOpacity 
                        style={{width : "65%"}}
                        onPress={() => setShowCalendar(!showCalendar)}
                    >
                        <Text 
                            style={styles.calendarInput}
                        >{birthday}</Text>
                        {showCalendar || 
                        <Calendar
                            onDayPress={(day) => {
                                setBirthday(proccesDate(day.dateString));
                            }}
                            calendarHeight={100}
                            markedDates={{
                                [reverseDate(birthday)]: { selected: true, marked: true, selectedColor: 'blue' }
                            }}
                        />}
                    </TouchableOpacity>
                </View>

                {/* Telephone */}
                <View style={styles.holder}>
                    <Text style={styles.label}>Số điện thoại</Text>
                    <TextInput 
                        defaultValue={telephone} 
                        style={styles.input} 
                        onFocus={()=>setShowCalendar(true)} 
                        onChange={(event)=>setTelephone(event.nativeEvent.text)}
                    />
                </View>

                {/* address */}
                <View style={styles.holder}>
                    <Text style={styles.label}>Địa chỉ</Text>
                    <TextInput 
                        defaultValue={address} 
                        style={styles.input} 
                        onFocus={()=>setShowCalendar(true)} 
                        onChange={(event)=>setAddress(event.nativeEvent.text)}
                    />
                </View>

                {/* account */}
                <View style={styles.holder}>
                    <Text style={styles.label}>Tài khoản</Text>
                    <TextInput
                        value={account}
                        style={styles.input}
                        editable={false}
                    />
                </View>

                <View style={styles.buttonHolder}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => setLoading(true)}
                    >
                        <Text
                            style={{
                                color: "#092635",
                                fontSize: 16,
                                fontWeight: "bold",
                            }}
                        >
                            Thay Đổi
                        </Text>
                    </TouchableOpacity>
                </View>
                {loading && (
                    <View style={styles.loadingModal}>
                        <ActivityIndicator size="large" color="#fff" />
                        <Text style={styles.loadingText}>Đang cập nhập...</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    header: {
        zIndex: 1000,
        width: "100%",
        position: "absolute",
        top: 60,
        alignItems: "center",
    },

    headerTitle: {
        color: "#5AA162",
        fontSize: 30,
        fontWeight: "bold",
    },

    iconBack: {
        height: 40,
        width: 40,
        zIndex: 1000,
        position: "absolute",
        left: 20,
    },
    nameInBar: {
        position: "absolute",
        fontSize: 20,
        zIndex: 1000,
        fontWeight: "bold",
        color: "#092635",
    },
    background: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: 250,
    },
    imageContainer: {
        borderBottomWidth: 1,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 14,
        borderRadius: 50,
    },
    avatar: {
        height: 150,
        width: 150,
        marginTop: 130,
        borderRadius: 80,
    },
    infoContainer: {
        marginVertical: 20,
        flexDirection: "column",
    },
    holder: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    label: {
        width: "25%",
        fontSize: 14,
        paddingLeft: 10,
    },
    radioButton: {
        width: "65%",
        paddingVertical: 3,
        paddingLeft: 8,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    input: {
        fontSize: 14,
        width: "65%",
        paddingVertical: 3,
        paddingLeft: 8,
        borderWidth: 1,
        borderRadius: 10,
    },
    calendarInput : {
        fontSize: 14,
        width: "100%",
        paddingVertical: 3,
        paddingLeft: 8,
        borderWidth: 1,
        borderRadius: 10,
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 30,
        backgroundColor: "#A2C579",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonHolder: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
        marginTop: 10,
    },
    loadingText: {
        color: "#fff",
        marginTop: 10,
    },
    image : {
        height : "100%",
        width : "100%",
    },
});
