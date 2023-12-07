import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ButtonComponent from "./Component/buttonComponent";
import ImageComponent from "./Component/imageComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    user: state.user,
});
  

const AccountInfo = ({ user })=>
{
    console.log(user.name)

    return (
        <View style ={styles.container}>
            <ImageComponent user = {user}/>
            <ButtonComponent user = {user}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor : "#5AA162"
    },
    
})

export default connect(mapStateToProps)(AccountInfo);