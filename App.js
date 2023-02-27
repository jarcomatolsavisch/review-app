import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import MyDrawer from "./routes/MyDrawer";


const getFonts = () => {
  console.log("In getFonts")
  // Return a Promise
  return Font.loadAsync({
    'nunito-italic': require('./assets/fonts/Nunito-Italic-VariableFont_wght.ttf'),
    'nunito-variable': require('./assets/fonts/Nunito-VariableFont_wght.ttf')
  })
}

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  //const Navigator = createAppContainer(HomeStack)

  if(fontsLoaded){

     
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </GestureHandlerRootView>
    );
  } else {
    return (
    <AppLoading
     startAsync={getFonts}
     onFinish={()=> setFontsLoaded(true)} 
     onError={() => console.log('error')}
    />
    )
  }

}