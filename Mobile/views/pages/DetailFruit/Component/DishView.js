import { StyleSheet, Text, View } from "react-native";
import Dish from "./Dish";
import Swiper from "react-native-swiper";

export default function DishView(props) {
    const dishes = props.data;
    const { user_id } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dishes</Text>
            <Swiper showsButtons={false} style={styles.wrapper}>
                {dishes.map((item, index) => {
                    return (
                        <Dish
                            key={"fruit_dish" + index}
                            data={item}
                            dishKey={`dish_${index}`}
                            user_id={user_id}
                        />
                    );
                })}
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#A5EE9F",
        flexDirection: "column",
        marginHorizontal: 18,
        marginVertical: 15,
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 20,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        paddingBottom: 10,
    },
    wrapper: {
        height: 240,
    },
});
