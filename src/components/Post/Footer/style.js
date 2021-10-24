import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 10
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5
    },
    leftIcons: {
        flexDirection: 'row',
    },
    rightIcon: {
        marginRight: 12
    },
    likes: {
        fontWeight: 'bold'
    },
    captionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    nickname: {
        fontWeight: 'bold',
    },
    caption: {
        paddingLeft: 5,
        fontWeight: '400',
    },
    postedTime: {
        marginTop: 5,
        fontSize: 12,
        color: 'gray'
    }
})

export default styles;