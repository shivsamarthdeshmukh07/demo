import React, { memo, useState } from "react";
import { Button, Text, View } from "react-native";


const A1=(props)=>{
    
   
    const [count , setCount]=useState(0)
    console.log("a11!")

    return(
        <View style={{flex:1}}>
           
               <A2 value = {props}></A2>
             <Text>{count}</Text>
             <Button title="count increse" onPress={()=>setCount(count+1)}></Button>
        </View>
    )
}

export default memo(A1)