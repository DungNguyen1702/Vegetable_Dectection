import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ButtonComponent from "./Component/buttonComponent";
import ImageComponent from "./Component/imageComponent";
import { useRoute } from "@react-navigation/native";
import userAPI from "../../../api/userAPI";
import { useEffect } from "react";



export default function AccountInfo()
{
    const route = useRoute();
    const {user} = route.params;

    return (
        <View style ={styles.container}>
            <ImageComponent user = {user}/>
            <ButtonComponent user = {user}/>
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
    
})