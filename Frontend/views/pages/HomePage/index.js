import { StatusBar, StyleSheet, View, Text, TextInput } from "react-native";
import Header from "../../../components/header/header";
import FeatherIcon from "react-native-vector-icons/Feather";
import * as React from "react";
import Component from "./Component";

export default function HomePage() {
    const dataFruit = [
        {
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
    ];
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
                <Component data = {dataFruit[0]} />
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
});
