import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/auth/register'
import login from '../screens/auth/login';
import home from '../components/learningBasics/TapNavigation/home';
import notification from '../components/learningBasics/TapNavigation/notification';
import HomeTabs from '../components/learningBasics/TapNavigation/homeTabs';
import { Activity } from '../components/loader';
import ContextConsumer from '../components/learningBasics/ContextConsumer';

export default Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" >
      
        {/* <Stack.Screen
        options={{headerShown: false}}
        name="register" component={Register} />
        <Stack.Screen 
        options={{headerShown:false}}
        name='login' component={login}/> */}

        {/* <Stack.Screen name='act' component={Activity}/> */}
        <Stack.Screen name='act' component={ContextConsumer}/>

        


        {/* // Optional bottom tabbar   */}
        {/* <Stack.Screen name='home' component={HomeTabs} />
        <Stack.Screen name='notification' component={notification}/> */}
       

      </Stack.Navigator>
    </NavigationContainer>
  );
};
