import React, { useEffect, useRef } from "react";
import { Button, Text, TextInput, View } from "react-native";


export default FocusInput=()=>{
    const inputRef = useRef("shiv")
     let mutableRef = useRef(0)

     console.log(mutableRef.current)
    useEffect(()=>{
            console.log(inputRef.current)
         inputRef.current.focus()
    },[])
    const increament =()=>{
    
        console.log(mutableRef.current)
    }
  
    return(
        <View>
            <Text>{mutableRef.current}</Text>
            <TextInput ref={inputRef}></TextInput>
            <Button title="press" onPress={increament}></Button>
        </View>
    )
}