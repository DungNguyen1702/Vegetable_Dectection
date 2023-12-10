import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import Images from "../../../constants/Image"
import { StatusBar } from "expo-status-bar";
import Icons from "../../../constants/Icons";
import ComponentDish from "./Component/ComponentDish";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import likeAPI from "../../../api/likeAPI";

export default function LikeDishes() {
    
    // const user = {id : 1};

    const navigation = useNavigation();
    
    const route = useRoute();
    
    const user = route.params.user;
    const [loading, setLoading] = useState(true);
    const [dataDish, setDataDish] = useState([]);

    useEffect(() => {
        if (!loading) return;

        const fetchData = async () => {
            try {
                var likeDishes = await likeAPI.getLikeDishByUserID(user.id);
                setDataDish(likeDishes)
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
            <StatusBar backgroundColor="#64CCC5" barStyle="black"></StatusBar>
            <View style={styles.header}>
                <Image
                    source={Images.backgroundLikeDish}
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
                        source={Icons.backLikeDish}
                        style={{ width: 30, height: 30}}
                    />
                </TouchableOpacity>
                <View style={styles.logoHolder}>
                    <Image
                        source={Icons.likeDishIcon}
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.headerTitle}>Danh sách món ăn đã thích</Text>
            </View>
            <View style={styles.infoContainer}>
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
                            data={dataDish}
                            renderItem={({ item }) => (
                                <View >
                                    <ComponentDish key = {item.id} data={item}/>
                                </View>
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
        backgroundColor : "#FDF7E4"
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
        height : 200,
        position : "absolute",
        top : 10,
    },
    logo : {
        height : 120,
        width : 120,
    },
    logoHolder : {
        marginTop : 110,
        borderRadius : 50,
        backgroundColor : "#176B87",
        padding : 10,
    },
    headerTitle: {
        color: "#04364A",
        fontSize: 26,
        fontWeight: "bold",
        marginTop : 10,
        marginBottom : 15
    },
    infoContainer : {
        width : "100%",
        height : "100%"
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
    infoHolder : {
        marginTop : 10
    },
    flatList: {
        width: "100%",
        marginTop: 10,
        marginBottom: 310,
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