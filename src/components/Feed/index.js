import React from 'react';
import { FlatList, View } from 'react-native';
import Post from '../Post';
import Stories from '../UserStories';

const data = [
    {
        id: "1",
        user: {
            imageUri: 'https://nobleorderbrewing.com/img/lists/97/boruto-5-ways-sasuke-losing-his-rinnegan-makes-sense.jpg',
            name: 'Uchiha Sasuke'
        },
        imageUri: 'https://i.pinimg.com/originals/2b/80/84/2b8084f1ee00b9bf9636f2b8942ab970.jpg',
        caption: 'Uchiha Sasuke',
        likesCount: 355,
        postedTime: '2 days ago'
    },
    {
        id: "2",
        user: {
            imageUri: 'https://www.populus.com.tr/image/cache/data/resimler/naruto-shippuuden-konoha-kafa-bandi-6698-800x800.png',
            name: 'Uzumaki Naruto'
        },
        imageUri: 'https://nobleorderbrewing.com/img/lists/72/boruto-how-old-is-naruto-boruto-2.jpg',
        caption: '7th Hokage',
        likesCount: 422,
        postedTime: '2 days ago'
    },
    {
        id: "3",
        user: {
            imageUri: 'https://www.merlininkazani.com/images/games/12350/108680_640.jpg',
            name: 'Uchiha Madara'
        },
        imageUri: 'https://www.4ugk.com/wp-content/uploads/2021/06/O1CN015g31Uo1L1VPWzzCZc_62061239.jpg',
        caption: 'Uchiha Obito',
        likesCount: 255,
        postedTime: '2 days ago'
    },
    {
        id: "4",
        user: {
            imageUri: 'https://static.wikia.nocookie.net/naruto/images/3/3c/Obito.png/revision/latest?cb=20170329175507&path-prefix=tr',
            name: 'Uchiha Obito'
        },
        imageUri: 'https://fictionhorizon.com/wp-content/uploads/2021/08/Why-Did-Kakashi-Kill-Rin-00-1024x536.jpg',
        caption: 'Kakashi Hatake ',
        likesCount: 135,
        postedTime: '2 days ago'
    }
];


const Feed = () => {
    return (
        <FlatList
            ListHeaderComponent={Stories}
            ListHeaderComponentStyle={{
                paddingBottom: 10,
                borderBottomColor: 'gray',
                borderBottomWidth: 0.5
            }}
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <Post post={item} />}
        />
    )
}

export default Feed;
