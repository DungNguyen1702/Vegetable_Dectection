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
                    navigation.navigate("HomePage")
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

    const Register = ()=> alert('Đăng kí')

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
                onPress={Register} 
                style = {{alignItems : 'center'}}
                disabled={loading}
            >
                <Text style = {styles.text}>Tạo tài</Text>
                <Text style = {styles.text}>khoản mới</Text>
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