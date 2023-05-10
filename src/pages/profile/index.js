import { useContext } from "react";
import { Button, Text, View , StyleSheet, Image,TouchableOpacity} from "react-native";
import AuthContext from "../../routes/auth_context";
import { useState } from "react";



import PrivateIcon from "../../../assets/profile/privateIcon.svg";
import AccountList from "../../../assets/profile/AccountsList.svg";
import User from "../../../assets/profile/User.svg";
import Menu from "../../../assets/profile/Menu.svg";
import Mais from "../../../assets/profile/Mais.svg";
import Friends from "../../../assets/profile/Friends.svg"
import Sport from "../../../assets/profile/Sport.svg"
import Design from "../../../assets/profile/Design.svg"

import StoryVazio from "../../../assets/profile/storyvazio.svg";
import StoryIcon from "../../../assets/feed/story.svg";






export default function Profile(has_storie, navigation) {
    const [storie , setStorie] = useState(has_storie);

    return <View style = {styles.container}> 

                {/* <NavigationContainer>
                    <MeuDrawer />
                </NavigationContainer> */}
                
                <View style = {styles.container_priv }>
                    <PrivateIcon style={{marginRight:7.5}}/>
                    <Text style = {styles.text_principal}>Jacob_W</Text>
                    <AccountList style={{marginLeft:6}}/>
                </View>

                <View style = {styles.container_seg}>

                    <TouchableOpacity onPress={()=>{setStorie(false)}}>
                        <View style={{ marginRight: 15 }}>
                        <User style = {styles.img_user}/>
                            {storie ? <StoryIcon style={styles.circle} width={106} height={106} /> : <StoryVazio style={styles.circle} width={106} height={106} /> }
                        </View>
                    </TouchableOpacity>
                    

                    <View style = {styles.space}>
                        <Text style = {styles.number}>54</Text>
                        <Text style = {styles.text}>Posts</Text>
                    </View>
                    
                    <View style = {styles.space}>
                        <Text style = {styles.number}>834</Text>
                        <Text style = {styles.text}>Followers</Text>
                    </View>

                    <View style = {styles.space}>
                        <Text style = {styles.number}>162</Text>
                        <Text style = {styles.text}>Following</Text>
                    </View>
                </View>

                <View style={{marginTop:12 , marginRight:140}}>
                    <Text style = {styles.text_principal}>Jacob_W</Text>
                    <Text style = {styles.text}>Digital goodies designer @pixsellz </Text>
                    <Text style = {styles.text}>Everything is designed.</Text>
                </View>

                <TouchableOpacity style = {styles.buttom_touch}>
                    <Text style = {styles.text_touch}>Edit Profile</Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row',marginRight:70}}>

                    <TouchableOpacity style={{marginTop:18,marginLeft:20}}> 
                        <Mais style={{marginTop:23,marginLeft:23}}/>
                        <StoryVazio style={styles.circle_destak} width={64} height={64} /> 
                        <Text style={styles.text_new}>New</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop:18,marginLeft:40}}> 
                        <Friends style={{marginTop:4,marginLeft:4.5}}/>
                        <StoryVazio style={styles.circle_destak} width={64} height={64} /> 
                        <Text style={styles.text_}>Friends</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop:18,marginLeft:20 }}> 
                        <Sport style={{marginLeft:4.5,marginTop:4}}/>
                        <StoryVazio style={styles.circle_destak} width={64} height={64} />
                        <Text style={styles.text_}>Sport </Text> 
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop:18, marginLeft:20}}> 
                        <Design style={{marginLeft:4.5,marginTop:4}}/>
                        <StoryVazio style={styles.circle_destak} width={64} height={64} /> 
                        <Text style={styles.text_}>Design</Text>
                    </TouchableOpacity>

                </View>

            </View>

        function TelaPrincipal({ navigation }) {
            return (
            <View>
                <Text>Tela principal</Text>
                <Menu title="Abrir Drawer" onPress={() => navigation.openDrawer()} />
            </View>
            );
        }          
          function Logout() {
            return (
                <View style={{ backgroundColor: 'white' }}>
                     <Button onPress={() => { signOut() }} title={"Logout"} />
                </View>
            );
          }
          
          function MeuDrawer() {
            return (
              <Drawer.Navigator>
                <Drawer.Screen name="TelaPrincipal" component={TelaPrincipal} />
                <Drawer.Screen name="TelaConfiguracoes" component={Logout} />
              </Drawer.Navigator>
            );
          }
          
            


    // const { signOut } = useContext(AuthContext);

    // return 

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },

    container_priv:{
        flexDirection:'row',
        marginTop:25,
        alignItems:'center',
    },

    container_seg:{
        flexDirection:"row",
        alignItems:'center'
    },

    text_principal: {
        fontWeight:'bold',
        fontSize:20,
    },

    img_user:{
        marginRight:50,
        marginTop:50,
        marginLeft:5
    },

    number:{
        fontSize:20,
        fontWeight:'bold',
    },

    text:{
        fontSize:16,
        fontWeight:'300',
    },

    space:{
        padding:7,
        marginTop:45,
        alignItems:'center'
    },

    circle: {
        position: 'absolute',
        marginTop:45,
    },

    buttom_touch:{
        width:343,
        height:32,
        borderRadius:6,
        borderWidth:1,
        borderColor:"#C3C4C3",
        marginTop:15,
        alignItems:'center'
    },

    text_touch:{
        fontSize:16,
        fontWeight:"bold",
        marginTop:5,
    },

    destaque: {
        width: 68,
        height: 68,
    },

    circle_: {
        position: 'absolute',
    },
    
    circle_destak: {
        position: 'absolute',
        marginRight:150
    },
    text_: {
        marginTop: 7,
        textAlign: 'center',
        fontWeight:'300',
    },
    text_new:{
        marginTop: 25,
        marginLeft:20,
        fontWeight:'300',
    }
  });
  