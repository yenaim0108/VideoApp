
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home';
import Setting from '../pages/Setting';
import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function TabNavigator (props) {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: 80,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    shadowOffset: {
                        width: 0,
                        height: 10
                    },
                    elevation: 20
                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon:({focused}) => {
                        return(
                            <Image
                                source={focused ? require('../img/home_select.png') : require('../img/home.png')}
                                style={styles.img}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name='Setting'
                component={Setting}
                options={{
                    tabBarIcon:({focused}) => {
                        return(
                            <Image
                                source={focused ? require('../img/setting_select.png') : require('../img/setting.png')}
                                style={styles.img}
                            />
                        );
                    }
                }}
            />
        </Tab.Navigator>   
    )
}

const styles = {
    img: {
        width: 40,
        height: 40
    }
}

export default TabNavigator;