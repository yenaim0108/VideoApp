import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

const styles = StyleSheet.create({
    btnTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    loginTitle: {
        color: '#FFFFFF'
    }
});

const LoginButton = () => {
    <Text style={[styles.btnTitle, styles.loginTitle]}>
    </Text>
}

export default LoginButton;