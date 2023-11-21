import { useEffect } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import Stars from "./stars"

export default function Component({data})
{
    return (
    <View style = {styles.container}>
        <View style = {styles.imageField}>
            <Image source={{uri : data.FruitImages[0].image + ""}} style = {styles.image} ></Image>
            <Stars starNum={data.star}></Stars>
        </View>
        <View style = {styles.infoContainer}>
            <Text style = {styles.title}>{data.name}</Text>
            <View style = {styles.fruitInfo}>
                <View style = {styles.detail}>
                    <Text style = {styles.detailTitle}>Mùa</Text>
                    <Text style = {styles.detailData}>{data.season}</Text>
                </View>
                <View style = {styles.detail}>
                    <Text style = {styles.detailTitle}>Màu sắc</Text>
                    <Text style = {styles.detailData}>{data.color}</Text>
                </View>
                <View style = {styles.detail}>
                    <Text style = {styles.detailTitle}>Xuất xứ</Text>
                    <Text style = {styles.detailData}>{data.origin}</Text>
                </View>
                <View style = {styles.detail}>
                    <Text style = {styles.detailTitle}>Vị</Text>
                    <Text style = {styles.detailData}>{data.taste}</Text>
                </View>
                
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "90%",
        flexDirection : "row",
        justifyContent : 'space-around',
        alignItems : "center",
        backgroundColor : "#A5EE9F",
        paddingVertical : 25,
        borderRadius : 20,
        marginVertical : 10,
    },
    image : {
        height : 100,
        width : 100,
        borderRadius : 20,
        marginBottom : 10,
    },
    infoContainer : {
        flexDirection : "column",
        width : "60%"
    },
    imageField : {
        flexDirection : "column",
        justifyContent : "space-between",
        alignItems : 'center',
    },
    title : {
        fontSize : 25,
        fontWeight : "bold",
        color : "#8B008B",
        textAlign : "center",
        marginBottom : 10,
    },
    fruitInfo : {
        flexDirection : "column"
    },
    detail : {
        justifyContent : "space-around",
        alignItems : "center",
        flexDirection : "row",
        marginVertical : 4,
    },
    detailTitle : {
        fontWeight : "bold",
        width : "35%",
        overflow : "scroll",
        color : "blue",
        fontSize : 12,
    },
    detailData : {
        width : "60%",
        overflow : "scroll",
        fontSize : 12,
    }
})