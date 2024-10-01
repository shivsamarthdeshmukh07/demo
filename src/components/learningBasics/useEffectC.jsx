import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import Flexss from "./Flexss";

export default useEffectC=()=>{
    const [count,setCount]=useState(0)
    const [color,setColor]=useState(true)
    useEffect(()=>{
       
       console.log("useEffect")
      const id= setInterval(()=>{console.log("time.....")},2000)

       return ()=>{
        console.log("byeeeeeeeeeeee")
        clearInterval(id)
       }
    },[count])
    
    return(
        <View style={{flex:1,backgroundColor:color?"red":"white"}}>
        <Text>{ count }</Text>
          <Button title="count" onPress={()=>{setCount(count+1)}}></Button>
         
          </View>
    )
}