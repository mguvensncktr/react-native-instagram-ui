import React from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import logo from '../../assets/logo.png'

const HomeStack = createStackNavigator();

const HomeRoutes = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                title: false,
                headerLeft: () => (
                    <Image source={logo} resizeMode='contain' style={{ width: 135, marginLeft: 15, height: 50 }} />
                ),
                headerRight: () => (
                    <View style={{ flexDirection: 'row', marginRight: 15 }}>
                        <Entypo name="squared-plus" size={26} color="black" style={{ paddingRight: 15 }} />
                        <AntDesign name="heart" size={26} color="black" style={{ paddingRight: 15 }} />
                        <FontAwesome5 name="comment-medical" size={26} color="black" />
                    </View>
                )

            }}
        />
    </HomeStack.Navigator>
)

export default HomeRoutes
