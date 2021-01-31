/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 30px;
`;

const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const App: () => React$Node = () => {
  const [data, setData] = React.useState( [] );

  return (
    <>
      <Container>
        <Text> id: { data.id } </Text>
        <Text> password: { data.password } </Text>
        <Text> token: { data.token } </Text>
        <Button title="Get Data" onPress={ () => {
          fetch( "http://192.168.219.141:80/select.php" )
        //  .then( ( response ) => setData( response.json() ) )
          .then( ( response ) => response.json() )
          .then( ( json ) => setData( json ) )
        } } />
      </Container>
    </>
  );
};

export default App;
