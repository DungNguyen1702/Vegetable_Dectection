import {
    StatusBar,
    StyleSheet,
    View,
    Text,
    TextInput,
    FlatList,
    Image,
} from "react-native";
import Header from "../../../components/header/header";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useEffect, useState } from "react";
import Component from "./Component";
import fruitAPI from "../../../api/fruitAPI";
import { connect } from "react-redux";
import likeAPI from "../../../api/likeAPI";
import Images from "../../../constants/Image"

const mapStateToProps = (state) => ({
    user: state.user,
});

const filterLikeFruit = (dataFruit, likeFruit) => {
    return dataFruit.map((fruit) => {
        fruit.statusLike = false;

        likeFruit && likeFruit.forEach((like) => {
            if (fruit.id === like.fruit_id) { // Assuming the ID property of fruit is 'id'
                fruit.statusLike = true;
            }
        });

        return fruit;
    });
};

const HomePage = ({ user }) => {
    const [dataFruit, setDataFruit] = useState([]);
    const [likeFruit, setLikeFruit] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [likeDataLoaded, setLikeDataLoaded] = useState(false);

    useEffect(()=>{
        if(!likeDataLoaded)
        {
            const api = async()=>{
                setLikeFruit(await likeAPI.getLikeFruit(user.id))
                setLikeDataLoaded(true);
            }
            api();
        }
    },[loading])

    useEffect(() => {
        if (!likeDataLoaded) {
            return; // Chưa có dữ liệu từ cả hai nguồn
        }
    
        const fetchData = async () => {
            try {
                var allFruit = await fruitAPI.allFruit(search).then(result =>{
                    console.log(result)
                });
                setDataFruit(filterLikeFruit(allFruit.data.rows, likeFruit));
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, [likeDataLoaded, search]);

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
                    placeholder="Input fruit's name"
                    onChange={(event) => setSearch(event.nativeEvent.text)}
                />
            </View>
            <View style = {{width : "100%"}}>
                {/* List fruits */}
                {loading ?
                (
                    <View style={styles.notFound}>
                        <Image
                            source = {Images.loading}
                            style ={styles.iconNotFound}
                        />
                        <Text style={styles.textNotFound}>Loading data</Text>
                    </View>
                ) :
                (
                    <FlatList
                        style={styles.flatList}
                        contentContainerStyle={styles.flatListContainer}
                        data={dataFruit}
                        renderItem={({ item }) => (
                            <Component data={item} user={user} keyProp={item.id} />
                        )}
                        keyExtractor={(eachEvent) => eachEvent.id.toString()}
                        scrollEnabled={true}
                    />
                )} 
            </View>
        </View>
    );
};

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
        width : "100%",
        height : "100%",
        alignItems: "center",
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
});

export default connect(mapStateToProps)(HomePage);
