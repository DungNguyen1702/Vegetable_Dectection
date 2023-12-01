import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const background = require("../../../assets/account_background.jpeg")

export default function AccountInfo()
{
    return (
        <View style ={styles.container}>
            <View style = {styles.image}>
                <Image
                    style = {styles.accountBackground}
                    source={background}
                    resizeMode="cover"
                ></Image>
                <Image
                    source={{uri : "https://i.pinimg.com/736x/44/b1/aa/44b1aa2a5a9f579097e529e83c0bb2bd.jpg"}}
                    style={styles.avatar}
                    resizeMode="cover"
                ></Image>
                <Text style = {styles.accountName}>Tên account</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor : "#5AA162"
    },
    accountBackground : {
        width : "100%",
        height : 200,
        position : "absolute",
    },
    avatar : {
        height : 150,
        width : 150,
        borderRadius : 80,
        marginTop : 80,
        backgroundColor : "red",
        borderColor : "black",
    },
    image : {
        width : "100%",
        alignItems: "center",
        borderBottomWidth : 1,
        borderRadius : 35,
    },
    accountName : {
        fontWeight : "bold",
        fontSize : 20,

    }
})