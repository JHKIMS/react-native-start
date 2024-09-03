/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Button, SafeAreaView, StyleSheet,Text,TextInput,View } from 'react-native';

function App(): React.JSX.Element {
  return (
    // <SafeAreaView></SafeAreaView>는 노치 영역을 침범하지 않는 스타일을 위한 것임.
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
        <Text>Test</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
        <Text>Test</Text>
      </View>
    </SafeAreaView>
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
    height: 100,
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
