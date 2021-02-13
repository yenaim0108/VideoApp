import React from 'react';
import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';

import SplashScreen from './pages/Splash';
import LoginScreen from './pages/Login';
import HomeScreen from './pages/Home';

const AppStack = createStackNavigator({ Home: HomeScreen });      // 앱 메인 화면
const LoginStack = createStackNavigator({ Login: LoginScreen }); // 로그인 화면

export default createAppContainer(createSwitchNavigator(
  {
    Splash: SplashScreen,
    App: AppStack,
    Login: LoginStack,
  },
  {
    initialRouteName: 'Splash',
  }
));