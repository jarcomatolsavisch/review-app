import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/About';
import CustomDrawer from './CustomDrawer';
import MyStack from './MyStack';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

export default function MyDrawer(){
    return (
        <Drawer.Navigator
            drawerContent={props=><CustomDrawer {...props}/>}
            screenOptions={{
                headerShown:true,
                drawerActiveBackgroundColor: "#e83a3a",
                drawerActiveTintColor: "#fff",
                drawerLabelStyle: {
                    marginLeft: -20,
                    fontFamily: 'nunito-variable',
                    fontSize: 15,
                },
            }}
        >
            <Drawer.Screen name="ABOUT" component={About} 
                options={{
                    drawerIcon: ({color}) => (
                        <FontAwesomeIcon name="book" color={color} size={24}/>
                    )}}
            />
            <Drawer.Screen name="MY GAMES" component={MyStack}
                options={{
                    drawerIcon: ({color}) => (
                        <FontAwesomeIcon name="gamepad" color={color} size={24}/>
                    )}}
            />
        </Drawer.Navigator>
      );
}