import React, { useEffect, useRef, useState } from "react";
import { Button, Text, View } from "react-native";

export default TimerUserRef=()=>{
    const [ time , setTime]=useState(0);
     const timerRef =useRef(null);
    useEffect(()=>{
      timerRef.current = setInterval(()=>{
        setTime(time => time+1)
      },1000)
      return()=>{
        clearInterval(timerRef.current)
      }
    })

     return(
        <View>
            <Text>{time}</Text>
            <Button title="reset" onPress={()=>setTime(0)} ></Button>
            <Button title="stop" onPress={()=>clearInterval(timerRef.current)}></Button>

        </View>
     )
}