import { StyleSheet, Text, View, Image } from "react-native";

import AllRouter from "./views/routes/";

export default function App() {
    return (
        <View style={styles.container}>
            <AllRouter/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});