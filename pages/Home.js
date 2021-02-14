import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

function Home({navigation}) {
  const [list, setList] = React.useState({})

  fetch('http://localhost/videoApp/videoList.php')
  .then((response) => response.json())
  .then((json) => {
    setList()
  })
  .catch(error => alert(error))

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>홈이에유</Text>
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