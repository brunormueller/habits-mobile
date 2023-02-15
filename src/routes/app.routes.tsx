import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator();
import { Home } from '../screeens/Home'
import { New } from '../screeens/New'
import { Habit } from '../screeens/Habit'
import React from "react";

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='home' component={Home} />
            <Screen name='new' component={New} />
            <Screen name='habit' component={Habit} />
        </Navigator>
    )
}