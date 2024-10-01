import React, { memo, useState } from "react";
import { Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "../assets/styles/styles";
import Icon from  'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from "react-native-linear-gradient";


export default DropDownComp=memo(({getDataFromChild})=>{
    const [isOpen,setIsOpen]=useState(false)
    const [currentVal,setCurrentVal]=useState("byeeee")
    const genderIcon =<Icon name="gender-male-female" size={20} style={styles.iconStyle}/>
    
    const data =[{label:"Male",value:"male"},
        {label:"Female",value:"female"},
        {label:"Prefer not to say",value:"other"}

    ]
   console.log("drop")
   
    return(
    <View style={{marginTop:2,}}>
        <Text style={styles.inputFieldTxt}>Gender</Text>
      <LinearGradient  colors={isOpen?["#C74A41", "#7E3E87"]:["#626262", "#292828"]} style={styles.linearGradientStyle}>
       

        <View style={{flexDirection:'row',backgroundColor:"black"}}>
           {genderIcon}
        <DropDownPicker 
        listItemContainerStyle={{backgroundColor:'black'}}
        selectedItemContainerStyle={{backgroundColor:"gray"}}
        textStyle={{color:"white"}}
        labelStyle={{color:"white",backgroundColor:"black"}}
        containerStyle={{
          width:328
        }}
      //  labelStyle={{backgroundColor:"black"}}
      //  dropDownStyle={{backgroundColor: 'black'}}
        style ={{backgroundColor:"black"}}
        items={data}
        setOpen={()=>setIsOpen(!isOpen)}
        open={isOpen}
        value={currentVal}
        setValue={value =>{ getDataFromChild(value),setCurrentVal(value)}}
        disableBorderRadius={false}
        onPress={()=>(getDataFromChild(""))}
     
        
        
      //  dropDownDirection="TOP"
         
       placeholder="Select the gender"
       placeholderStyle={{color:"#969696"}}
        />
        </View>
        </LinearGradient>
        </View>
    )
})