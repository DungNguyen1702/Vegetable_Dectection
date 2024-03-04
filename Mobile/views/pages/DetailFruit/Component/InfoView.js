import { StyleSheet, Text, View } from "react-native";

export default function InfoView(props) {
    const {
        name,
        color,
        medical,
        nutrition,
        origin,
        season,
        taste,
    } = props.data;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Information</Text>
            <View style={styles.infoContainer}>
                <View style={styles.holderView}>
                    <Text style={styles.label}>Name</Text>
                    <Text style={styles.info}>
                        {name}
                    </Text>
                </View>
                <View style={styles.holderView}>
                    <Text style={styles.label}>Color</Text>
                    <Text style={styles.info}>{color}</Text>
                </View>
                <View style={styles.holderView}>
                    <Text style={styles.label}>Origin</Text>
                    <Text style={styles.info}>{origin}</Text>
                </View>
                <View style={styles.holderView}>
                    <Text style={styles.label}>Season</Text>
                    <Text style={styles.info}>{season}</Text>
                </View>
                <View style={styles.holderView}>
                    <Text style={styles.label}>Taste</Text>
                    <Text style={styles.info}>{taste}</Text>
                </View>
                <View style={styles.holderView}>
                    <Text style={styles.label}>Medicine</Text>
                    <Text style={styles.info}>{medical}</Text>
                </View>
                <View style={styles.holderView}>
                    <Text style={styles.label}>Nutrition</Text>
                    <Text style={styles.info}>{nutrition}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#A5EE9F",
        flexDirection: "column",
        marginHorizontal: 20,
        marginVertical: 5,
        borderRadius: 20,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        paddingVertical: 10,
    },
    infoContainer: { 
        marginBottom : 30, 
        marginLeft: 5, 
        marginRight: 15 
    },
    label: {
        width: "35%",
        fontWeight: "bold",
        fontSize: 18,
        color: "blue",
        paddingLeft: 9,
    },
    info: {
        width: "65%",
        fontSize: 18,
        paddingLeft: 9,
        overflow: "scroll",
    },
    holderView: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 8,
    },
});
