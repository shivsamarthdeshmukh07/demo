import React, { useState } from "react";
import { Image, Text, View,ScrollView, ImageBackground, TextInput, Button, KeyboardAvoidingView } from "react-native";

export default ImageCompo =(props)=>{
    const [name ,setName] = useState()
    console.log(props);
    const press=()=>{
        console.log(name)
    }
    return(
        <KeyboardAvoidingView style={{flex:1,borderWidth:5}}>
        
        {/* <View style={{,flex:1,marginBottom:50}}> */}
     
            <Image 
             style={{height:200}}
            //source={require('../assets/images/car.avif')}
            source={{uri:'https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?size=626&ext=jpg&uid=R161452794&ga=GA1.1.429095624.1724928827&semt=ais_hybrid'}}
            
            />
            <Image 
             style={{height:200}}
            //source={require('../assets/images/car.avif')}
            source={{uri:'https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?size=626&ext=jpg&uid=R161452794&ga=GA1.1.429095624.1724928827&semt=ais_hybrid'}}
            
            />
            {/* <Image 
             style={{height:200}}
            //source={require('../assets/images/car.avif')}
            source={{uri:'https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?size=626&ext=jpg&uid=R161452794&ga=GA1.1.429095624.1724928827&semt=ais_hybrid'}}
            
            /> */}
{/*            
            <Image 
             style={{height:200}}
            //source={require('../assets/images/car.avif')}
            source={{uri:'https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?size=626&ext=jpg&uid=R161452794&ga=GA1.1.429095624.1724928827&semt=ais_hybrid'}}
            
            /> */}
            <View style={{flex:1, justifyContent:'flex-end'}}>
            <TextInput style={{height:50,}}
            placeholder="enter"
            onChangeText={(text)=>{setName(text)}}
            ></TextInput>
            </View>
           

            {/* <Image 
            style={{height:200,width:'100%'}}
            source={require('../assets/images/M7yj.gif')}
            resizeMode="stretch"
            /> */}
            <Button title="press" onPress={press}></Button>
            {/* <Button title=""></Button> */}
            {/* <Text>hiiiiii {route.params.name}</Text> */}

           
        {/* </View> */}
        </KeyboardAvoidingView>
        
    )
}