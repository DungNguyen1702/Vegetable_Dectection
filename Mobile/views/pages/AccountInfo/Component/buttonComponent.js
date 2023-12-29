import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "../../../../constants/Icons";
import { useNavigation } from "@react-navigation/native";

export default function ButtonComponent({user}) {
    const navigation = useNavigation();

    const proccesButton = {
        logout : ()=>{
            navigation.navigate("Login")       
        },
        updateInfo : ()=>{
            navigation.navigate("UpdateInfo", {user : user})
        },
        updatePassword : ()=>{
            navigation.navigate("UpdatePassword", {user : user})
        },
        likeFruit : ()=>{
            navigation.navigate("LikeFruit", {user : user})
        },
        likeDish : ()=>{
            navigation.navigate("LikeDish", {user : user})
        },
        history : ()=>{
            navigation.navigate("History", {user : user})
        }
    }

    return (
        <ScrollView style={styles.container}>
            
            {/* Change info */}
            <TouchableOpacity 
                style={styles.buttonHolder}
                onPress={proccesButton.updateInfo}
            >
                <Image source={Icons.userIcon} style={styles.icon}></Image>
                <Text>Personal information</Text>
            </TouchableOpacity>
            
            {/* Change password */}
            <TouchableOpacity 
                style={styles.buttonHolder}
                onPress={proccesButton.updatePassword}
            >
                <Image source={Icons.passwordIcon} style={styles.icon}></Image>
                <Text>Change Password</Text>
            </TouchableOpacity>
            
            {/* LikeDish */}
            <TouchableOpacity 
                style={styles.buttonHolder}
                onPress={proccesButton.likeDish}
            >
                <Image source={Icons.dishIcon} style={styles.icon}></Image>
                <Text>Favorite dishes</Text>
            </TouchableOpacity>
            
            {/* LikeFruit */}
            <TouchableOpacity 
                style={styles.buttonHolder}
                onPress={proccesButton.likeFruit}    
            >
                <Image source={Icons.fruitIcon} style={styles.icon}></Image>
                <Text>Favorite fruits</Text>
            </TouchableOpacity>
            
            {/* History */}
            <TouchableOpacity 
                style={styles.buttonHolder}
                onPress={proccesButton.history}
            >
                <Image source={Icons.historyIcon} style={styles.icon}></Image>
                <Text>Recognition history</Text>
            </TouchableOpacity>
            
            {/* Logout */}
            <TouchableOpacity 
                style={[styles.buttonHolder, {marginBottom : 20}]}
                onPress={proccesButton.logout}
            >
                <Image source={Icons.logoutIcon} style={styles.icon}></Image>
                <Text>Log out</Text>
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
