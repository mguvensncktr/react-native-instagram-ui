import React from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './bottomHomeNavigator.routes';
import StoryScreen from '../screens/StoryScreen';

const Stack = createStackNavigator();

const Router = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="Story"
            component={StoryScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
)

export default Router
