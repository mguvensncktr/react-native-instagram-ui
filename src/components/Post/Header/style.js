import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userInfo: {
        flexDirection: 'row',
    },
    rightContainer: {

        alignSelf: 'center',
        paddingRight: 7
    },
    name: {
        alignSelf: 'center',
        fontSize: 16,
        color: 'black',
        fontWeight: '500'

    }
})

export default styles;
