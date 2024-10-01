import React, { memo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import DateTimePicker from "react-native-modal-datetime-picker";
import DateIcon from  'react-native-vector-icons/Fontisto'
import styles from "../assets/styles/styles";


export default DatePicker =memo(({getDataFromChild})=>{
    const [isVisible,setIsVisible]=useState(false);
    const [showDate,setShowDate]=useState("Select your birth date");


    const dateIcon =<DateIcon name="date" size={20} style={styles.iconStyle}/>
    console.log("datePicker") 
    const confirmDate=(date)=>{
       
        
        const tempDate=new Date(date)
        const dateSplit= tempDate.toDateString().split(' ')
       
        const dateStringFormat = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[3]}`
        
        
        setShowDate(dateStringFormat)

        getDataFromChild(tempDate)
       
    }
    return(
        <View style={{marginTop:2,}}>
            <Text style={styles.inputFieldTxt}>Date of Birth</Text>
            <LinearGradient  colors={isVisible?["#C74A41", "#7E3E87"]:["#626262", "#292828"]} style={[styles.linearGradientStyle]}>
              
        <View style={{flexDirection:'row',backgroundColor:"black"}}>
              {dateIcon}
            <TouchableOpacity onPress={()=>setIsVisible(!isVisible)}
                style={{flex:1,height:50,backgroundColor:"black",justifyContent:"center"}}>
                    <Text style={styles.inputFieldTxt} >{showDate}</Text>
                    </TouchableOpacity>
            <DateTimePicker
            mode="date"
            isVisible={isVisible}
            onConfirm={(date)=>confirmDate(date)}
            onCancel={()=>setIsVisible(!isVisible)}
            
            //To use the new iOS 14 style of datetime picker, set the display prop to inline:
            display="inline"
            
            
            />
            </View>
            </LinearGradient>
        </View>
    )
})