import AsyncStorage from '@react-native-community/async-storage';
import { result } from 'lodash';
import React from 'react';
import { SafeAreaView, Image, StyleSheet } from 'react-native';

function Splash(props) {
  React.useEffect(() => {
    const userID = AsyncStorage.getItem('userID', (error, result) => {
      props.navigation.navigate(result !== null ? 'Tab' : 'Login');
    });
  });
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Image source={require('../img/logo.png')}/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F3',
  }
});

export default Splash;