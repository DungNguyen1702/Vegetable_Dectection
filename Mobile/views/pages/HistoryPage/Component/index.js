import { Image, StyleSheet, Text, View } from "react-native";

export default function Component(props) {
    const info = props.data

    return (
        <View style={styles.container}>
            <Image
                source={{uri : info.image}}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={styles.infoContainer}>
                <Text style={styles.time}>{info.createdAt}</Text>
                <Text style={styles.title}>Recognition result</Text>
                {/* name */}
                <View style={styles.itemContainer}>
                    <Text style={styles.label}>Name</Text>
                    <Text style={styles.value}>{info.Fruit.name}</Text>
                </View>

                {/* origin */}
                <View style={styles.itemContainer}>
                    <Text style={styles.label}>Origin</Text>
                    <Text style={styles.value}>{info.Fruit.origin}</Text>
                </View>

                {/* season */}
                <View style={styles.itemContainer}>
                    <Text style={styles.label}>Season</Text>
                    <Text style={styles.value}>{info.Fruit.season}</Text>
                </View>

                {/* taste */}
                <View style={styles.itemContainer}>
                    <Text style={styles.label}>Taste</Text>
                    <Text style={styles.value}>{info.Fruit.taste}</Text>
                </View>

                {/* color */}
                <View style={styles.itemContainer}>
                    <Text style={styles.label}>Color</Text>
                    <Text style={styles.value}>{info.Fruit.color}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#B0A695",
        marginVertical: 10,
        borderRadius: 30,
        paddingVertical : 20,
    },
    image : {
        height : 200,
        width : "85%",
    },
    infoContainer : {
        width : "90%",
    },
    time : {
        color : "#776B5D",
        fontSize : 13,
        textAlign : "right",
        marginRight : 10,
        marginHorizontal : 10,
        marginTop : 5
    },
    title : {
        fontSize : 20,
        color : "#B06161",
        fontWeight : "bold",
        textAlign : "center",
        marginVertical : 10,
    },
    itemContainer : {
        flexDirection : "row",
        justifyContent : "space-between",
        marginHorizontal : 20,
        marginVertical : 5,
    },
    label : {
        width : "35%",
        fontWeight : "bold",
        color : "#711DB0",
        fontSize : 15,
    },
    value : {
        width : "55%",
        fontSize : 15,
        color : "#2B2A4C",
    }
});
