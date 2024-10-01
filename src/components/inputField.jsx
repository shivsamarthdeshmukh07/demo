import React, {memo, useState} from 'react';
import {TextInput, View, Text, Pressable} from 'react-native';
import styles from '../assets/styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

export default InputField = memo(({name, icon, icon1, icon2, placeHolder,getDataFromChild}) => {
  // const [input, setInput] = useState('shiv');
  // const [out, setOut] = useState('');

  const [inputFocus, setInputFocus] = useState(false);
  const [showPassword, setShowPaaword] = useState(true);
  const userIcon = 
      <Icon 
         name={icon} 
         size={20} 
         style={styles.iconStyle} 
         />;
  const userIcon1 = <Icon1
          name={icon1} 
          size={20} 
          style={styles.iconStyle} 
          />;
  const userIcon2 = <Icon2 
          name={icon2} 
          size={20} 
          style={styles.iconStyle} 
          />;
  const userIcon3 = (
    <Icon3
      name={showPassword ? 'eye' : 'eye-with-line'}
      size={20}
      style={styles.iconStyle}
    />
  );
  
   console.log("inputField")
  return (
    <View >
      <Text style={styles.inputFieldTxt}>{name}</Text>
      <LinearGradient
        colors={inputFocus ? ['#C74A41','#7E3E87'] : ['#626262', '#292828']}
        style={styles.linearGradientStyle}>
        <View
          style={{
            flexDirection: 'row',
            

            backgroundColor: 'black',
            borderRadius: 5,
          }}>
          {icon && userIcon}
          {icon1 && userIcon1}
          {icon2 && userIcon2}

          <TextInput
            style={[styles.inputField]}
            placeholder={placeHolder}
            secureTextEntry={icon2 && showPassword}
            placeholderTextColor="#969696"
            onChangeText={(text)=>getDataFromChild(text)}
            onFocus={() => {
              setInputFocus(!inputFocus);
             
            }}
            onBlur={() => {
              setInputFocus(!inputFocus);
            }}
            
          />
          {icon2 && (
            <Pressable
              onPress={() => setShowPaaword(!showPassword)}
              style={styles.iconStyle}>
              {userIcon3}
            </Pressable>
          )}
        </View>
      </LinearGradient>
    </View>
  );
});
