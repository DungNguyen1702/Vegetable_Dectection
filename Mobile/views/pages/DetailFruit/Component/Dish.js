import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Support from "./Support";
import AntIcons from "react-native-vector-icons/AntDesign"
import { useEffect, useState } from "react";
import likeAPI from "../../../../api/likeAPI";

export default function Dish(props) {
    const info = props.data;
    const user_id = props.user_id

    const [tempLike,setTempLike] = useState(info.statusLike); 

    useEffect(() => {
        if (tempLike !== info.statusLike) {
            // Gửi yêu cầu API chỉ khi tempLike khác với statusLike
            const api = async () => {
                try {
                    if (tempLike) {
                        await likeAPI.createLikeDish(info.id, user_id);
                    } else {
                        await likeAPI.deleteLikeDish(info.id, user_id);
                    }
                } catch (e) {
                    console.log(e);
                }
            };
            api();
        }
    }, [tempLike]);

    const ingredients = Support.StringProccessSplit(info.ingredients);
    const nutrition = Support.StringProccessSplit(info.nutrition);

    return (
        <View key={"dish_" + info.id}>
            <View style={styles.container}>
                <Image
                    source={{ uri: info.DishImages[0].image }}
                    style={styles.image}
                />
                <ScrollView style={styles.blurView}>
                    <View style={styles.headerHolder}>
                        <Text style={styles.dishName}>{info.name}</Text>
                        <TouchableOpacity
                            style={styles.heart}
                            onPress={() => setTempLike(!tempLike)}
                        >
                            <AntIcons
                                name={tempLike ? "heart" : "hearto"}
                                size={30}
                                color={tempLike ? "#F781BC" : "#F857B5"}
                            ></AntIcons>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.nutritionAndIngredentContainer}>
                        <View style={styles.nutrition}>
                            <Text style={styles.label}>Giá trị dinh dưỡng</Text>
                            <View>
                                {nutrition.map((item) => (
                                    <Text style={styles.item}>{item}</Text>
                                ))}
                            </View>
                        </View>
                        <View style={styles.ingredient}>
                            <Text style={styles.label}>Thành phần</Text>
                            <View>
                                {ingredients.map((item) => (
                                    <Text style={styles.item}>{item}</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerHolder : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        width : "100%",
    },
    heart : {
        width : 30,
        height : 30,
        alignItems : "center",
        justifyContent : "center"
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 335,
        height: 225,
        borderRadius: 30,
    },
    blurView: {
        position: "absolute",
        width: 335,
        height: 225,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderRadius: 30,
        paddingHorizontal: 20,
        flexDirection: "column",
        overflow: "scroll",
    },
    dishName: {
        textAlign: "center",
        fontSize: 16,
        fontStyle: "italic",
        color: "#860A35",
        fontWeight: "bold",
        paddingVertical: 10,
        overflow: "visible",
        width :  "90%"
    },
    nutritionAndIngredentContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 30,
    },
    nutrition: {
        width: "45%",
        borderRightWidth: 1, // Độ rộng của borderBottom
        borderRightColor: "black", // Màu của borderBottom
    },
    ingredient: {
        width: "45%",
    },
    label: {
        color: "#AF2655",
        fontWeight: "bold",
        paddingBottom: 10,
        fontSize: 14,
        textAlign: "center",
    },
    item: {
        paddingBottom: 5,
        fontSize: 12,
    },
});
