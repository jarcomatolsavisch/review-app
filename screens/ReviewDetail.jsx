import React from "react";
import { View, Text, Button, Image } from "react-native";
import Card from "../shared/Card";
import { globalStyles, images } from "../styles/global";

export default function ReviewDetail({ route, navigation }){

    const { title, rating, body } = route.params;

    const pressHandler = () => {
        navigation.pop()
    }

    return <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>About ReviewDetail</Text>
            <Card>
                <Text style={globalStyles.contentText}>{title}</Text>
                <Text style={globalStyles.contentText}>body: {body}</Text>
                <View style={globalStyles.rating}>
                    <Text style={globalStyles.contentText}>rating:</Text>
                    <Image source={images.rating[rating]} />
                </View>
            </Card>
        <Button title="HOME" onPress={pressHandler}/>
    </View>
}
