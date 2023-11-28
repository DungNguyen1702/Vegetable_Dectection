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
import { useEffect } from "react";
import Component from "./Component";
import fruitAPI from "../../../api/fruitAPI";

export default function HomePage() {
    var dataFruit = [
        {
            updatedAt: "2023-11-16 10:19:56",
            createdAt: "2023-11-16 10:19:56",
            id: 1,
            name: "Táo",
            englishName: "Apple",
            origin: "Quảng Bắc, Lào Cai",
            taste: "Ngọt, chua nhẹ",
            nutrition: "Vitamin C, K, B6; chất xơ",
            color: "Đỏ, xanh, vàng",
            season: "Thu",
            medical: "Tăng sức đề kháng, giảm nguy cơ mắc bệnh tim",
            star: 5,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Apple/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Apple/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Apple/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Apple/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-16 10:19:56",
            createdAt: "2023-11-16 10:19:56",
            id: 2,
            name: "Chuối",
            englishName: "Banana",
            origin: "Đồng bằng sông Cửu Long",
            taste: "Ngọt",
            nutrition: "Vitamin C, B6; kali, magie",
            color: "Vàng",
            season: "Có sẵn quanh năm",
            medical: "Cung cấp năng lượng, giảm căng thẳng",
            star: 5,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Banana/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Banana/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Banana/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Banana/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-16 10:19:56",
            createdAt: "2023-11-16 10:19:56",
            id: 3,
            name: "Đậu",
            englishName: "Bean",
            origin: "Nhiều vùng trên cả nước",
            taste: "Ngọt, béo",
            nutrition: "Protein, chất xơ, vitamin B",
            color: "Xanh, vàng, đen",
            season: "Mùa xuân, hạ",
            medical: "Hỗ trợ tiêu hóa, cung cấp năng lượng",
            star: 5,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bean/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bean/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bean/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bean/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-16 10:19:56",
            createdAt: "2023-11-16 10:19:56",
            id: 4,
            name: "Mướp đắng",
            englishName: "Bitter Gourd",
            origin: "Miền Bắc, miền Trung",
            taste: "Đắng",
            nutrition: "Vitamin C, A; chất xơ",
            color: "Xanh",
            season: "Có sẵn quanh năm",
            medical: "Giảm đường huyết, tăng sức đề kháng",
            star: 5,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bitter Gourd/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bitter Gourd/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bitter Gourd/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bitter Gourd/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-16 10:19:56",
            createdAt: "2023-11-16 10:19:56",
            id: 5,
            name: "Bầu",
            englishName: "Bottle Gourd",
            origin: "Đồng bằng sông Cửu Long",
            taste: "Nhạt",
            nutrition: "Vitamin C, B; chất xơ",
            color: "Xanh",
            season: "Có sẵn quanh năm",
            medical: "Giảm cân, tốt cho hệ tiêu hóa",
            star: 5,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bottle Gourd/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bottle Gourd/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bottle Gourd/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bottle Gourd/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-16 10:19:56",
            createdAt: "2023-11-16 10:19:56",
            id: 6,
            name: "Cà tím",
            englishName: "Brinjal",
            origin: "Miền Bắc",
            taste: "Ngọt, thơm",
            nutrition: "Folate, kali, vitamin C",
            color: "Tím, trắng, đen",
            season: "Xuân, hạ",
            medical: "Hỗ trợ tiêu hóa, giảm nguy cơ bệnh tim",
            star: 4.5,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/1.jpg",
                },
            ],
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(2)
                var allFruit = await fruitAPI.allFruit();
                console.log(allFruit)
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    },[]);
    
    
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
                {dataFruit.length > 0 ? (
                    <FlatList
                        style={styles.flatList}
                        contentContainerStyle={styles.flatListContainer}
                        data={dataFruit}
                        renderItem={({ item }) => (
                            <Component data={item} key={item.id} />
                        )}
                        keyExtractor={(eachEvent) => eachEvent.id}
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
        marginBottom: 134,
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
