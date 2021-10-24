import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../../ProfilePicture';
import styles from './style'
import { Entypo } from '@expo/vector-icons';


const Header = ({ imageUri, name }) => {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <ProfilePicture
                    size={40}
                    uri={imageUri}
                />
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Entypo style={styles.rightContainer} name="dots-three-horizontal" size={18} color="black" />
            </View>
        </View>
    )
}

export default Header;
