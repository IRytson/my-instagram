import {StyleSheet, FlatList} from 'react-native';


export default function Storie({}){
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={list_profile}
            renderItem={({ item }) => <StorieItem name={item.name} photo={item.photo} has_storie={item.has_storie} />}
        />
    );
}

const styles = StyleSheet.create({
    container:{
        
    },

    Image_perfil:{
        borderRadius:50
    }
})