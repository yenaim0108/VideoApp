import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#707070',
        paddingLeft: 15
    }
});

const Label = () => (
    <Text style={styles.label}>

    </Text>
);

export default Label;