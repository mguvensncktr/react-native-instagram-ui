import React, { useState, useEffect } from 'react'
import { TextInput, View, SafeAreaView, ImageBackground, ActivityIndicator, TouchableWithoutFeedback, Dimensions, Text } from 'react-native'
import styles from './style'
import { useRoute, useNavigation } from '@react-navigation/native';
import storiesData from '../../data/stories'
import ProfilePicture from '../../components/ProfilePicture'
import { Feather } from '@expo/vector-icons';

const StoryScreen = () => {

    const [userStories, setUserStories] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);
    const route = useRoute();
    const navigation = useNavigation();
    const userId = route.params.userId;

    useEffect(() => {
        const userStories = storiesData.find(storyData => storyData.user.id === userId);
        setUserStories(userStories);
        setActiveStoryIndex(0);
    }, [])

    const navigateToPrevUser = () => {
        navigation.push("Story", { userId: (parseInt(userId) - 1).toString() });
    }
    const navigateToNextUser = () => {
        navigation.push("Story", { userId: (parseInt(userId) + 1).toString() });
    }

    const handlePrevStory = () => {
        if (activeStoryIndex <= 0) {
            navigateToPrevUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex - 1);
    }
    const handleNextStory = () => {
        if (activeStoryIndex >= userStories.stories.length - 1) {
            navigateToNextUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex + 1);
    }

    const handlePress = (evt) => {
        const x = evt.nativeEvent.locationX;
        const screenWidth = Dimensions.get('window').width;
        if (x < screenWidth / 2) {
            handlePrevStory();
        } else {
            handleNextStory();
        }

    }

    if (!userStories) {
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )
    }
    const activeStory = userStories.stories[activeStoryIndex];


    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <ImageBackground source={{ uri: activeStory.imageUri }} style={styles.image}>
                    <View style={styles.topContainer}>
                        <ProfilePicture uri={userStories.user.imageUri} size={50} />
                        <Text style={styles.username}>{userStories.user.name}</Text>
                        <Text style={styles.date}>{activeStory.postedTime}</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <TextInput placeholder={"Mesaj Gönder"} placeholderTextColor={'white'} style={styles.sendText} />
                        <Feather name="send" size={25} color="white" style={styles.sendIcon} />
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>

        </View>
    )
}

export default StoryScreen;
