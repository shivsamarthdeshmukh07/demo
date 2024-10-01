import React, { useState } from "react";
import { Button, View } from "react-native";
import UseEffectC from "./learningBasics/useEffectC";

export default Claenup=({navigation})=>{

    const [mount ,setMount]=useState(true)
    return(
    <View style={{flex:1}}>
        <Button title="press" onPress={()=>{setMount(false)}}></Button>
        {mount&&<UseEffectC/>}  
        <Button title="next" onPress={()=>{navigation.navigate("car")}}></Button>
    </View>

    )
}