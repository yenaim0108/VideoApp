import React from 'react';
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    btn: {
        width: 150,
        height: 50,
        marginTop: 15,
        marginRight: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#CECECE",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    loginBtn: {
        backgroundColor: '#efb43e'
    },
    btnTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    loginTitle: {
        color: '#FFFFFF'
    }
});

const LoginButton = () => {
    <TouchableOpacity style={[styles.btn, styles.loginBtn]}>
    </TouchableOpacity>
}

export default LoginButton;