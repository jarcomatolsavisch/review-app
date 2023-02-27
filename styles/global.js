import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        padding: 24
    }, 
    titleText: {
        fontFamily: 'nunito-variable',
        fontSize: 24,
        color: '#333',
        marginVertical: 20,
    },
    contentText: {
        fontFamily: 'nunito-italic',
        fontSize: 18,
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: {width: 3, height: 3},
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical:20,
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    drawer: {
        container: {
            backgroundColor: '#eee',
        },
        imageBackground: {
            padding: 20,
        },
        image: {
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 20,
        },
        profile: {
            fontSize: 30,
            fontFamily: 'nunito-variable',
        },
        itemList: {
            flex:1,
            backgroundColor: "#fff",
            paddingTop:10,
        },
        footer: {
            container: {
                padding: 20,
                borderTopWidth: 1,
                borderTopColor: "#ccc",
                marginBottom: 20,
                paddingLeft: 24,
            },
            text: {
                fontSize: 16,
                fontFamily: 'nunito-variable',
                color: "#888",
                marginLeft: 10,
            },
        }
    },
    modal: {
        toggle: {
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#f2f2f2',
            padding: 10,
            borderRadius: 10,
            alignSelf: 'center'
        },
        close: {
            marginTop: 10,
            marginBottom: 0,
        },
        content: {
            flex: 1,
        },
    },
    form: {
        textLabelContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end"
        },
        textinput: {
            borderWidth: 1,
            borderColor: "#ddd",
            adding: 10,
            fontSize: 18,
            borderColor: 6,
            marginBottom: 20,
            padding:10,
        },
        error: {
            color: 'red'
        },
    },
    button: {
        container: {
            borderRadius: 8,
            paddingVertical: 14,
            paddingHorizontal: 10,
            backgroundColor: "#e83a3a",
        },
        text: {
            color: "white",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: 16,
            textAlign: "center",
        },
    }

})

export const images = {
    rating: {
        '1': require("../assets/rating-1.png"),
        '2': require("../assets/rating-2.png"),
        '3': require("../assets/rating-3.png"),
        '4': require("../assets/rating-4.png"),
        '5': require("../assets/rating-5.png"),
    }
}