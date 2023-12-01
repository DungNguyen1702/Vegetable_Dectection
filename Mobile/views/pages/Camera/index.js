import { StyleSheet, Text, View } from "react-native";
import Header from "../../../components/header/header";


export default function Camera() {

    return (
        <View style={styles.container}>
            <Header/>
            <Text>Camera</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        justifyContent : 'center'
    }
})