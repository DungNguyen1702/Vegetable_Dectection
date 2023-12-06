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

export default function Component(props) {
    const navigation = useNavigation();
    const { name, FruitImages, star, season, color, origin, taste, id, status } =
        props.data;

    const [like, setLike] = useState(true);
    
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("DetailFruit", { id })}
        >
            <TouchableOpacity
                style={styles.heart}
                onPress={()=>setLike(!like)}
            >
                <AntIcons
                    name = {like ? "heart" : "hearto"}
                    size = {30}
                    color= {like ? "red" : "#FF90BC"}
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
                        <Text style={styles.detailTitle}>Mùa</Text>
                        <Text style={styles.detailData}>{season}</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.detailTitle}>Màu sắc</Text>
                        <Text style={styles.detailData}>{color}</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.detailTitle}>Xuất xứ</Text>
                        <Text style={styles.detailData}>{origin}</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.detailTitle}>Vị</Text>
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
