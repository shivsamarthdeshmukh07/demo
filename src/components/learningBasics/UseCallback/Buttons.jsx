import React, { memo } from "react";
import {View, Button } from "react-native";

const Buttons=({handleClick})=>{
    console.log("button")
    return(
        <View>
             <Button title="press" onPress={handleClick}></Button>
        </View>
    )
}

export default memo(Buttons)