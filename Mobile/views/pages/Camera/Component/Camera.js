import React, { useState, useEffect, useRef } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    Image,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import fruitAPI from "../../../../api/fruitAPI";

import Icons from "../../../../constants/Icons"
import historyAPI from "../../../../api/historyAPI";

export default function CamreraComponent(params) {
    const {user, change} = params
    const cameraRef = useRef(null);
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [cameraType, setCameraType] = useState(CameraType.back);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
        console.log(capturedImage)
    }, []);
    
    useEffect(()=>{
        setCapturedImage(null)
    },[change])

    useEffect(() => {
        var resultAPI;
        if (capturedImage !== null) {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    resultAPI = await fruitAPI.predictFruit(capturedImage);
                    const fruit_id = resultAPI.data.result.id
                    historyAPI.createHistory(capturedImage, fruit_id, user.id)
                } catch (e) {
                    console.log(e);
                } finally {
                    setLoading(false);
                    navigation.navigate("DetailFruit", {
                        data: resultAPI.data.result,
                        user: user,
                        change : change,
                    });
                }
            };
            fetchData();
        }
    }, [capturedImage]);

    const takePicture = async () => {
        if (cameraRef.current) {
            const { uri } = await cameraRef.current.takePictureAsync();
            setCapturedImage(uri);
            setLoading(true);
        }
    };

    const chooseImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.canceled) {
            setCapturedImage(result.assets[0]?.uri);
            setLoading(true);
        }
    };

    const changeCameraType = () =>
        setCameraType(
            cameraType === CameraType.back ? CameraType.front : CameraType.back
        );

    if (hasPermission === null) {
        return (
            <View>
                <Text>Permission request</Text>
            </View>
        );
    }

    if (hasPermission === false) {
        return (
            <View>
                <Text>Access denied</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.cameraView}>
                {capturedImage ?
                <Image
                    source={{uri : capturedImage}}
                    style ={styles.image}
                ></Image>
                : 
                <Camera ref={cameraRef} style={styles.camera} type={cameraType}>
                    <Text></Text>
                </Camera>}
            </View>
                    
            {/* Library Image */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonHolder}
                    onPress={chooseImage}
                    disabled = {loading}
                >
                    <Image
                        source={Icons.imageLibraryIcon}
                        style ={styles.icon}
                        size = {45}
                    ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonHolder}
                    onPress={takePicture}
                    disabled = {loading}
                >
                    <Image
                        source={Icons.cameraIcon}
                        style ={styles.icon}
                        size = {45}
                    ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonHolder}
                    onPress={changeCameraType}
                    disabled = {loading}
                >
                    <Image
                        source={Icons.refreshIcon}
                        style ={styles.icon}
                        size = {45}
                    ></Image>
                </TouchableOpacity>
            </View>
            {loading && (
                <View style={styles.loadingModal}>
                    <ActivityIndicator size="large" color="#fff" />
                    <Text style={styles.loadingText}>Recognizing...</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5AA162",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    deniedContainer: {
        justifyContent: "center",
    },
    cameraView: {
        position: "absolute",
        top: 20,
        alignItems: "center",
        justifyContent: "center",
        height: "75%",
        width: "80%",
        borderRadius: 30,
        overflow: "hidden",
        elevation: 20,
    },
    camera: {
        height: "100%",
        width: "100%",
    },
    buttonContainer: {
        position: "absolute",
        bottom: 20,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        height: "15%",
        width: "100%",
        marginTop: 20,
    },
    icon: {
        height: 45,
        width: 45,
    },
    buttonHolder: {
        backgroundColor: "white",
        height: 80,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
    },
    loadingModal: {
        width: 200,
        height: 120,
        borderRadius: 20,
        marginTop : -140,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    loadingText: {
        color: "#fff",
        marginTop: 10,
    },
    image : {
        height : "100%",
        width : "100%",
    },
});
