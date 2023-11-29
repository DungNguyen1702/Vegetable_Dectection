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
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
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
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
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
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
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
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bitter_Gourd/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bitter_Gourd/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bitter_Gourd/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bitter_Gourd/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
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
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bottle_Gourd/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bottle_Gourd/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bottle_Gourd/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bottle_Gourd/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
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
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 7,
            name: "Súp lơ",
            englishName: "Broccoli",
            origin: "Đà Lạt",
            taste: "Ngọt, cay nhẹ",
            nutrition: "Vitamin C, K; chất xơ",
            color: "Xanh",
            season: "Mùa đông",
            medical: "Chống ung thư, bảo vệ tim mạch",
            star: 4.8,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Broccoli/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Broccoli/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Broccoli/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Broccoli/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 8,
            name: "Bắp cải",
            englishName: "Cabbage",
            origin: "Đà Lạt",
            taste: "Ngọt, giòn",
            nutrition: "Vitamin C, K; chất xơ",
            color: "Xanh",
            season: "Có sẵn quanh năm",
            medical: "Chống vi khuẩn, giảm cân",
            star: 4.7,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cabbage/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cabbage/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cabbage/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cabbage/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 9,
            name: "Ớt chuông",
            englishName: "Capsicum",
            origin: "Đồng bằng sông Cửu Long",
            taste: "Ngọt, cay nhẹ",
            nutrition: "Vitamin C, A; chất xơ",
            color: "Đỏ, vàng, xanh",
            season: "Có sẵn quanh năm",
            medical: "Tăng cường hệ miễn dịch, chống oxy hóa",
            star: 4.9,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Capsicum/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Capsicum/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Capsicum/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Capsicum/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 10,
            name: "Cà rốt",
            englishName: "Carrots",
            origin: "Đà Lạt",
            taste: "Ngọt",
            nutrition: "Vitamin A, K; chất xơ",
            color: "Đỏ, cam, vàng",
            season: "Có sẵn quanh năm",
            medical: "Bảo vệ thị lực, giảm nguy cơ ung thư",
            star: 4.6,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Carrots/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Carrots/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Carrots/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Carrots/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 11,
            name: "Bông cải",
            englishName: "Cauliflower",
            origin: "Đà Lạt",
            taste: "Ngọt, giòn",
            nutrition: "Vitamin C, K; chất xơ",
            color: "Trắng",
            season: "Mùa đông",
            medical: "Giảm nguy cơ ung thư, cung cấp năng lượng",
            star: 4.8,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cauliflower/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cauliflower/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cauliflower/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cauliflower/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 12,
            name: "Ớt",
            englishName: "Chilli",
            origin: "Đồng bằng sông Cửu Long",
            taste: "Cay",
            nutrition: "Vitamin C, A; capsaicin",
            color: "Đỏ, xanh",
            season: "Có sẵn quanh năm",
            medical: "Tăng cường tiêu hóa, giảm đau",
            star: 4.7,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Chilli/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Chilli/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Chilli/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Chilli/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 13,
            name: "Dừa",
            englishName: "Coconut",
            origin: "Miền Nam",
            taste: "Ngọt",
            nutrition: "Dầu, kali, mangan",
            color: "Trắng, xanh",
            season: "Có sẵn quanh năm",
            medical: "Tốt cho tim mạch, da và tóc",
            star: 4.9,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Coconut/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Coconut/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Coconut/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Coconut/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 14,
            name: "Dưa leo",
            englishName: "Cucumber",
            origin: "Đồng bằng sông Cửu Long",
            taste: "Nhạt",
            nutrition: "Vitamin K, C; nước",
            color: "Xanh",
            season: "Có sẵn quanh năm",
            medical: "Giảm căng thẳng, cung cấp nước cho cơ thể",
            star: 4.5,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cucumber/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cucumber/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cucumber/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cucumber/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 15,
            name: "Mãng cầu",
            englishName: "Custard Apple",
            origin: "Miền Nam",
            taste: "Ngọt",
            nutrition: "Vitamin C, B; kali",
            color: "Xanh, nâu",
            season: "Có sẵn quanh năm",
            medical: "Tăng sức đề kháng, giảm mệt mỏi",
            star: 4.8,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Custard_Apple/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Custard_Apple/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Custard_Apple/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Custard_Apple/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 16,
            name: "Chà là",
            englishName: "Dates",
            origin: "Miền Trung, Miền Nam",
            taste: "Ngọt",
            nutrition: "Vitamin B, kali, magie",
            color: "Nâu",
            season: "Mùa đông",
            medical: "Tăng cường năng lượng, tốt cho hệ tiêu hóa",
            star: 4.7,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dates/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dates/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dates/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dates/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 17,
            name: "Thanh long",
            englishName: "Dragon Fruit",
            origin: "Miền Nam",
            taste: "Ngọt, giòn",
            nutrition: "Vitamin C, B; chất xơ",
            color: "Hồng, xanh",
            season: "Có sẵn quanh năm",
            medical: "Bảo vệ tế bào, giảm nguy cơ tiểu đường",
            star: 4.8,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dragon_Fruit/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dragon_Fruit/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dragon_Fruit/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dragon_Fruit/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 18,
            name: "Trứng",
            englishName: "Egg",
            origin: "Toàn quốc",
            taste: "Ngọt, béo",
            nutrition: "Protein, vitamin B, D",
            color: "Trắng, vàng",
            season: "Có sẵn quanh năm",
            medical: "Xây dựng cơ bắp, tăng cường não bộ",
            star: 4.6,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Egg/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Egg/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Egg/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Egg/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 19,
            name: "Tỏi",
            englishName: "Garlic",
            origin: "Miền Bắc, Miền Trung",
            taste: "Cay, thơm",
            nutrition: "Vitamin C, B6; khoáng chất",
            color: "Trắng",
            season: "Có sẵn quanh năm",
            medical: "Kháng khuẩn, giảm mỡ máu",
            star: 4.9,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Garlic/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Garlic/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Garlic/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Garlic/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 20,
            name: "Nho",
            englishName: "Grape",
            origin: "Ninh Thuận, Lâm Đồng",
            taste: "Ngọt",
            nutrition: "Vitamin C, K; chất xơ",
            color: "Xanh, đỏ, đen",
            season: "Mùa hè",
            medical: "Bảo vệ tim mạch, chống oxi hóa",
            star: 4.7,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Grape/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Grape/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Grape/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Grape/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 21,
            name: "Chanh xanh",
            englishName: "Green Lemon",
            origin: "Đồng Nai, Vũng Tàu",
            taste: "Chua",
            nutrition: "Vitamin C, B; chất xơ",
            color: "Xanh",
            season: "Có sẵn quanh năm",
            medical: "Giảm cân, tăng cường hệ miễn dịch",
            star: 4.5,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Green_Lemon/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Green_Lemon/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Green_Lemon/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Green_Lemon/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 22,
            name: "Mít",
            englishName: "Jackfruit",
            origin: "Miền Nam",
            taste: "Ngọt, thơm",
            nutrition: "Vitamin C, B; kali",
            color: "Vàng",
            season: "Có sẵn quanh năm",
            medical: "Tăng cường năng lượng, giảm căng thẳng",
            star: 4.7,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Jackfruit/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Jackfruit/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Jackfruit/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Jackfruit/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 23,
            name: "Kiwi",
            englishName: "Kiwi",
            origin: "Đà Lạt",
            taste: "Chua ngọt",
            nutrition: "Vitamin C, K; chất xơ",
            color: "Xanh, nâu",
            season: "Mùa hè",
            medical: "Bảo vệ tim mạch, tăng cường hệ miễn dịch",
            star: 4.6,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Kiwi/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Kiwi/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Kiwi/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Kiwi/1.jpg",
                },
            ],
        },
        {
            updatedAt: "2023-11-28 17:24:42",
            createdAt: "2023-11-28 17:24:42",
            id: 24,
            name: "Xoài",
            englishName: "Mango",
            origin: "Miền Nam Việt Nam",
            taste: "Ngọt, có loại hơi chua",
            nutrition: "Chứa nhiều vitamin C, A, kali",
            color: "Thay đổi tùy loại, thường là vàng hoặc cam",
            season: "Xuất hiện chủ yếu vào mùa hè",
            medical:
                "Có thể hỗ trợ sức khỏe tim mạch và tăng cường hệ miễn dịch",
            star: 4.9,
            FruitImages: [
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Mango/4.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Mango/3.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Mango/2.jpg",
                },
                {
                    image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Mango/1.jpg",
                },
            ],
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(4)
                var allFruit = await fruitAPI.allFruit();
                console.log(allFruit);
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
                {dataFruit.length > 0 ? (
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
