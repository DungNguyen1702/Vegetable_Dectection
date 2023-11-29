import { useRoute } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const ImageSlider = () => {
    const images = [
        "https://be-vegetable-dectection-mobile-9s6n.onrender.com/public/Test/Apple/1.jpg",
        "https://be-vegetable-dectection-mobile-9s6n.onrender.com/public/Test/Apple/2.jpg",
        "https://be-vegetable-dectection-mobile-9s6n.onrender.com/public/Test/Apple/3.jpg",
        // Add more image URLs as needed
    ];

    return (
        <Swiper
            style={styles.wrapper}
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={2.5} // Thời gian giữa các hình ảnh
        >
            {images.map((url, index) => (
                <View key={index} style={styles.slide}>
                    <Image source={{ uri: url }} style={styles.image} />
                </View>
            ))}
        </Swiper>
    );
};

export default function DetailFruit() {
    const route = useRoute();
    const { id } = route.params;

    const props = {
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
                image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/1.jpg",
            },
            {
                image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/2.jpg",
            },
            {
                image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/3.jpg",
            },
            {
                image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/Test/Brinjal/4.jpg",
            },
        ],
        Dishes: [
            {
                createdAt: "2023-11-28 17:24:43",
                id: 18,
                name: "Cà Tím Xào Tỏi Giòn",
                ingredients:
                    "\n              -Cà tím cắt vuông\n              -Tỏi phi thơm\n              -Dầu ăn\n              -Gia vị: Muối, tiêu\n            ",
                nutrition:
                    "\n              -Cà tím chứa chất chống ô nhiễm và vitamin C\n              -Tỏi có tác dụng chống vi khuẩn và hỗ trợ hệ tiêu hóa\n            ",
                fruit_id: 6,
                updatedAt: "2023-11-28T17:24:43.000Z",
                DishImages: [
                    {
                        image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/DishImages/Brinjal\\Dish3\\1.jpg",
                    },
                ],
            },
            {
                createdAt: "2023-11-28 17:24:43",
                id: 17,
                name: "Cà tím cắt lát",
                ingredients:
                    "\n              -Mỡ hành\n              -Gia vị: Muối, tiêu\n            ",
                nutrition:
                    "\n              -Cà tím giàu chất chống ô nhiễm và vitamin A\n              -Mỡ hành có thể giúp tăng hương vị và chất dinh dưỡng\n            ",
                fruit_id: 6,
                updatedAt: "2023-11-28T17:24:43.000Z",
                DishImages: [
                    {
                        image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/DishImages/Brinjal\\Dish2\\1.jpg",
                    },
                ],
            },
            {
                createdAt: "2023-11-28 17:24:43",
                id: 16,
                name: "Cà Tím Xào Thịt Bò",
                ingredients:
                    "\n              -Cà tím cắt dài\n              -Thịt bò xào\n              -Ớt, tỏi, tiêu\n              -Gia vị: Nước tương, dầu ăn\n            ",
                nutrition:
                    "\n              -Cà tím chứa nhiều chất chống ô nhiễm và vitamin C\n              -Thịt bò cung cấp protein, sắt, zinc\n            ",
                fruit_id: 6,
                updatedAt: "2023-11-28T17:24:43.000Z",
                DishImages: [
                    {
                        image: "https://be-vegetable-dectection-mobile-9s6n.onrender.com/Public/DishImages/Brinjal\\Dish1\\1.jpg",
                    },
                ],
            },
        ],
        FeedBacks: [],
    };

    return (
        <View style={styles.container}>
            <ImageSlider />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    animation: {
        backgroundColor: "red",
    },
    wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});
