import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigators/AppNavigator';

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </>
  );
};

export default App;