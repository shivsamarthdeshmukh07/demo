import React, { memo } from "react";
import { Text, View } from "react-native";

const Count=({text,count})=>{
    console.log(`redering ${text}`)
    return(
        <View>
             <Text>{text}-{count}</Text>
        </View>
    )
}

export default memo(Count)