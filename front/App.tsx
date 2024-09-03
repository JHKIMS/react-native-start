/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet,Text,TextInput,View } from 'react-native';
import AuthHomeScreen from './src/screens/AuthHomeScreen';
import AuthStackNavigator from './src/screens/navigation/AuthStackNavigator';

function App(): React.JSX.Element {
  const [name, setName] = useState('');

  const handleChangeInput = (text: string) => {
    setName(text);
  }
  return (
    // <SafeAreaView></SafeAreaView>는 노치 영역을 침범하지 않는 스타일을 위한 것임.
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    width: 100,
    height: 50,
  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'dodgerblue',
  }
});

export default App;
