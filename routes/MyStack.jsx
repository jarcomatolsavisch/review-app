import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/About';
import Home from '../screens/Home';
import ReviewDetail from '../screens/ReviewDetail';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="HOME" component={Home} />
          <Stack.Screen name="REVIEW" component={ReviewDetail} />
        </Stack.Navigator>
  );
}