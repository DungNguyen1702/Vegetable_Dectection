import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "../../../../constants/Icons";
const background = require("../../../../assets/account_background.jpeg");

export default function ImageComponent() {
    return (
        <View style={styles.image}>
            <Image
                style={styles.accountBackground}
                source={background}
                resizeMode="cover"
            ></Image>
            <Image
                source={{
                    uri: "https://i.pinimg.com/736x/44/b1/aa/44b1aa2a5a9f579097e529e83c0bb2bd.jpg",
                }}
                style={styles.avatar}
                resizeMode="cover"
            ></Image>
            <TouchableOpacity
                style = {styles.changeButton}
            >
                <Image
                    source={Icons.changeAvaIcon}
                    style = {styles.icon}        
                />
            </TouchableOpacity>
            <Text style={styles.accountName}>Tên account</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
        marginBottom : 10
    },
    changeButton : {
        backgroundColor : "white",
        alignItems : "center",
        marginTop : -40,
        marginRight : -90,
        borderColor : "black",
        borderWidth : 0.5,
        width: 45,  
        height: 45, 
        borderRadius: 25, 
        alignItems : "center",
        justifyContent : "center"
    },
    icon : {
        height : 20,
        width : 20
    }
})
