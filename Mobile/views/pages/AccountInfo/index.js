import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ButtonComponent from "./Component/buttonComponent";
import ImageComponent from "./Component/imageComponent";



export default function AccountInfo()
{
    return (
        <View style ={styles.container}>
            <ImageComponent/>
            <ButtonComponent/>
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