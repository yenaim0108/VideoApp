import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

function Home (props) {
  const [list, setList] = React.useState([]);
  const n = '318268'
  React.useEffect(() => {
    fetch('http://192.168.0.29:80/videoApp/videoList.php')
      .then(response => response.json())
      .then(json => {
        setList(json);
      })
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {list.map(item => (
          <TouchableOpacity key={item.idx} onPress={() => { alert(item.link) }}>
            <Image style={styles.img} source={{ uri: item.thumbnail }} />
            <View style={styles.contensBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subTitle}>조회수 {item.views.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}회 · {item.upload.split(' ')[0]}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F3',
  },
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  contensBox: {
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    color: '#202020'
  },
  subTitle: {
    fontSize: 15,
    color: '#707070',
    marginTop: 5
  }
});

export default Home;