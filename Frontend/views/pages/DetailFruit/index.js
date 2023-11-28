import { useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

export default function DetailFruit()
{
    const route = useRoute();
    const { FruitID } = route.params
    return (
        <View style = {styles.container}>
            <Text>{FruitID}</Text>
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