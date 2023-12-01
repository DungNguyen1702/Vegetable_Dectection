import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

export default function ImageSlider(props){
    const {images} = props 

    if(images.length == 0)
    {
        return null
    }

    return (
        <Swiper
            style={styles.wrapper}
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={2.5} // Thời gian giữa các hình ảnh
        >
            {images.map((url, index) => (
                <View key={index} style={styles.slide}>
                    <View style = {styles.whiteBackground}></View>
                    <Image source={{ uri: url }} style={styles.image} />
                </View>
            ))}
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper : {
        justifyContent : "center",
        alignItems : "left",
        height : 240,
        marginTop : 10,
    },
    slide: {
        justifyContent: "center",
        alignItems : "center",
        marginHorizontal : 10,
    },
    image: {
        width: 350,
        height: 225,
        resizeMode: "cover",
        borderRadius : 20,
        alignItems: "center", 
    },
    whiteBackground : {
        position : "absolute",
        height : 225,
        width : 350,
        backgroundColor : 'rgba(255, 255, 255, 0.4)',
        zIndex : 1000,
        borderRadius : 20,
        alignItems: "center", 
    },
});