import React from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        shadowColor: "#CECECE",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
});

const InputLong = () => {
    <TextInput style={styles.input} />
}

export default InputLong;