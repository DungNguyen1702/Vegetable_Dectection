import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "../../../../constants/Icons";
import { useNavigation } from "@react-navigation/native";


export default function ButtonComponent() {
    const navigation = useNavigation();

    const proccesButton = {
        logout : ()=>{
            navigation.navigate("Login")       
        }
    }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.buttonHolder}>
                <Image source={Icons.userIcon} style={styles.icon}></Image>
                <Text>Thông tin cá nhân</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonHolder}>
                <Image source={Icons.passwordIcon} style={styles.icon}></Image>
                <Text>Thay đổi mật khẩu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonHolder}>
                <Image source={Icons.dishIcon} style={styles.icon}></Image>
                <Text>Những món ăn đã thích</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonHolder}>
                <Image source={Icons.fruitIcon} style={styles.icon}></Image>
                <Text>Những trái cây đã thích</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonHolder}>
                <Image source={Icons.historyIcon} style={styles.icon}></Image>
                <Text>Lịch sử tìm kiếm</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.buttonHolder, {marginBottom : 20}]}
                onPress={proccesButton.logout}
            >
                <Image source={Icons.logoutIcon} style={styles.icon}></Image>
                <Text>Đăng xuất</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 10,
        flexDirection: "column",
    },
    icon: {
        height: 45,
        width: 45,
        marginLeft : 20,
        marginRight : 30
    },
    buttonHolder: {
        backgroundColor: "white",
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 20,
        elevation: 10,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
        marginHorizontal: 10,
        paddingVertical : 10,
    },
});
