import {
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";
import Support from "./Support";

export default function ComponentDish(props) {
    const info = props.data

    const ingredients = Support.StringProccessSplit(info.Dish.ingredients);
    const nutrition = Support.StringProccessSplit(info.Dish.nutrition);

    return (
        <View style={styles.container}>
            <Image
                source={{uri : info.Dish.DishImages[0].image}}
                style={styles.image}
            />
            <Text style={styles.dishName}>{info.Dish.name}</Text>
            <View style={styles.nutritionAndIngredentContainer}>
                <View style={styles.nutrition}>
                    <Text style={styles.label}>Nutritions</Text>
                    <View style = {{paddingRight : 5}}>
                        {nutrition.map((item) => (
                            <Text style={styles.item}>{item}</Text>
                        ))}
                    </View>
                </View>
                <View style={styles.ingredient}>
                    <Text style={styles.label}>Ingredients</Text>
                    <View>
                        {ingredients.map((item) => (
                            <Text style={styles.item}>{item}</Text>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerHolder: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "#8EACCD",
        marginVertical : 10,
        marginHorizontal : 20,
        borderRadius : 30,
        paddingBottom : 4,
    },
    image: {
        width: "90%",
        height: 225,
        borderRadius: 30,
        zIndex : 1000,
        marginTop : 20,
        paddingHorizontal : 20
    },
    dishName: {
        textAlign: "center",
        fontSize: 16,
        fontStyle: "italic",
        color: "#860A35",
        fontWeight: "bold",
        paddingVertical: 10,
        overflow: "visible",
        width: "90%",
        marginVertical : 7,
    },
    nutritionAndIngredentContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom : 15,
    },
    nutrition: {
        width: "45%",
        borderRightWidth: 1, // Độ rộng của borderBottom
        borderRightColor: "black", // Màu của borderBottom
    },
    ingredient: {
        width: "45%",
        paddingLeft : 6
    },
    label: {
        color: "#AF2655",
        fontWeight: "bold",
        paddingBottom: 10,
        fontSize: 14,
        textAlign: "center",
    },
    item: {
        fontSize: 12,
        marginVertical : 2
    },
});
