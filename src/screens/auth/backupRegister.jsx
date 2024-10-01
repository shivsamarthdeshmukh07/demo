import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import InputField from '../../components/inputField';
import styles from '../../assets/styles/styles';
import BackIcon from 'react-native-vector-icons/Ionicons';
import StatusBarCompo from '../../components/StatusBarCompo';
import DropDownComp from '../../components/dropDown';
import DatePicker from '../../components/datePicker';
import LinearGradient from 'react-native-linear-gradient';

export default Register = ({navigation}) => {
  const [name, setName] = useState('aaa');

  const [email, setEmail] = useState('aaaaa@aaa.aa');

  const [password, setPassword] = useState('Aaaaa@111');

  const [confirmPassword, setConfirmPassword] = useState('Aaaaa@111');

  const [gender, setGender] = useState('male');

  const [birthDate, setBirthDate] = useState('2010-07-15T13:29:15.524486Z');

  const age = Math.ceil(
    [(new Date() - new Date(birthDate)) / (1000 * 60 * 60 * 24)] / 365,
  );

  const backIcon = <BackIcon name="arrow-back" size={25} color="white" />;

  const namePattern = /[a-zA-Z]{3,}/.test(name);
  const emailPattern = /[a-zA-Z0-9\.\-_]+[@]+[a-z]+[\.]+[a-z]{2,3}/.test(email);
  const passwordPatter =
    /^(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/.test(password);

  return (
    //  <KeyboardAvoidingView style={{flex:1}}>
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{flex: 1}}>
      <ScrollView style={styles.registerContainer}>
        <StatusBarCompo />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('login')}>
            {backIcon}
          </TouchableWithoutFeedback>
          <View style={styles.registerCreateLine}></View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.registerMainInfoTxt}>Create an account</Text>
          <Image
            style={styles.registerStarImg}
            source={require('../../assets/images/star-removebg-preview.jpg')}
          />
        </View>
        <Text style={styles.registerInfoText}>
          Welcome! Please enter your detailsss.
        </Text>
        {/* {console.log(name,"<----")} */}
        <InputField
          name={'Name'}
          icon={'user-circle-o'}
          placeHolder={'Enter your name'}
          getDataFromChild={useCallback(
            data => {
              setName(data);
              // console.log(name)
            },
            [name],
          )}
        />
        {!namePattern && (
          <Text style={styles.registerWarning}>
            name should have more than 3 letters
          </Text>
        )}
        <InputField
          name={'Email'}
          icon1={'mail'}
          placeHolder={'Enter your name'}
          getDataFromChild={useCallback(
            data => {
              setEmail(data);
              // console.log(email)
            },
            [email],
          )}
        />
        {!emailPattern && (
          <Text style={styles.registerWarning}>invalid email check again</Text>
        )}

        <InputField
          name={'Password'}
          icon2={'lock'}
          placeHolder={'Enter your password'}
          getDataFromChild={useCallback(data => setPassword(data), [password])}
        />
        {!passwordPatter && (
          <Text style={styles.registerWarning}>
            should have 1 capital letter, 1 symbol, 1 number, and minimum 8
            characters in length
          </Text>
        )}

        <InputField
          name={'Confirm Password'}
          icon2={'lock'}
          placeHolder={'Confirm password'}
          getDataFromChild={useCallback(
            data => setConfirmPassword(data),
            [confirmPassword],
          )}
        />
        {password !== confirmPassword ? (
          <Text style={styles.registerWarning}>password do not match</Text>
        ) : null}

        <View style={{zIndex: 1}}>
          <DropDownComp
            getDataFromChild={useCallback(data => setGender(data), [gender])}
          />
        </View>
        {!gender && (
          <Text style={styles.registerWarning}>select from list</Text>
        )}

        <DatePicker getDataFromChild={data => setBirthDate(data)} />
        {age < 12 && (
          <Text style={styles.registerWarning}>
            age should be minimum 12 year
          </Text>
        )}
 
        

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#C74A41', '#7E3E87']}
          style={styles.registerGradientButton}>
          <TouchableOpacity style={styles.registerGButtonText}>
            <Text style={styles.registerButtonTxt}>Register</Text>
          </TouchableOpacity>
        </LinearGradient>
       
        <View style={styles.registerBottomText}>
          <Text style={{color: '#fff'}}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={{color: '#fff'}}> Login</Text>
          </TouchableOpacity>
        </View>
       
      </ScrollView>
    </View>

    //   {/* </TouchableWithoutFeedback>
    // </KeyboardAvoidingView> */}
  );
};
