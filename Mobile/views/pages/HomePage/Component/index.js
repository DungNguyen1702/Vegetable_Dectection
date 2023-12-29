import { useEffect, useState } from "react";
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Stars from "../../../../components/star/stars";
import { useNavigation } from "@react-navigation/native";
import AntIcons from "react-native-vector-icons/AntDesign"
import likeAPI from "../../../../api/likeAPI";

export default function Component(props) {
    const navigation = useNavigation();
    const { name, FruitImages, star, season, color, origin, taste, id, statusLike } =
        props.data;

    const {user} = props
    const user_id = user.id

    const [tempLike, setTempLike] = useState(statusLike);

    useEffect(() => {
        if (tempLike !== statusLike) {
            // Gửi yêu cầu API chỉ khi tempLike khác với statusLike
            const api = async () => {
                try {
                    if (tempLike) {
                        await likeAPI.createLikeFruit(id, user_id);
                    } else {
                        await likeAPI.deleteLikeFruit(id, user_id);
                    }
                } catch (e) {
                    console.log(e);
                }
            };
            api();
        }
    }, [tempLike, statusLike, id, user_id]);
    
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("DetailFruit", { id : id, user : user })}
        >
            <TouchableOpacity
                style={styles.heart}
                onPress={()=>setTempLike(!tempLike)}
            >
                <AntIcons
                    name = {tempLike ? "heart" : "hearto"}
                    size = {30}
                    color= {tempLike ? "#F781BC" : "#F857B5"}
                >
                </AntIcons>
            </TouchableOpacity>
            <View style={styles.imageField}>
                <Image
                    source={{ uri: FruitImages[0].image + "" }}
                    style={styles.image}
                    key={props.keyProp}
                    resizeMode="cover"
                ></Image>
                <Stars starNum={star}></Stars>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.fruitInfo}>
                    <View style={styles.detail}>
                        <Text style={styles.detailTitle}>Season</Text>
                        <Text style={styles.detailData}>{season}</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.detailTitle}>Color</Text>
                        <Text style={styles.detailData}>{color}</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.detailTitle}>Origin</Text>
                        <Text style={styles.detailData}>{origin}</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.detailTitle}>Taste</Text>
                        <Text style={styles.detailData}>{taste}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    heart : {
        position : "absolute",
        zIndex : 1000,
        top : 20,
        right : 30,
    },
    container: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#A5EE9F",
        paddingVertical: 25,
        borderRadius: 20,
        marginVertical: 8,
        elevation: 10,
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 20,
        marginBottom: 10,
    },
    infoContainer: {
        flexDirection: "column",
        width: "60%",
    },
    imageField: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#8B008B",
        textAlign: "center",
        marginBottom: 10,
    },
    fruitInfo: {
        flexDirection: "column",
    },
    detail: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 4,
    },
    detailTitle: {
        fontWeight: "bold",
        width: "35%",
        overflow: "scroll",
        color: "blue",
        fontSize: 12,
    },
    detailData: {
        width: "60%",
        overflow: "scroll",
        fontSize: 12,
    },
});
