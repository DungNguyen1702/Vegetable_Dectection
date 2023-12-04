import { StyleSheet, Text, View } from "react-native";
import Header from "../../../components/header/header";
import CamreraComponent from "./Component/Camera";


export default function Camera() {

    return (
        <View style={styles.container}>
            <Header/>
            <CamreraComponent/>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})