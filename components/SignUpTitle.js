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
    signUpTitle: {
        color: '#efb43e'
    }
});

const SignUpButton = () => {
    <Text style={[styles.btnTitle, styles.signUpTitle]}>

    </Text>
}

export default SignUpButton;