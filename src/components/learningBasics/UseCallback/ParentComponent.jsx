import React, {useCallback, useState} from 'react';
import {Text, View, Button as Pressable} from 'react-native';
import Title from './Title';
import Button from './Buttons';
import Count from './Count';
import Imagess from '../Image/imageCompo';
import UseCallaback from '../learningBasics/UseCallaback';

export default ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [sal, setSal] = useState(10000);
  const [name, setName] = useState('shiv');

  const incrementAge = useCallback(() => {
    console.log('btn 1 pressed');
    setAge(age=>age + 1);
  }, [age]);

  const incrementSal = useCallback(() => {
    console.log('btn 2 pressed');
    setSal(sal=>sal + 1);
  }, [sal]);

  // const incrementAge= ()=>{
  //     setAge(age+1)
  // }

  // const incrementSal=()=>{
  //     setSal(sal+1)
  // }

  return (
    <View style={{flex: 1}}>
      <Title />
      <Count text="Age" count={age}></Count>
      <Button handleClick={incrementAge}> </Button>
      <Count text="sal" count={sal}></Count>
      <Button handleClick={incrementSal}></Button>
      <UseCallaback>
        <Pressable title="button" onPress={() => setName('vivek')}></Pressable>
        <Text>{name}</Text>
      </UseCallaback>
      <Imagess />
    </View>
  );
};
