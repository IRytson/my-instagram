import { useContext } from "react";
import { Button, Text, View , StyleSheet, Image} from "react-native";
import AuthContext from "../../routes/auth_context";

import PrivateIcon from "../../../assets/profile/privateIcon.svg";
import AccountList from "../../../assets/profile/AccountsList.svg";
import User from "../../../assets/profile/User.svg";
import Menu from "../../../assets/profile/Menu.svg";


export default function Profile() {

    return <View style = {styles.container}> 
                <View style = {styles.container_priv}>
                    <PrivateIcon style={{marginRight:7.5}}/>
                    <Text style = {styles.text_principal}>jacob_w</Text>
                    <AccountList style={{marginLeft:6}}/>
                    <Menu/>
                </View>

                <View>
                    <User/>
                    <View>
                        <Text>54</Text>
                        <Text>Posts</Text>
                    </View>
                    
                </View>

            </View>



    // const { signOut } = useContext(AuthContext);

    // return <View style={{ backgroundColor: 'white' }}>
    //     <Button onPress={() => { signOut() }} title={"Logout"} />
    // </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:''
    },

    container_priv:{
        flexDirection:'row',
        marginTop:30,
        alignItems:'center',
    },

    text_principal: {
        fontWeight:'bold',
        fontSize:20,
      },

  });
  