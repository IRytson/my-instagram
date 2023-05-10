import { useContext } from "react";
import { DrawerItem, DrawerItemList, DrawerContentScrollView,createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../pages/profile";
import { Alert } from "react-native";
import AuthContext from "./auth_context";


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props){
    const { signOut } = useContext(AuthContext);
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
                <DrawerItem label="Sair" onPress={()=>{
                    Alert.alert("Sair","Deseja Realmente Sair ?",
                    [
                        {
                            text:"Cancelar",
                            onPress: () => {}
                        },
                        {
                            text:"OK",
                            onPress: () => {signOut()}
                        }
                    
                    ]);
                }}/>
        </DrawerContentScrollView>
    )
}

export default function ProfileDrawer(){
    return(
    <Drawer.Navigator
     drawerContent={(props) =>  <CustomDrawerContent {...props}/>}
     screenOptions={{headerShown:false ,drawerPosition:"right"}}>
            <Drawer.Screen name="Profile" component={Profile}/>
    </Drawer.Navigator>
    )
}