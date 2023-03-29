import {Text, View , StyleSheet, Image, TouchableOpacity} from 'react-native';
import Instagram_Logo from "../../../assets/Instagram_Logop.png";
import Camera_Icon from "../../../assets/Camera_Icon.png";
import IGTV from "../../../assets/IGTV.png";
import Messanger from "../../../assets/Messanger.png";

export default function Static(){
    return (
        <View style={styles.container_father}>
        
            <TouchableOpacity>
                <Image source={Camera_Icon} style= {styles.correct}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style= {{width:105,marginTop:5,marginLeft:20}}  source={Instagram_Logo}/>
            </TouchableOpacity>

            <View style={styles.container_mini}>
                <TouchableOpacity>
                    <Image source={IGTV}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container}>
                    <Image source={Messanger}/>
                </TouchableOpacity>       
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container_father:{
        flexDirection:'row',
        marginTop:40,
        justifyContent:'space-between',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "#B3B3B3",
    },

    container_mini:{
        flexDirection:'row',
        alignItems:'center',
        
    },

    correct:{
        marginTop:5,
    },

    container:{
        marginLeft:10
    }

})