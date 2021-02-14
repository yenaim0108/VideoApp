
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Setting from '../pages/Setting';

const Stack = createStackNavigator();

function AppNavigator (props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
    )
}

export default AppNavigator;