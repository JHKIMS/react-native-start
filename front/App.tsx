/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet,Text,TextInput,View } from 'react-native';

function App(): React.JSX.Element {
  const [name, setName] = useState('');

  const handleChangeInput = (text: string) => {
    setName(text);
  }
  return (
    // <SafeAreaView></SafeAreaView>는 노치 영역을 침범하지 않는 스타일을 위한 것임.
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={handleChangeInput} value={name}/>
        <Text>이름</Text>
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
