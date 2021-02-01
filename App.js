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
  View,
} from 'react-native';
// import AsyncStorage from 'react-native-community';

const App: () => React$Node = () => {
  const [id, setId] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [state, setState] = React.useState([])

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.label}>아이디</Text>
        <TextInput style={styles.input} onChangeText={(txt) => setId(txt)} value={id}/>

        <Text style={styles.label}>비밀번호</Text>
        <TextInput style={styles.input} onChangeText={(txt) => setPassword(txt)} value={password}/>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.btn, styles.signUpBtn]} onPress={() => {}}>
            <Text style={[styles.btnTitle, styles.signUpTitle]}>회원가입</Text>
          </TouchableOpacity>
      
          <TouchableOpacity style={[styles.btn, styles.loginBtn]} onPress={() => {
            fetch("http://192.168.0.29:80/videoApp/login.php", {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: id,
                password: password
              })
            })
            .then((response) => response.json())
            .then((json) => {
              if(json.login === true) {
                alert("성공 " + json)
                loginSuccess = async (data) => {
                  await AsyncStorage.setItem('id', id);
                }
              } else {
                alert("실패" + json + json.login)
              }
            })
            .catch(error => alert(error))
          }
          }>
            <Text style={[styles.btnTitle, styles.loginTitle]}>로그인</Text>
          </TouchableOpacity>
        </View>
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
  row: {
    flexDirection: 'row',
  },
  label: {
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginBtn: {
    backgroundColor: '#efb43e',
  },
  loginTitle: {
    color: '#FFFFFF',
  },
  signUpBtn: {
    backgroundColor: '#F5F5F3',
    borderColor: '#efb43e',
    borderWidth: 2,
  },
  signUpTitle: {
    color: '#efb43e',
  },
});

export default App;