
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../pages/Splash'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import TabNavigator from '../navigators/TabNavigator'

const Stack = createStackNavigator();

function AppNavigator (props) {
    return (
        <Stack.Navigator
            initialRouteName={'Splash'}
            headerMode={false}
        >
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Tab' component={TabNavigator}/>
        </Stack.Navigator>   
    )
}

export default AppNavigator;