import React from 'react'
import { View, Image } from 'react-native'
import styles from '../Body/style';


const Body = ({ imageUri }) => {
    return (
        <View>
            <Image source={{ uri: imageUri }} style={styles.image} />
        </View>
    )
}

export default Body;