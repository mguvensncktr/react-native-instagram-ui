import React from 'react';
import { FlatList } from 'react-native';
import Story from '../UserStory';
import storiesData from '../../data/stories';

const Stories = () => {
    return (
        <FlatList
            data={storiesData}
            keyExtractor={({ user: { id } }) => id}
            renderItem={({ item }) => <Story story={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default Stories;
