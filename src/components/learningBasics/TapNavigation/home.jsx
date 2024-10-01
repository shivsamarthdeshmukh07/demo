import React from "react";
import { Button, View } from "react-native";

export default Home =({navigation})=>{
    return(

        <View>
              <Button title="Profile" onPress={()=>navigation.navigate("Profile")}></Button> 
              <Button title="notification" onPress={()=>navigation.navigate("notification")}></Button> 

            

        </View>
    )
}