import {Text, View, Image, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import photo from '../../../assets/Perfil.jpg';

export default function Itemstorie({name , photo , has_storie}){
    return (
        <TouchableOpacity>
            <View style={{ marginRight: 15 }}>
                <Image source={photo} style={styles.profile} />
                {has_storie ? <StoryIcon style={styles.circle} width={78} height={78} /> : null}
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    profile: {
        width: 68,
        height: 68,
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 50
    },
    circle: {
        position: 'absolute',
    },
    text: {
        marginTop: 7,
        textAlign: 'center'
    }
});