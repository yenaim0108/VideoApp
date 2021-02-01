/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from 'react-native-community';

const App: () => React$Node = () => {
  const [id, setId] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [state, setState] = React.useState([])

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.lable}>아이디</Text>
        <TextInput style={styles.input} onChangeText={(txt) => setId(txt)} value={id}/>

        <Text style={styles.lable}>비밀번호</Text>
        <TextInput style={styles.input} onChangeText={(txt) => setPassword(txt)} value={password}/>

        <TouchableOpacity style={styles.btn} onPress={() => {
          fetch("http://192.168.0.29:80/videoApp/login.php", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: id,
              password: password,
            })
          })
          .then((response) => response.json())
          .then((json) => {
            if(json.login === true) {
              alert("성공")
              loginSuccess = async (data) => {
                await AsyncStorage.setItem('id', id);
              }
            } else {
              alert("실패")
            }
          })
        }
        } >
          <Text style={styles.btnTitle}>로그인</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F5F3',
    paddingLeft: 40,
    paddingRight: 40,
  },
  lable: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#707070',
    paddingLeft: 15,
  },
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btn: {
    height: 45,
    backgroundColor: '#efb43e',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#CECECE",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
});

export default App;