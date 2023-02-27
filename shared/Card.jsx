import { globalStyles } from "../styles/global"
import { View } from "react-native"

export default function Card(props){
    return (<View style={globalStyles.card}>
        <View style={globalStyles.cardContent}>
            {
                // children/components inside the card
                props.children
            }
        </View>
    </View>)
}