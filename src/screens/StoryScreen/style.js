import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'space-between',
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20
    },
    username: {
        color: 'white',
        fontWeight: '600',
        fontSize: 17
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    sendText: {
        flex: 1,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        height: 40
    },
    sendIcon: {
        width: 50,
        paddingLeft: 15,
        alignSelf: 'center'
    },
    date: {
        color: 'white',
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: '300'

    }

})

export default styles;
