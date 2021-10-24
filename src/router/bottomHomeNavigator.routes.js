import React from 'react'
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import ReelsScreen from '../screens/ReelsScreen';
import ShopScreen from '../screens/ShopScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeStackScreen from './home.routes';


const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: (focused, color, size) => {
                if (route.name === 'Home') {
                    return <Foundation name="home" size={32} color="black" />
                }
                if (route.name === 'Discovery') {
                    return <Feather name="search" size={32} color="black" />
                }
                if (route.name === 'Reels') {
                    return <Entypo name="video" size={32} color="black" />
                }
                if (route.name === 'Shop') {
                    return <Feather name="shopping-bag" size={32} color="black" />
                }
                if (route.name === 'Profile') {
                    return <FontAwesome name="user-circle-o" size={32} color="black" />
                };

            },
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            headerShown: false

        })}
    >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
)

export default BottomTabNavigator;
