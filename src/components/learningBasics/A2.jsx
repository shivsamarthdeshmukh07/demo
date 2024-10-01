import React, { memo, useState } from "react";
import {Button, Text ,View } from "react-native";


const A2 =()=>{
    console.log("a222")
    const [count , setCount]=useState(0)

    return(
        <View style={{flex:1}}>
       <Text>{count}</Text>
       <Button title="count increse" onPress={()=>setCount(count+1)}></Button>

        </View>
    )
}

export default memo(A2)