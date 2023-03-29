import {Image, Text, View ,StyleSheet,Button,TouchableOpacity} from 'react-native';
import Instagram_Logo from "../../assets/Instagram_Logo.png";
import Oval from "../../assets/Oval.png";

export default function Login() {
  return <>
    <View style = {style.container_father}>
     <View style = {style.center_object}>
         <Image source={Instagram_Logo}></Image>
     </View>

     <View style = {style.center_object}>
         <Image source={Oval}></Image>
     </View>

     <View style = {style.center_text}>
        <Text style = {style.letter_color2}>Jacob_W</Text>
     </View>

     <View style= {style.center_object}>
        <TouchableOpacity style={style.button_container} >
            <Text style={style.login_button}>Log In</Text>
        </TouchableOpacity>
     </View>

    
        <View style = {style.center_object}>
             <Text style = {style.letter_color}>Switch accounts</Text>
        </View>
    </View>

    <View style = {style.footer}>
         <Text>Don’t have an account?</Text>
         <Text style = {style.letter_color2}>Sign up.</Text>
     </View>
  </>;
}

const style = StyleSheet.create({
    container_father :{
        flex:1,
        justifyContent: 'center'
    },

    center_object: { 
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 30
    },

    center_text: { 
        flexDirection: 'row',
        justifyContent: 'center',
    },

    form_container: {
        flex: 1,
        justifyContent: 'center'
    }, 

    letter_color:{
        color : '#3797EF' ,
        fontWeight: 'bold'
    },

    letter_color2:{
        color : '#000' ,
        fontWeight: 'bold'
    },

    login_button: {
        width:307,
        height:44,
        backgroundColor: '#3797EF',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 10 ,
        borderRadius: 5
    },

    footer:{
        flexDirection: "row",
        justifyContent: 'center',
        height: 84,
        paddingTop:20,
        borderTopWidth: 0.5,
        borderTopColor: "#ccc"
    }
})