import { Modal, View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { globalStyles } from "../styles/global";
import {Formik} from "formik";
import * as yup from "yup";
import MyButton from "./MyButton";

const reviewSchema = yup.object({
    title: yup.string().min(4).required(),
    body: yup.string().min(8).required(),
    rating: yup.string().required().test(
        'is num 1-5?',
        'rating must be a number 1-5',
        (value) => {return parseInt(value)<6 && parseInt(value)>0}
    )
})
//console.log(reviewSchema)

export default function ReviewGameForm({addReview, modalOpen, setModalOpen}){
    return <Modal visible={modalOpen} animationIn="slideInLeft" animationOut="slideOutRight">
            <TouchableWithoutFeedback onPress={()=>{
                console.log("Dismissed keyboard")
                Keyboard.dismiss()
            }}>
                <View style={globalStyles.container}>
                    <MaterialIcons
                        style={{...globalStyles.modal.toggle, ...globalStyles.modal.close}}
                        name="close"
                        size={24}
                        onPress={()=>setModalOpen(false)}
                    />
                    <Text style={globalStyles.titleText}>Rate Game Form</Text>
                    <Formik
                        initialValues = {{
                            title: "", body: "", rating: ""
                        }}
                        onSubmit = {(values, actions)=>{
                            //console.log(values)
                            addReview(values)
                            actions.resetForm()
                        }}
                        validationSchema={reviewSchema}
                    >
                        {/*props of Formik */}
                        {(props)=>(
                            <View>
                                <View style={globalStyles.form.textLabelContainer}>
                                    <Text style={globalStyles.contentText}>Review Title</Text>
                                    <Text style={globalStyles.form.error}>
                                        {props.touched.title && props.errors.title}
                                    </Text>
                                </View>
                                <TextInput
                                    style={globalStyles.form.textinput}
                                    placeholder="Review Title"
                                    onChangeText={props.handleChange("title")}
                                    value={props.values.title}
                                    onBlur={props.handleBlur("title")} // real time validation
                                />
                                <View style={globalStyles.form.textLabelContainer}>
                                    <Text style={globalStyles.contentText}>Review Body</Text>
                                    <Text style={globalStyles.form.error}>
                                        {props.touched.body &&props.errors.body}
                                    </Text>
                                </View>
                                <TextInput
                                    multiline minHeight={120}
                                    style={globalStyles.form.textinput}
                                    placeholder="Review Body"
                                    onChangeText={props.handleChange("body")}
                                    value={props.values.body}
                                    onBlur={props.handleBlur("body")}
                                />
                                <View style={globalStyles.form.textLabelContainer}>
                                    <Text style={globalStyles.contentText}>Rating</Text>
                                    <Text style={globalStyles.form.error}>
                                        {props.touched.rating && props.errors.rating}
                                    </Text>
                                </View>
                                <TextInput
                                    style={globalStyles.form.textinput}
                                    placeholder="Rating (1-5)"
                                    onChangeText={props.handleChange("rating")}
                                    value={props.values.rating}
                                    keyboardType="numeric"
                                    onBlur={props.handleBlur("rating")}
                                />
                                <MyButton buttonText='submit' onPress={props.handleSubmit}/>
                                {/*<Button title="Submit" onPress={props.handleSubmit}/>*/}
                            </View>
                            
                        )}
                    </Formik>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
}