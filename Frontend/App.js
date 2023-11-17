import { StyleSheet, Text, View, Image } from "react-native";

import AllRouter from "./views/routes/";
import Login from "./views/pages/login"

export default function App() {
    return (
        <View style={styles.container}>
            {/* <Login /> */}
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