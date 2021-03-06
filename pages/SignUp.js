import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function SignUp(props) {
  const [id, setId] = React.useState('');
  const [idCheck, setIdCheck] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [passwordCheck, setPasswordCheck] = React.useState('');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TouchableOpacity onPress={() => {props.navigation.goBack()}}>
            <Image source={require('../img/up_button.png')} style={{width: 25, height: 25, marginTop: 30, marginLeft: 20}}/>
          </TouchableOpacity>
          <View style={styles.contents}>
            <Text style={styles.title}>회원가입</Text>
            <Text style={styles.label}>아이디</Text>
            <View style={styles.row}>
              <TextInput style={styles.inputID} onChangeText={(txt) => {
                setId(txt);
                setIdCheck(false);
              }} value={id} />
              <TouchableOpacity style={styles.btnDuplicate} onPress={() => {
                if (id === '') {
                  alert("아이디를 입력해주세요.");
                  return;
                }

                fetch("http://192.168.0.29:80/videoApp/idCheck.php", {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    id: id
                  })
                })
                  .then((response) => response.json())
                  .then((json) => {
                    if (json.idCheck === true) {
                      alert('사용 가능한 아이디입니다.');
                      setIdCheck(true);
                    } else {
                      alert("이미 사용중인 아이디입니다\n다른 아이디를 입력해 주세요.");
                    }
                  })
                  .catch(error => alert(error))
              }}>
                <Text style={[styles.btnTitle, styles.duplicate]}>중복확인</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.label}>비밀번호</Text>
            <TextInput style={styles.input} onChangeText={(txt) => setPassword(txt)} value={password} secureTextEntry={true} />

            <Text style={styles.label}>비밀번호 확인</Text>
            <TextInput style={styles.input} onChangeText={(txt) => setPasswordCheck(txt)} value={passwordCheck} secureTextEntry={true} />

            <View style={styles.row}>
              <TouchableOpacity style={styles.btnSignup} onPress={() => {
                if (id === '') {
                  alert("아이디를 입력해주세요.");
                  return;
                }            

                if (idCheck === false) {
                  alert("아이디 중복확인을 진행해주세요.");
                  return;
                }

                if (password === '') {
                  alert("비밀번호를 입력해주세요.");
                  return;
                }

                if (passwordCheck === '') {
                  alert("비밀번호를 한 번 더 입력해주세요.");
                  return;
                }

                if (password !== passwordCheck) {
                  alert('비밀번호를 동일하게 입력해주세요');
                  return;
                }

                fetch("http://192.168.0.29:80/videoApp/signup.php", {
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
                  .then(response => response.json())
                  .then(json => {
                    if (json.signup === true) {
                      AsyncStorage.setItem('userID', id);
                      props.navigation.navigate('Tab');
                      alert("회원가입에 성공하셨습니다.")
                    } else {
                      alert("회원가입에 실패하셨습니다.\n" + json.signup);
                    }
                  })
                  .catch(error => alert(error))
              }}>
                <Text style={[styles.btnTitle, styles.signup]}>회원가입 완료</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F3',
  },
  contents: {
    paddingLeft: 40,
    paddingRight: 40
  },
  row: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 80
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#707070',
    paddingLeft: 15
  },
  inputID: {
    width: 185,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 20,
    marginRight: 10,
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
  },
  input: {
    fontSize: 18,
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
  },
  btnDuplicate: {
    width: 85,
    height: 50,
    marginTop: 5,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
  btnSignup: {
    width: '100%',
    height: 50,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 30,
    backgroundColor: '#efb43e',
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
  btnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  duplicate: {
    fontSize: 16,
    color: '#efb43e'
  },
  signup: {
    color: '#FFFFFF'
  }
});

export default SignUp;