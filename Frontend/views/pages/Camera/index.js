import { StyleSheet, Text, View } from "react-native";


export default function Camera() {

    return (
        <View style={styles.container}>
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