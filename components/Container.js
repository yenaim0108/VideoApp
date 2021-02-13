import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FF0000',
      paddingLeft: 40,
      paddingRight: 40
    }
});

const Container = () => (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
);

export default Container;