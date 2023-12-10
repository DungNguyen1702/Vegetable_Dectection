import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View, Text, Button } from "react-native";
import auth from '../../../api/authAPI'
import { useState } from "react";


export default function Footer ({account, password, setErrAccount, setErrPassword, setLoading, loading})
{
    const navigation = useNavigation();

    const Login = ()=> {
        setLoading(true)
        const callAPI = async () => {
            try {
                const values = {
                    account : account,
                    password : password,
                }

                const response = await auth.login(values);

                if(response.status === 200){
                    const user = response.data.user;
                    navigation.navigate("HomePage", { user : user })
                }
            }
            catch (e) {
                console.log(e)

                if (e.response.status === 404) {
                    setErrAccount(true);
                }
                else if (e.response.status === 401){
                    setErrPassword(true);
                }
            }
            finally{
                setLoading(false);
            }
        }
        callAPI()
    }

    const FindAccount = ()=> alert('Đừng tìm nữa bạn ơi bạn tạo account mới đi :((')

    const Register =()=>{
        navigation.navigate("Register");
    }

    return (
        <View style = {styles.container}>
            <TouchableOpacity 
                onPress={Register} 
                disabled={loading}
            >
                <Text style = {styles.text}>Đăng kí</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                onPress={Login} 
                style = {styles.buttonLogin}
                disabled={loading}
            >
                <Text style = {styles.textLogin}>Đăng nhập</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={FindAccount} 
                style = {{alignItems : 'center'}}
                disabled={loading}
            >
                <Text style = {styles.text}>Tìm lại</Text>
                <Text style = {styles.text}>tài khoản</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : 100,
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center'
    },
    buttonLogin : {
        backgroundColor : "#00FFD1",
        borderRadius : 10,
        padding : 10,
    },

    text : {
        fontWeight : 'bold',
        fontSize :14,
        color : 'white',
    },
    textLogin : {
        fontWeight : 'bold',
        fontSize :14,
        color : 'black',
    }
})