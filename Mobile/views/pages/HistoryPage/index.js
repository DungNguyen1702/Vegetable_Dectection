import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import Images from "../../../constants/Image"
import { StatusBar } from "expo-status-bar";
import Icons from "../../../constants/Icons";
import Component from "./Component";
import { useEffect, useState } from "react";
import historyAPI from "../../../api/historyAPI";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function HistoryPage() {

    const navigation = useNavigation();
    
    const route = useRoute();
    
    const user = route.params.user;

    const [loading, setLoading] = useState(true);
    const [dataHistory, setDataHistory] = useState([]);

    useEffect(() => {
        if (!loading) return;

        const fetchData = async () => {
            try {
                var history = await historyAPI.getHistory(user.id);
                setDataHistory(history)
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [loading]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#B0A695" barStyle="black"></StatusBar>
            <View style={styles.header}>
                <Image
                    source={Images.backgroundHistory}
                    style={styles.backgroundHeader}
                    resizeMode="cover"
                />

                <TouchableOpacity
                    style={styles.iconBack}
                    onPress={() => {
                        navigation.navigate("HomePage", {
                            user: user,
                        });
                    }}
                >
                    <Image
                        source={Icons.backHistory}
                        style={{ width: 30, height: 30}}
                    />
                </TouchableOpacity>

                <View style={styles.logoHolder}>
                    <Image
                        source={Icons.historyIconInside}
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.headerTitle}>Lịch sử nhận diện</Text>
            </View>
            <View style={styles.infoHolder}>
            {loading ? (
                    <View style={styles.notFound}>
                        <Image
                            source={Images.loading}
                            style={styles.iconNotFound}
                        />
                        <Text style={styles.textNotFound}>Đang tải dữ liệu</Text>
                    </View>
                ) : 
                (
                    <View style={{width : "100%", height : "100%"}}>
                        <FlatList
                            style={styles.flatList}
                            contentContainerStyle={styles.flatListContainer}
                            data={dataHistory}
                            renderItem={({ item }) => (
                                <Component key = {item.id} data={item}/>
                            )}
                            keyExtractor={(eachEvent) => eachEvent.id.toString()}
                            scrollEnabled={true}
                        />
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height : "100%",
        backgroundColor : "#F3EEEA"
    },
    header : {
        width : "100%",
        justifyContent : "center",
        alignItems : "center",
        borderBottomWidth : 1,
        borderRadius : 30
    },
    backgroundHeader : {
        width : "100%",
        height : 250,
        position : "absolute",
        top : 10,
    },
    logo : {
        height : 100,
        width : 100,
    },
    logoHolder : {
        marginTop : 170,
        borderRadius : 50,
        backgroundColor: "rgba(176, 166, 149, 0.8)",
        padding : 20,
    },
    headerTitle: {
        color: "#776B5D",
        fontSize: 26,
        fontWeight: "bold",
        marginTop : 10,
        marginBottom : 15
    },
    infoHolder : {
        marginTop : 10
    },
    notFound: {
        width : "100%",
        height : "100%",
        alignItems: "center",
        marginTop : 50
    },
    iconNotFound: {
        width: 200,
        height: 200,
        position : "absolute",
        top : 40,
    },
    textNotFound: {
        marginTop: 250,
        color: "#195851",
        fontSize: 20,
    },
    flatList: {
        width: "100%",
        marginTop: 10,
        marginBottom: 375,
    },
    flatListContainer: {
        alignItems: "center",
    },
    iconBack: {
        height: 40,
        width: 40,
        zIndex: 1000,
        position: "absolute",
        left: 20,
        top : 50,
    },
})