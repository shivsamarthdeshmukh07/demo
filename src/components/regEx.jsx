import React from "react";
import { Text, View } from "react-native";


export default RegEx = ({name,email,password,confirmPassword,gender,birthDate})=>{
      
    const namePattern= (/[a-zA-Z]{3,}/).test(name)
  const emailPattern = (/[a-zA-Z0-9\.\-_]+[@]+[a-z]+[\.]+[a-z]{2,3}/).test(email)
    const passwordPatter = (/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/).test(password)
   
    return(
        <View>

        {!emailPattern && <Text style={{color:"red",fontSize:12}}>invalid email check again</Text>}
        {gender && <Text>select from list</Text>}
        {birthDate && <Text>age should be minimum 12 year</Text>}
 
        


        </View>
    )
}