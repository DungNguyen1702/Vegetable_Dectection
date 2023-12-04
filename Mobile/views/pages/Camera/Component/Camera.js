import React, { useState, useEffect, useRef } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Modal,
    ActivityIndicator,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntIcon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import fruitAPI from "../../../../api/fruitAPI";

const LoadingModal = (loading, setLoading) => (
    <Modal
        transparent={true}
        animationType="slide"
        visible={loading}
        onRequestClose={() => setLoading(false)}
    >
        <View style={styles.loadingModal}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={styles.loadingText}>Đang tải...</Text>
        </View>
    </Modal>
);

export default function CamreraComponent() {
    const cameraRef = useRef(null);
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [cameraType, setCameraType] = useState(CameraType.back);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);
    useEffect(() => {
        if (capturedImage !== null) {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    var data = await fruitAPI.predictFruit(capturedImage);
                    console.log(data)
                    setData(data);
                } catch (e) {
                    console.log(e);
                } finally {
                    setLoading(false);
                    // navigation.navigate("DetailFruit", { data });
                }
            };
            fetchData();
        }
    }, [capturedImage]);

    console.log(capturedImage)

    const takePicture = async () => {
        if (cameraRef.current) {
            const { uri } = await cameraRef.current.takePictureAsync();
            setCapturedImage(uri);
        }
    };

    const chooseImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.canceled) {
            setCapturedImage(result.assets[0]?.uri);
        }
    };

    const changeCameraType = () =>
        setCameraType(
            cameraType === CameraType.back ? CameraType.front : CameraType.back
        );

    if (hasPermission === null) {
        return (
            <View>
                <Text>Yêu cầu quyền truy cập</Text>
            </View>
        );
    }

    if (hasPermission === false) {
        return (
            <View>
                <Text>Quyền truy cập không được chấp nhận</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.cameraView}>
                <Camera ref={cameraRef} style={styles.camera} type={cameraType}>
                    <Text></Text>
                </Camera>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonHolder}
                    onPress={chooseImage}
                >
                    <AntIcon
                        name="appstore-o"
                        style={styles.icon}
                        size={45}
                    ></AntIcon>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonHolder}
                    onPress={takePicture}
                >
                    <FeatherIcon
                        name="camera"
                        style={styles.icon}
                        size={45}
                    ></FeatherIcon>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonHolder}
                    onPress={changeCameraType}
                >
                    <FeatherIcon
                        name="refresh-ccw"
                        style={styles.icon}
                        size={45}
                    ></FeatherIcon>
                </TouchableOpacity>
            </View>
            {loading && <LoadingModal loading = {loading} setLoading = {setLoading} />}
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
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    loadingText: {
        color: "#fff",
        marginTop: 10,
    },
});
