import { Image, StyleSheet, Text, View } from "react-native";
import Support from "./Support";

export default function Dish(props) {
    const info = props.data;
    const ingredients = Support.StringProccessSplit(info.ingredients);
    const nutrition = Support.StringProccessSplit(info.nutrition);

    return (
        <View style={styles.container} key={props.dishKey}>
            <Image
                source={{ uri: info.DishImages[0].image }}
                style={styles.image}
            />
            <View style={styles.blurView}>
                <Text style={styles.dishName}>{info.name}</Text>
                <View style={styles.nutritionAndIngredentContainer}>
                    <View style={styles.nutrition}>
                        <Text style = {styles.label}>Giá trị dinh dưỡng</Text>
                        <View>
                            {nutrition.map((item) => (
                                <Text style = {styles.item}>{item}</Text>
                            ))}
                        </View>
                    </View>
                    <View style={styles.ingredient}>
                        <Text style = {styles.label}>Thành phần</Text>
                        <View>
                            {ingredients.map((item) => (
                                <Text style = {styles.item}>{item}</Text>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        overflow : "scroll",
    },
    infoContainer: {
        width: 350,
        height: 225,
        position: "absolute",
        zIndex: 1000,
    },
    dishName: {
        textAlign: "center",
        fontSize: 16,
        fontStyle: "italic",
        color: "#860A35",
        fontWeight : "bold",
        paddingVertical : 10,
    },
    nutritionAndIngredentContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height : 170,
    },
    nutrition: {
        width: "45%",
        borderRightWidth: 1, // Độ rộng của borderBottom
        borderRightColor: "black", // Màu của borderBottom
    },
    ingredient: {
        width: "45%",
    },
    label : {
        color : "#AF2655",
        fontWeight : "bold",
        paddingBottom : 10,
        fontSize : 15,
        textAlign : "center",
    },
    item : {
        paddingBottom : 5,
        fontSize : 10,
    }
});
