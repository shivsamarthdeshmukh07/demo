import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const StateC = () => {
  const initialValue = [0, 1];
  const [fullName, setFullName] = useState([0, 1]);

  return (
    <View style={{flex: 1}}>
      <Text> {fullName} </Text>
      <Text> {initialValue} </Text>
      <TextInput
        placeholder="name"
        onChangeText={text => setFullName([...initialValue, text])}></TextInput>
    </View>
  );
};

export default StateC;
