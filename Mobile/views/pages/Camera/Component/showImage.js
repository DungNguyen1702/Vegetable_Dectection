import { useRoute } from "@react-navigation/native";
import { Image, View } from "react-native";

export default function ShowImage()
{
    const route = useRoute();
    const { capturedImage } = route.params;
    return (
        <View style = {{height : 400, width : 210}}>
            <Image source={{ uri: capturedImage }} style = {{height : 380 , width : 200}}></Image>
        </View>
    )
}