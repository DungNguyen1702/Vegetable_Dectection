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
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 1,
            "name": "Táo",
            "englishName": "Apple",
            "origin": "Quảng Bắc, Lào Cai",
            "taste": "Ngọt, chua nhẹ",
            "nutrition": "Vitamin C, K, B6; chất xơ",
            "color": "Đỏ, xanh, vàng",
            "season": "Thu",
            "medical": "Tăng sức đề kháng, giảm nguy cơ mắc bệnh tim",
            "star": 5,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Apple/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Apple/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Apple/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Apple/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 2,
            "name": "Chuối",
            "englishName": "Banana",
            "origin": "Đồng bằng sông Cửu Long",
            "taste": "Ngọt",
            "nutrition": "Vitamin C, B6; kali, magie",
            "color": "Vàng",
            "season": "Có sẵn quanh năm",
            "medical": "Cung cấp năng lượng, giảm căng thẳng",
            "star": 5,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Banana/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Banana/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Banana/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Banana/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 3,
            "name": "Đậu",
            "englishName": "Bean",
            "origin": "Nhiều vùng trên cả nước",
            "taste": "Ngọt, béo",
            "nutrition": "Protein, chất xơ, vitamin B",
            "color": "Xanh, vàng, đen",
            "season": "Mùa xuân, hạ",
            "medical": "Hỗ trợ tiêu hóa, cung cấp năng lượng",
            "star": 5,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bean/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bean/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bean/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bean/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 4,
            "name": "Mướp đắng",
            "englishName": "Bitter Gourd",
            "origin": "Miền Bắc, miền Trung",
            "taste": "Đắng",
            "nutrition": "Vitamin C, A; chất xơ",
            "color": "Xanh",
            "season": "Có sẵn quanh năm",
            "medical": "Giảm đường huyết, tăng sức đề kháng",
            "star": 5,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bitter_Gourd/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bitter_Gourd/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bitter_Gourd/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bitter_Gourd/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 5,
            "name": "Bầu",
            "englishName": "Bottle Gourd",
            "origin": "Đồng bằng sông Cửu Long",
            "taste": "Nhạt",
            "nutrition": "Vitamin C, B; chất xơ",
            "color": "Xanh",
            "season": "Có sẵn quanh năm",
            "medical": "Giảm cân, tốt cho hệ tiêu hóa",
            "star": 5,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bottle_Gourd/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bottle_Gourd/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bottle_Gourd/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Bottle_Gourd/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 6,
            "name": "Cà tím",
            "englishName": "Brinjal",
            "origin": "Miền Bắc",
            "taste": "Ngọt, thơm",
            "nutrition": "Folate, kali, vitamin C",
            "color": "Tím, trắng, đen",
            "season": "Xuân, hạ",
            "medical": "Hỗ trợ tiêu hóa, giảm nguy cơ bệnh tim",
            "star": 4.5,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 7,
            "name": "Súp lơ",
            "englishName": "Broccoli",
            "origin": "Đà Lạt",
            "taste": "Ngọt, cay nhẹ",
            "nutrition": "Vitamin C, K; chất xơ",
            "color": "Xanh",
            "season": "Mùa đông",
            "medical": "Chống ung thư, bảo vệ tim mạch",
            "star": 4.8,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Broccoli/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Broccoli/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Broccoli/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Broccoli/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 8,
            "name": "Bắp cải",
            "englishName": "Cabbage",
            "origin": "Đà Lạt",
            "taste": "Ngọt, giòn",
            "nutrition": "Vitamin C, K; chất xơ",
            "color": "Xanh",
            "season": "Có sẵn quanh năm",
            "medical": "Chống vi khuẩn, giảm cân",
            "star": 4.7,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cabbage/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cabbage/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cabbage/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cabbage/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 9,
            "name": "Ớt chuông",
            "englishName": "Capsicum",
            "origin": "Đồng bằng sông Cửu Long",
            "taste": "Ngọt, cay nhẹ",
            "nutrition": "Vitamin C, A; chất xơ",
            "color": "Đỏ, vàng, xanh",
            "season": "Có sẵn quanh năm",
            "medical": "Tăng cường hệ miễn dịch, chống oxy hóa",
            "star": 4.9,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Capsicum/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Capsicum/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Capsicum/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Capsicum/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 10,
            "name": "Cà rốt",
            "englishName": "Carrots",
            "origin": "Đà Lạt",
            "taste": "Ngọt",
            "nutrition": "Vitamin A, K; chất xơ",
            "color": "Đỏ, cam, vàng",
            "season": "Có sẵn quanh năm",
            "medical": "Bảo vệ thị lực, giảm nguy cơ ung thư",
            "star": 4.6,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Carrots/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Carrots/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Carrots/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Carrots/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 11,
            "name": "Bông cải",
            "englishName": "Cauliflower",
            "origin": "Đà Lạt",
            "taste": "Ngọt, giòn",
            "nutrition": "Vitamin C, K; chất xơ",
            "color": "Trắng",
            "season": "Mùa đông",
            "medical": "Giảm nguy cơ ung thư, cung cấp năng lượng",
            "star": 4.8,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cauliflower/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cauliflower/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cauliflower/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cauliflower/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 12,
            "name": "Ớt",
            "englishName": "Chilli",
            "origin": "Đồng bằng sông Cửu Long",
            "taste": "Cay",
            "nutrition": "Vitamin C, A; capsaicin",
            "color": "Đỏ, xanh",
            "season": "Có sẵn quanh năm",
            "medical": "Tăng cường tiêu hóa, giảm đau",
            "star": 4.7,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Chilli/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Chilli/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Chilli/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Chilli/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 13,
            "name": "Dừa",
            "englishName": "Coconut",
            "origin": "Miền Nam",
            "taste": "Ngọt",
            "nutrition": "Dầu, kali, mangan",
            "color": "Trắng, xanh",
            "season": "Có sẵn quanh năm",
            "medical": "Tốt cho tim mạch, da và tóc",
            "star": 4.9,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Coconut/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Coconut/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Coconut/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Coconut/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 14,
            "name": "Dưa leo",
            "englishName": "Cucumber",
            "origin": "Đồng bằng sông Cửu Long",
            "taste": "Nhạt",
            "nutrition": "Vitamin K, C; nước",
            "color": "Xanh",
            "season": "Có sẵn quanh năm",
            "medical": "Giảm căng thẳng, cung cấp nước cho cơ thể",
            "star": 4.5,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cucumber/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cucumber/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cucumber/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Cucumber/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 15,
            "name": "Mãng cầu",
            "englishName": "Custard Apple",
            "origin": "Miền Nam",
            "taste": "Ngọt",
            "nutrition": "Vitamin C, B; kali",
            "color": "Xanh, nâu",
            "season": "Có sẵn quanh năm",
            "medical": "Tăng sức đề kháng, giảm mệt mỏi",
            "star": 4.8,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Custard_Apple/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Custard_Apple/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Custard_Apple/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Custard_Apple/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 16,
            "name": "Chà là",
            "englishName": "Dates",
            "origin": "Miền Trung, Miền Nam",
            "taste": "Ngọt",
            "nutrition": "Vitamin B, kali, magie",
            "color": "Nâu",
            "season": "Mùa đông",
            "medical": "Tăng cường năng lượng, tốt cho hệ tiêu hóa",
            "star": 4.7,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dates/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dates/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dates/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dates/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 17,
            "name": "Thanh long",
            "englishName": "Dragon Fruit",
            "origin": "Miền Nam",
            "taste": "Ngọt, giòn",
            "nutrition": "Vitamin C, B; chất xơ",
            "color": "Hồng, xanh",
            "season": "Có sẵn quanh năm",
            "medical": "Bảo vệ tế bào, giảm nguy cơ tiểu đường",
            "star": 4.8,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dragon_Fruit/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dragon_Fruit/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dragon_Fruit/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Dragon_Fruit/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 18,
            "name": "Trứng",
            "englishName": "Egg",
            "origin": "Toàn quốc",
            "taste": "Ngọt, béo",
            "nutrition": "Protein, vitamin B, D",
            "color": "Trắng, vàng",
            "season": "Có sẵn quanh năm",
            "medical": "Xây dựng cơ bắp, tăng cường não bộ",
            "star": 4.6,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Egg/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Egg/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Egg/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Egg/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 19,
            "name": "Tỏi",
            "englishName": "Garlic",
            "origin": "Miền Bắc, Miền Trung",
            "taste": "Cay, thơm",
            "nutrition": "Vitamin C, B6; khoáng chất",
            "color": "Trắng",
            "season": "Có sẵn quanh năm",
            "medical": "Kháng khuẩn, giảm mỡ máu",
            "star": 4.9,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Garlic/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Garlic/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Garlic/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Garlic/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 20,
            "name": "Nho",
            "englishName": "Grape",
            "origin": "Ninh Thuận, Lâm Đồng",
            "taste": "Ngọt",
            "nutrition": "Vitamin C, K; chất xơ",
            "color": "Xanh, đỏ, đen",
            "season": "Mùa hè",
            "medical": "Bảo vệ tim mạch, chống oxi hóa",
            "star": 4.7,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Grape/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Grape/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Grape/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Grape/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 21,
            "name": "Chanh xanh",
            "englishName": "Green Lemon",
            "origin": "Đồng Nai, Vũng Tàu",
            "taste": "Chua",
            "nutrition": "Vitamin C, B; chất xơ",
            "color": "Xanh",
            "season": "Có sẵn quanh năm",
            "medical": "Giảm cân, tăng cường hệ miễn dịch",
            "star": 4.5,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Green_Lemon/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Green_Lemon/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Green_Lemon/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Green_Lemon/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 22,
            "name": "Mít",
            "englishName": "Jackfruit",
            "origin": "Miền Nam",
            "taste": "Ngọt, thơm",
            "nutrition": "Vitamin C, B; kali",
            "color": "Vàng",
            "season": "Có sẵn quanh năm",
            "medical": "Tăng cường năng lượng, giảm căng thẳng",
            "star": 4.7,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Jackfruit/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Jackfruit/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Jackfruit/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Jackfruit/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 23,
            "name": "Kiwi",
            "englishName": "Kiwi",
            "origin": "Đà Lạt",
            "taste": "Chua ngọt",
            "nutrition": "Vitamin C, K; chất xơ",
            "color": "Xanh, nâu",
            "season": "Mùa hè",
            "medical": "Bảo vệ tim mạch, tăng cường hệ miễn dịch",
            "star": 4.6,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Kiwi/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Kiwi/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Kiwi/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Kiwi/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 24,
            "name": "Xoài",
            "englishName": "Mango",
            "origin": "Miền Nam Việt Nam",
            "taste": "Ngọt, có loại hơi chua",
            "nutrition": "Chứa nhiều vitamin C, A, kali",
            "color": "Thay đổi tùy loại, thường là vàng hoặc cam",
            "season": "Xuất hiện chủ yếu vào mùa hè",
            "medical": "Có thể hỗ trợ sức khỏe tim mạch và tăng cường hệ miễn dịch",
            "star": 4.9,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Mango/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Mango/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Mango/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Mango/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 25,
            "name": "Đậu bắp",
            "englishName": "Okra",
            "origin": "Trồng rộng rãi ở nhiều vùng có khí hậu ấm áp",
            "taste": "Nhẹ, ngọt",
            "nutrition": "Chất xơ, vitamin C, K, và folate",
            "color": "Xanh",
            "season": "Có sẵn quanh năm",
            "medical": "Chứa nhiều chất chống ô nhiễm và có thể hỗ trợ kiểm soát đường huyết",
            "star": 4.6,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Okra/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Okra/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Okra/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Okra/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 26,
            "name": "Hành tây",
            "englishName": "Onion",
            "origin": "Trồng ở khắp mọi nơi",
            "taste": "Cay, có thể ngọt khi chín",
            "nutrition": "Nhiều vitamin C, chất xơ",
            "color": "Trắng, đỏ, vàng",
            "season": "Có sẵn quanh năm",
            "medical": "Có thể giảm nguy cơ bệnh tim và các bệnh ung thư",
            "star": 4.8,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Onion/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Onion/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Onion/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Onion/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 27,
            "name": "Cam",
            "englishName": "Orange",
            "origin": "Miền Bắc và miền Trung Việt Nam",
            "taste": "Ngọt, chua nhẹ",
            "nutrition": "Cao vitamin C, A, kali",
            "color": "Cam",
            "season": "Xuất hiện chủ yếu vào mùa đông",
            "medical": "Tăng cường hệ miễn dịch và duy trì sức khỏe của da",
            "star": 4.7,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Orange/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Orange/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Orange/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Orange/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 28,
            "name": "Dưa lưới",
            "englishName": "Papaya",
            "origin": "Miền Nam Việt Nam",
            "taste": "Ngọt, chua nhẹ",
            "nutrition": "Cao vitamin C, A, enzyme papain",
            "color": "Cam, vàng",
            "season": "Có sẵn quanh năm",
            "medical": "Hỗ trợ tiêu hóa và chứa enzyme có lợi cho dạ dày",
            "star": 4.9,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Papaya/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Papaya/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Papaya/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Papaya/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 29,
            "name": "Lạc",
            "englishName": "Peanut",
            "origin": "Trồng rộng rãi ở nhiều vùng",
            "taste": "Ngọt, béo",
            "nutrition": "Chất béo tốt, protein, vitamin E",
            "color": "Nâu",
            "season": "Có sẵn quanh năm",
            "medical": "Cung cấp năng lượng, hỗ trợ sức khỏe tim mạch",
            "star": 4.5,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Peanut/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Peanut/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Peanut/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Peanut/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 30,
            "name": "Dứa",
            "englishName": "Pineapple",
            "origin": "Miền Nam Việt Nam",
            "taste": "Ngọt, có thể chua nhẹ",
            "nutrition": "Cao vitamin C, mangan, chất xơ",
            "color": "Vàng, xanh",
            "season": "Có sẵn quanh năm",
            "medical": "Có chứa enzyme bromelain có thể giúp tiêu hóa",
            "star": 4.7,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Pineapple/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Pineapple/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Pineapple/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Pineapple/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 31,
            "name": "Lựu",
            "englishName": "Pomegranate",
            "origin": "Miền Bắc Việt Nam",
            "taste": "Ngọt, chua",
            "nutrition": "Cao vitamin C, K, chất chống oxy hóa",
            "color": "Đỏ, hồng",
            "season": "Thường xuất hiện vào mùa thu",
            "medical": "Có chứa chất chống oxy hóa mạnh mẽ",
            "star": 4.8,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Pomegranate/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Pomegranate/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Pomegranate/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Pomegranate/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 32,
            "name": "Khoai tây",
            "englishName": "Potato",
            "origin": "Trồng rộng rãi ở nhiều vùng",
            "taste": "Ngọt, béo",
            "nutrition": "Nhiều carbohydrate, vitamin C, B6",
            "color": "Nâu, trắng, vàng",
            "season": "Có sẵn quanh năm",
            "medical": "Nguồn tốt của vitamin C và kali",
            "star": 4.6,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Potato/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Potato/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Potato/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Potato/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 33,
            "name": "Bí ngô",
            "englishName": "Pumpkin",
            "origin": "Trồng ở nhiều vùng, đặc biệt là vào mùa thu",
            "taste": "Ngọt, thơm",
            "nutrition": "Cao vitamin A, C, kali",
            "color": "Cam",
            "season": "Thường xuất hiện vào mùa thu",
            "medical": "Chứa nhiều chất chống oxy hóa, hỗ trợ sức khỏe của mắt",
            "star": 4.7,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Pumpkin/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Pumpkin/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Pumpkin/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Pumpkin/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 34,
            "name": "Củ cải",
            "englishName": "Radish",
            "origin": "Trồng rộng rãi ở nhiều vùng",
            "taste": "Có thể cay, giòn",
            "nutrition": "Nhiều vitamin C, chất xơ",
            "color": "Đỏ, trắng",
            "season": "Có sẵn quanh năm",
            "medical": "Cung cấp chất chống ô nhiễm và hỗ trợ tiêu hóa",
            "star": 4.6,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Radish/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Radish/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Radish/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Radish/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 35,
            "name": "Khế",
            "englishName": "Star Fruit",
            "origin": "Miền Nam Việt Nam, đặc biệt là các tỉnh như Bến Tre, Vĩnh Long",
            "taste": "Giữa chua và ngọt, có thể hơi chua",
            "nutrition": "Cao vitamin C, chất xơ",
            "color": "Vàng khi chín",
            "season": "Xuất hiện quanh năm",
            "medical": "Có thể hỗ trợ tiêu hóa và giảm cảm giác căng thẳng",
            "star": 4.8,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Star_Fruit/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Star_Fruit/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Star_Fruit/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Star_Fruit/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 36,
            "name": "Dâu",
            "englishName": "Strawberry",
            "origin": "Trồng rộng rãi ở nhiều vùng có khí hậu ôn đới",
            "taste": "Ngọt, có thể hơi chua",
            "nutrition": "Cao vitamin C, mangan, chất xơ",
            "color": "Đỏ",
            "season": "Xuất hiện chủ yếu vào mùa xuân và mùa hè",
            "medical": "Có chứa nhiều chất chống ô nhiễm và chất chống ung thư",
            "star": 4.9,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Strawberry/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Strawberry/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Strawberry/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Strawberry/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 37,
            "name": "Khoai lang",
            "englishName": "Sweet Potato",
            "origin": "Trồng rộng rãi ở nhiều vùng",
            "taste": "Ngọt, béo",
            "nutrition": "Cao vitamin A, C, chất xơ",
            "color": "Cam, tím",
            "season": "Có sẵn quanh năm",
            "medical": "Tốt cho sức khỏe tim mạch và kiểm soát đường huyết",
            "star": 4.8,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Sweet_Potato/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Sweet_Potato/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Sweet_Potato/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Sweet_Potato/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 38,
            "name": "Cà chua",
            "englishName": "Tomato",
            "origin": "Trồng rộng rãi ở nhiều vùng",
            "taste": "Ngọt, có thể chua tùy loại",
            "nutrition": "Cao vitamin C, A, kali, chất xơ",
            "color": "Đỏ",
            "season": "Có sẵn quanh năm",
            "medical": "Chứa lycopene, có thể giảm nguy cơ một số bệnh ung thư",
            "star": 4.7,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Tomato/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Tomato/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Tomato/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Tomato/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 39,
            "name": "Dưa hấu",
            "englishName": "Watermelon",
            "origin": "Miền Nam Việt Nam",
            "taste": "Ngọt, mát",
            "nutrition": "Cao vitamin A, C, kali",
            "color": "Đỏ, hồng",
            "season": "Xuất hiện chủ yếu vào mùa hè",
            "medical": "Mát gan, cung cấp nước và khoáng chất",
            "star": 4.9,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Watermelon/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Watermelon/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Watermelon/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Watermelon/1.jpg"
                }
            ]
        },
        {
            "updatedAt": "2023-11-28 17:24:42",
            "createdAt": "2023-11-28 17:24:42",
            "id": 40,
            "name": "Nấm trắng",
            "englishName": "White Mushroom",
            "origin": "Trồng rộng rãi, có thể thấy trong nhiều vùng",
            "taste": "Nhẹ, thơm",
            "nutrition": "Cao protein, chất xơ, vitamin D",
            "color": "Trắng",
            "season": "Có sẵn quanh năm",
            "medical": "Tăng cường hệ miễn dịch và hỗ trợ sức khỏe xương",
            "star": 4.8,
            "FruitImages": [
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/White_Mushroom/4.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/White_Mushroom/3.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/White_Mushroom/2.jpg"
                },
                {
                    "image": "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/White_Mushroom/1.jpg"
                }
            ]
        }
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
