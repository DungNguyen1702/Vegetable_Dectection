import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "../../../../constants/Icons";
const background = require("../../../../assets/account_background.jpeg");
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import userAPI from "../../../../api/userAPI";

export default function ImageComponent({user}) {

    const [capturedImage, setCapturedImage] = useState(user.avatar);

    const chooseImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.canceled) {
            setCapturedImage(result.assets[0]?.uri);
        }
    };

    useEffect(()=>{
        if (capturedImage !== user.avatar) {
            const fetchData = async () => {
                try {
                    await userAPI.updateAvatar(capturedImage, user.id);
                } catch (e) {
                    console.log(e);
                } finally {
                    console.log("update avatar finish")
                }
            };
            fetchData();
        }
    },[capturedImage])

    return (
        <View style={styles.image}>
            <Image
                style={styles.accountBackground}
                source={background}
                resizeMode="cover"
            ></Image>
            <Image
                source={{
                    uri: capturedImage,
                }}
                style={styles.avatar}
                resizeMode="contain"
            ></Image>
            <TouchableOpacity
                style = {styles.changeButton}
                onPress={chooseImage}
            >
                <Image
                    source={Icons.changeAvaIcon}
                    style = {styles.icon}        
                />
            </TouchableOpacity>
            <Text style={styles.accountName}>{user.name}</Text>
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
