import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

function Home({navigation}) {
  const [list, setList] = React.useState({});
  const [userID, setUserID] = React.useState();
  React.useEffect(() => {
    AsyncStorage.getItem('userID', (error, result) => {
      setUserID(result);
    });
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>아이디: {userID}</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F3',
  }
});

export default Home;