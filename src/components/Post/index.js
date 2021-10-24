import React from 'react'
import { View, Text } from 'react-native'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'


const Post = ({ post }) => {
    return (
        <View>
            <Header imageUri={post.user.imageUri} name={post.user.name} />
            <Body imageUri={post.imageUri} />
            <Footer name={post.user.name} caption={post.caption} likesCount={post.likesCount} postedTime={post.postedTime} />
        </View>
    )
}

export default Post;
