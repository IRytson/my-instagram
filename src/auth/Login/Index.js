import {Text, View, Image,StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Instagram_Logo from '../../assets/Instagram_Logo.png';
import facebook from '../../assets/facebook.png';

export default function Index(){
    return <>
    <View style={style.container_father}>
        <View style={style.center_object}>
            <Image source={Instagram_Logo}></Image>
        </View>

        <View style={style.center_text}>
            <TextInput style={style.text_input} placeholder='Username'/>
        </View>

        <View style={style.center_text}>
            <TextInput style={style.text_input} placeholder='Password'/>
        </View>

        <TouchableOpacity style = {style.security}>
            <Text style ={style.letter_color}>Forgot password?</Text>
        </TouchableOpacity>


        <View style= {style.center_object}>
            <TouchableOpacity style={style.button_container} >
             <Text style={style.login_button}>Log in</Text>
            </TouchableOpacity>
        </View>

        <View style= {style.center_object}>
        <TouchableOpacity style = {{flexDirection:'row'}}>
            <Image source={facebook}/>
                <Text style ={style.letter_color}>  Log in with Facebook</Text>
            </TouchableOpacity>
        </View>


        <View style={style.hr_text}>
        <View style= {style.center_risc}>
                <Text style={style.text_solid}>OR</Text>
        </View>
        </View>

        <View style= {style.center_object}>
            <Text>Don’t have an account?</Text>
            <TouchableOpacity>
                <Text style= {style.letter_color}> Sign up. </Text>
            </TouchableOpacity>
        </View>
    </View>
    <View style = {{borderBottomWidth:0.5 , borderBottomColor :'#C4C4C4'}}/>
    <View style={style.footer}>
        <Text style={style.text_solidt}>Instagram от Facebook</Text>
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
        paddingBottom: 40,
        paddingTop: 40
    },
    
    center_text: { 
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 12
    },

    text_input: {
        borderWidth:0.5,
        borderRadius:5,
        borderColor:'#C4C4C4',
        width:343,
        height:44,
        backgroundColor: '#FAFAFA',
        paddingLeft:10
    },

    security:{
        marginLeft:270,
        paddingTop: 10,       
    },

    letter_color:{
        color : '#3797EF', 
        fontWeight:'bold'
    },

    login_button: {
        width:343,
        height:44,
        backgroundColor: '#3797EF',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 10 ,
        borderRadius: 5
    },

    center_risc: { 
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 7,
        padding:1,
        backgroundColor:'#fff'
    },

    hr_text :{
        borderBottomColor: '#C4C4C4',
        borderBottomWidth:0.5 ,
        marginLeft : 15 ,
        marginRight :15
    }, 

    text_solid:{
        position:"absolute" ,
        backgroundColor:'#fff',
        paddingLeft:10 ,
        paddingRight: 10 ,
        color:'#C4C4C4', 
        paddingTop:-1
    }, 

    text_solidt:{
        position:"absolute" ,
        paddingLeft:10 ,
        paddingRight: 10 ,
        color:'#C4C4C4', 
        paddingTop:20
    }, 

    footer:{
        flexDirection: "row",
        justifyContent: 'center',
        height: 40,
        paddingTop:50
    }


})