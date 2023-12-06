import {
    StatusBar,
    StyleSheet,
    View,
    Text,
    TextInput,
    FlatList,
} from "react-native";
import Header from "../../../components/header/header";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useEffect, useState } from "react";
import Component from "./Component";
import fruitAPI from "../../../api/fruitAPI";
import { useRoute } from "@react-navigation/native";
export default function HomePage() {

    const route = useRoute();
    const {user} = route.params;

    const [dataFruit,setDataFruit] = useState([])
    const [dataFruitCount, setDataFruitCount] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                var allFruit = await fruitAPI.allFruit();
                setDataFruitCount(allFruit.data.count);
                setDataFruit(allFruit.data.rows);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#5AA162" />
            {/* header */}
            <Header />
            {/* Search Input */}
            <View
                style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <FeatherIcon
                    name="search"
                    style={styles.searchIcon}
                    size={30}
                ></FeatherIcon>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Nhập tên loại trái cây"
                />
                {/* List fruits */}
                {dataFruitCount > 0 ? (
                    <FlatList
                        style={styles.flatList}
                        contentContainerStyle={styles.flatListContainer}
                        data={dataFruit}
                        renderItem={({ item }) => (
                            <Component data={item} keyProp={item.id} />
                        )}
                        keyExtractor={(eachEvent) => eachEvent.id.toString()}
                        scrollEnabled={true}
                    />
                ) : (
                    <View style={styles.notFound}>
                        <Text style={styles.textNotFound}>
                            Fruit not found !!!
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },

    searchInput: {
        height: 40,
        width: "90%",
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 50,
        paddingLeft: 40,
        fontSize: 17,
    },
    searchIcon: {
        height: 30,
        width: 30,
        position: "absolute",
        zIndex: 1000,
        left: 28,
        top: 15,
    },
    flatList: {
        width: "100%",
        marginTop: 10,
        marginBottom: 160,
    },
    flatListContainer: {
        alignItems: "center",
    },
    notFound: {
        flex: 1,
        marginTop: 150,
        alignItems: "center",
    },
    iconNotFound: {
        width: 120,
        height: 120,
    },
    textNotFound: {
        marginTop: 10,
        color: "#195851",
        fontSize: 16,
    },
});
