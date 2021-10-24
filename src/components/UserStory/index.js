import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const Story = (props) => {

    const {
        story: {
            user: {
                id,
                imageUri,
                name
            }
        }
    } = props;

    const navigation = useNavigation();

    const storyPressed = () => {
        navigation.navigate('Story', { userId: id });
    }
    return (
        <TouchableOpacity onPress={storyPressed}>
            <ProfilePicture
                uri={imageUri}
            />
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Story;
