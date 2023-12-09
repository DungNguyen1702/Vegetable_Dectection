import { StyleSheet, Text, View, Image } from "react-native";
import Images from "../../../constants/Image"
import { StatusBar } from "expo-status-bar";
import Icons from "../../../constants/Icons";

export default function HistoryPage() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#F7B787" barStyle="black"></StatusBar>
            <View style={styles.header}>
                <Image
                    source={Images.backgroundLikeFruit}
                    style={styles.backgroundHeader}
                    resizeMode="cover"
                />
                <View style={styles.logoHolder}>
                    <Image
                        source={Icons.likeFruitIcon}
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.headerTitle}>Danh sách trái cây đã thích</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height : "100%",
    },
    header : {
        width : "100%",
        justifyContent : "center",
        alignItems : "center",
        borderBottomWidth : 1,
        borderRadius : 30
    },
    backgroundHeader : {
        width : "100%",
        height : 200,
        position : "absolute",
        top : 10,
    },
    logo : {
        height : 120,
        width : 120,
    },
    logoHolder : {
        marginTop : 110,
        borderRadius : 50,
        backgroundColor : "#EE7214",
        padding : 10,
    },
    headerTitle: {
        color: "#527853",
        fontSize: 26,
        fontWeight: "bold",
        marginTop : 10,
        marginBottom : 15
    },
})