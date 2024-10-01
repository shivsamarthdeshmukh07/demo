import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import home from "./home";
import profile from "./profile";
import { Text } from "react-native";

const Tap = createBottomTabNavigator();

export default HomeTabs=()=>{
    return(
  
        <Tap.Navigator>
            <Tap.Screen name="Home" component={home}
            options={{tabBarIcon:({tintColor})=>(<Text>Home</Text>)}}/>
            <Tap.Screen name="Profile" component={profile}
               options={{tabBarIcon:({tintColor})=>(<Text>Profile</Text>)}}/>
        </Tap.Navigator>




    )
}