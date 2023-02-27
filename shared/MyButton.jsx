import { TouchableOpacity, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function MyButton({buttonText, onPress}){
    return (
    <TouchableOpacity onPress={onPress}>
        <View style={globalStyles.button.container}>
            <Text style={globalStyles.button.text}>
                {buttonText}
            </Text>
        </View>
    </TouchableOpacity>
    );
}