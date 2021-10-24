import React, { useState, useEffect } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './style'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Footer = ({ name, caption, likesCount: likesCountProp, postedTime }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const LikePressed = () => {
        setIsLiked(!isLiked);
        const count = isLiked ? -1 : 1;
        setLikesCount(likesCount + count)
    }
    useEffect(() => {
        setLikesCount(likesCountProp);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress={LikePressed}>
                        {isLiked ? <AntDesign name="heart" size={24} color="red" /> : <AntDesign name="hearto" size={24} color="black" />}
                    </TouchableWithoutFeedback>
                    <FontAwesome5 name="comment" size={24} color="black" style={{ paddingLeft: 15 }} />
                    <Feather name="send" size={24} color="black" style={{ paddingLeft: 15 }} />
                </View>
                <View style={styles.rightIcon}>
                    <Feather name="bookmark" size={24} color="black" />
                </View>
            </View>
            <Text style={styles.likes}>{likesCount} beğenme</Text>
            <View style={styles.captionContainer}>
                <Text style={styles.nickname} numberOfLines={2} ellipsizeMode='tail'>{name}
                    <Text style={styles.caption}> {caption}</Text>
                </Text>
            </View>
            <Text style={styles.postedTime}>{postedTime}</Text>
        </View>
    )
}

export default Footer;