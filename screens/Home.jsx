import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import Card from "../shared/Card";
import {MaterialIcons} from '@expo/vector-icons';
import ReviewGameForm from "../shared/ReviewGameForm";

export default function Home({navigation}){

    const [reviews, setReviews] = useState([
        {title: 'Mario Kart 8', rating: 4, body: 'lorem ipsum', key: 1},
        {title: 'Super Smash Bros. Ultimate', rating: 5, body: 'lorem ipsum', key: 2},
        {title: "Kirby's Return to Dream Land", rating: 2, body: 'lorem ipsum', key: 3},
        {title: 'Hogwarts Legacy', rating: 3, body: 'lorem ipsum', key: 4},
    ])

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((prevReviews)=>{
            return [review,...prevReviews]
        })
        setModalOpen(false)
    }

    const [modalOpen, setModalOpen] = useState(false)

    return <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Home Screen</Text>

        <ReviewGameForm addReview={addReview} modalOpen={modalOpen} setModalOpen={setModalOpen}/>

        <MaterialIcons name="add" style={globalStyles.modal.toggle} size={24} onPress={()=>setModalOpen(true)}/>

        <FlatList
            data={reviews}
            renderItem={({item})=>{
                return <TouchableOpacity onPress={
                    () =>
                    navigation.navigate(
                        "REVIEW",
                        item //send the data with navigation
                    )
                }>
                    <Card>
                        <Text style={globalStyles.contentText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            }}
        />
    </View>
}
