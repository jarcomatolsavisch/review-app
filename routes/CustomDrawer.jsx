import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { globalStyles } from "../styles/global";
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';

export default function CustomDrawer(props){
    //console.log(props)
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView 
                contentContainerStyle = {globalStyles.drawer.container}
                {...props}
            >
                <ImageBackground
                    source={require('../assets/game_bg.png')}
                    style={globalStyles.drawer.imageBackground}
                >
                    <Image
                        source={require('../assets/mario.png')}
                        style={globalStyles.drawer.image}
                    />
                    <Text style={globalStyles.drawer.profile}>
                        Mario
                    </Text>
                </ImageBackground>
                <View style={globalStyles.drawer.itemList}>
                    <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
            <View style={globalStyles.drawer.footer.container}>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:10}}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <FontAwesomeIcon name="group" size={20} color="#888"/>
                        <Text style={globalStyles.drawer.footer.text}>
                            Tell Your Friends
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:10}}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <FontAwesomeIcon name="sign-out" size={20} color="#888"/>
                        <Text style={globalStyles.drawer.footer.text}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}