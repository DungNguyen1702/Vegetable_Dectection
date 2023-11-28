import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export default function DetailFruit()
{
    const route = useRoute();
    const { id } = route.params
    return (
        <View style = {styles.container}>
            <Text>{id}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container : {
            width : "100%",
            height : "100%"
        }
    }
)