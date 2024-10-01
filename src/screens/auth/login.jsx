import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputField from '../../components/inputField';
import styles from '../../assets/styles/styles';
import LinearGradient from 'react-native-linear-gradient';

export default Login = ({navigation}) => {
  const [email, setEmail] = useState('aaaaa@aaa.aa');
  const [password, setPassword] = useState('Aaaaa@111');
  const [isCheck, setIsCheck] = useState(false);

  const emailPattern = /[a-zA-Z0-9\.\-_]+[@]+[a-z]+[\.]+[a-z]{2,3}/.test(email);
  const passwordPatter =
    /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(password);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.loginContainer}>
        <StatusBarCompo />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="star-four-points-outline" size={28} color="white" />
          <View style={styles.loginCreateLine}></View>
        </View>

        <View style={{flexDirection: 'row', paddingTop: 50}}>
          <Text style={styles.loginMainInfoTxt}>Log in to your account</Text>
          <Image
            style={styles.loginStarImg}
            source={require('../../assets/images/star-removebg-preview.jpg')}
          />
        </View>

        <Text style={styles.loginInfoText}>
          Welcomeback! Please enter your details.
        </Text>

        <View style={{flex: 1, marginTop: 70}}>
          <InputField
            name={'Email'}
            icon1={'mail'}
            placeHolder={'Enter your name'}
            getDataFromChild={useCallback(
              data => {
                setEmail(data);
                console.log(email);
              },
              [email],
            )}
          />
          {!emailPattern && (
            <Text style={{color: 'red', fontSize: 12}}>
              invalid email check again
            </Text>
          )}

          <InputField
            name={'Password'}
            icon2={'lock'}
            placeHolder={'Enter your password'}
            getDataFromChild={useCallback(
              data => setPassword(data),
              [password],
            )}
          />
          {!passwordPatter && (
            <Text style={{color: 'red', fontSize: 12}}>
              should have 1 capital letter, 1 symbol, 1 number, and minimum 8
              characters in length
            </Text>
          )}

          <View style={{flexDirection: 'row', paddingVertical: 15}}>
            <CheckBox
              value={isCheck}
              onValueChange={() => setIsCheck(!isCheck)}
              //for android
              tintColors={{true: 'white'}}
              //for iso
              tintColor={{true: 'white'}}
            />

            <Text style={[styles.loginInfoText, {marginTop: 4}]}>
              Remember for 30 days
            </Text>

            <TouchableOpacity style={{marginLeft: 45}}>
              <Text style={[styles.loginInputField, {marginTop: 4}]}>
                Forgot password ?
              </Text>
            </TouchableOpacity>
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#C74A41', '#7E3E87']}
            style={styles.loginGradientButton}>
            <TouchableOpacity style={styles.loginGradientButtonText}>
              <Text style={styles.loginInputFieldTxt}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
          <View style={[styles.registerBottomText,{marginTop:30}]}>
          <Text style={{color: '#fff'}}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text style={{color: '#fff'}}> Register</Text>
          </TouchableOpacity>
        </View>
        </View>

        {/* <View style={styles.loginBottomText}>
            <Text style={styles.loginInputFieldTxt}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.replace('register')}>
              <Text style={styles.loginInputFieldTxt}> Register</Text>
            </TouchableOpacity>
          </View> */}
        
      </View>
    </TouchableWithoutFeedback>
  );
};
