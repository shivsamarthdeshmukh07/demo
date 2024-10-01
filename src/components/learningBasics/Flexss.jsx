import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

export default Flexss=()=>{

    return(
        <View style={{flex:1, position:"relative"}}>
        <View style={{ borderWidth:1, rowGap:10,height:200,backgroundColor:"purple"}}>
             <Text style={[styles.box,{backgroundColor:"red",}]}></Text>
             <Text style={[styles.box,{backgroundColor:"red"}]}></Text>

             <Text style={[styles.box,{backgroundColor:"black"}]}></Text>
             <Text style={[styles.box,{backgroundColor:"red"}]}></Text>
             
             <Text style={[styles.box,{backgroundColor:"black"}]}></Text>
             <View style={{ borderWidth:1, height:200,backgroundColor:"yellow"}}>
             <Text style={[styles.box,{backgroundColor:"black",position:"absolute", top:100,left:100}]}></Text>

        </View>
             <Text style={[styles.box,{backgroundColor:"red",}]}></Text> 
              <Text style={[styles.box,{backgroundColor:"yellow"}]}></Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
       
       width:50,
       height:50
     
      
     
    }
})