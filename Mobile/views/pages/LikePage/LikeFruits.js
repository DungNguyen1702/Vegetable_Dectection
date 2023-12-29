import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import Images from "../../../constants/Image";
import { StatusBar } from "expo-status-bar";
import Icons from "../../../constants/Icons";
import { useEffect, useState } from "react";
import likeAPI from "../../../api/likeAPI";
import ComponentFruit from "./Component/ComponentFruit";
import { useNavigation, useRoute } from "@react-navigation/native";

const filterData = (likeDatas)=>{
    return likeDatas.map((likeData)=>{  
        return likeData.Fruit
    })
}

export default function LikeFruits() {

    const navigation = useNavigation();
    
    const route = useRoute();
    
    const user = route.params.user;
    const [loading, setLoading] = useState(true);
    const [dataFruit, setDataFruit] = useState([]);

    useEffect(() => {
        if (!loading) return;

        const fetchData = async () => {
            try {
                var likeFruits = await likeAPI.getLikeFruit(user.id);
                setDataFruit(filterData(likeFruits))
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
            <StatusBar backgroundColor="#F7B787" barStyle="black"></StatusBar>
            <View style={styles.header}>
                <Image
                    source={Images.backgroundLikeFruit}
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
                        source={Icons.backLikeFruit}
                        style={{ width: 30, height: 30}}
                    />
                </TouchableOpacity>
                <View style={styles.logoHolder}>
                    <Image source={Icons.likeFruitIcon} style={styles.logo} />
                </View>
                <Text style={styles.headerTitle}>
                    Favorite fruits
                </Text>
            </View>
            <View style={styles.infoHolder}>
                {loading ? (
                    <View style={styles.notFound}>
                        <Image
                            source={Images.loading}
                            style={styles.iconNotFound}
                        />
                        <Text style={styles.textNotFound}>Loading data ...</Text>
                    </View>
                ) : 
                (
                    <View style={{width : "100%", height : "100%"}}>
                        <FlatList
                            style={styles.flatList}
                            contentContainerStyle={styles.flatListContainer}
                            data={dataFruit}
                            renderItem={({ item }) => (
                                <ComponentFruit data={item} user={user} keyProp={item.id} />
                            )}
                            keyExtractor={(eachEvent) => eachEvent.id.toString()}
                            scrollEnabled={true}
                        />
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
    },
    header: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderRadius: 30,
    },
    backgroundHeader: {
        width: "100%",
        height: 200,
        position: "absolute",
        top: 10,
    },
    logo: {
        height: 120,
        width: 120,
    },
    logoHolder: {
        marginTop: 110,
        borderRadius: 50,
        backgroundColor: "#EE7214",
        padding: 10,
    },
    headerTitle: {
        color: "#527853",
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 15,
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
});
