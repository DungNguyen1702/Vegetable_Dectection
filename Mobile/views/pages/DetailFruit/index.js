import { useRoute } from "@react-navigation/native";
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import ImageSlider from "./Component/ImageSlider";
import { useEffect, useState } from "react";
import fruitAPI from "../../../api/fruitAPI";
import Header from "../../../components/header/header";
import InfoView from "./Component/InfoView";
import DishView from "./Component/DishView";
import Spinner from 'react-native-loading-spinner-overlay';

import Support from "./Component/Support"

export default function DetailFruit() {
    const route = useRoute();
    const { id } = route.params;
    const [loading, setLoading] = useState(true);
    // const id = 7;

    // const props = {
    //     updatedAt: "2023-11-28 17:24:42",
    //     createdAt: "2023-11-28 17:24:42",
    //     id: 6,
    //     name: "Cà tím",
    //     englishName: "Brinjal",
    //     origin: "Miền Bắc",
    //     taste: "Ngọt, thơm",
    //     nutrition: "Folate, kali, vitamin C",
    //     color: "Tím, trắng, đen",
    //     season: "Xuân, hạ",
    //     medical: "Hỗ trợ tiêu hóa, giảm nguy cơ bệnh tim",
    //     star: 4.5,
    //     FruitImages: [
    //         {
    //             image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/1.jpg",
    //         },
    //         {
    //             image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/2.jpg",
    //         },
    //         {
    //             image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/3.jpg",
    //         },
    //         {
    //             image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/4.jpg",
    //         },
    //     ],
    //     Dishes: [
    //         {
    //             createdAt: "2023-11-28 17:24:43",
    //             id: 18,
    //             name: "Cà Tím Xào Tỏi Giòn",
    //             ingredients:
    //                 "\n              -Cà tím cắt vuông\n              -Tỏi phi thơm\n              -Dầu ăn\n              -Gia vị: Muối, tiêu\n            ",
    //             nutrition:
    //                 "\n              -Cà tím chứa chất chống ô nhiễm và vitamin C\n              -Tỏi có tác dụng chống vi khuẩn và hỗ trợ hệ tiêu hóa\n            ",
    //             fruit_id: 6,
    //             updatedAt: "2023-11-28T17:24:43.000Z",
    //             DishImages: [
    //                 {
    //                     image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/DishImages/Brinjal\\Dish3\\1.jpg",
    //                 },
    //             ],
    //         },
    //         {
    //             createdAt: "2023-11-28 17:24:43",
    //             id: 17,
    //             name: "Cà tím cắt lát",
    //             ingredients:
    //                 "\n              -Mỡ hành\n              -Gia vị: Muối, tiêu\n            ",
    //             nutrition:
    //                 "\n              -Cà tím giàu chất chống ô nhiễm và vitamin A\n              -Mỡ hành có thể giúp tăng hương vị và chất dinh dưỡng\n            ",
    //             fruit_id: 6,
    //             updatedAt: "2023-11-28T17:24:43.000Z",
    //             DishImages: [
    //                 {
    //                     image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/DishImages/Brinjal\\Dish2\\1.jpg",
    //                 },
    //             ],
    //         },
    //         {
    //             createdAt: "2023-11-28 17:24:43",
    //             id: 16,
    //             name: "Cà Tím Xào Thịt Bò",
    //             ingredients:
    //                 "\n              -Cà tím cắt dài\n              -Thịt bò xào\n              -Ớt, tỏi, tiêu\n              -Gia vị: Nước tương, dầu ăn\n            ",
    //             nutrition:
    //                 "\n              -Cà tím chứa nhiều chất chống ô nhiễm và vitamin C\n              -Thịt bò cung cấp protein, sắt, zinc\n            ",
    //             fruit_id: 6,
    //             updatedAt: "2023-11-28T17:24:43.000Z",
    //             DishImages: [
    //                 {
    //                     image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/DishImages/Brinjal\\Dish1\\1.jpg",
    //                 },
    //             ],
    //         },
    //     ],
    //     FeedBacks: [],
    // };

    const [props, setProps] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                var fruitById = await fruitAPI.getFruitById(id);
                setProps(fruitById.data);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if(loading)
    {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="#5AA162" />
                <Header />
                <Spinner
                    visible={loading}
                    textContent={'Đang tải dữ liệu'}
                    textStyle={styles.spinnerText}
                />
            </View>
        )
    }

    var imageArray = [];

    if (props.FruitImages) {
        imageArray = Support.ImageProccess(props.FruitImages);
    }

    // Chờ dữ liệu được lấy về trước khi render giao diện
    

    // console.log(props.Dishes)

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#5AA162" />
            <Header />
            <ScrollView>
                <Text style = {styles.fruit_name}>{props.name}</Text>
                <ImageSlider images={imageArray} />
                <InfoView data = {props}/>
                <DishView data = {props.Dishes}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor : "#5AA162",
    },
    fruit_name : {
        backgroundColor : "#00FFD1",
        color : "#8B008B",
        fontSize : 30,
        textAlign : "center",
        fontWeight : "bold",
        marginHorizontal : 50,
        marginVertical : 10,
        borderRadius : 30,
        paddingVertical : 4
    },
    spinnerText :{
        color : "white"
    }
});
