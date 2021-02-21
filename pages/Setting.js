import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function Setting(props) {
     return (
      <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>설정</Text>
        <TouchableOpacity style={styles.btn} onPress={() => {
          AsyncStorage.removeItem('userID');
          props.navigation.navigate('Login');
        }}>
          <View style={styles.row}>
            <Text style={styles.btnTxt}>로그아웃</Text>
            <Image style={styles.img} source={require('../img/right_arrow.png')}></Image>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F3',
    paddingLeft: 40,
    paddingRight: 40,
  },
  row: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 120,
    marginBottom: 50
  },
  btn: {
    backgroundColor: '#FFFFFF',
    height: 70,
    justifyContent: 'center',
    padding: 30,
    borderRadius: 20,
    shadowColor: "#CECECE",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  btnTxt: {
    fontSize: 22,
    fontWeight: 'bold',
    width: 230
  },
  img: {
    height: 25,
    width: 25,
    alignItems: 'center'
  }
});

export default Setting;