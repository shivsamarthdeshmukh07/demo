import React, { useContext } from "react";
import { UserContext, UserContext1 } from "./ContextProvider";
import { Text, View } from "react-native";



export default ContextConsumer=()=>{
    const u = useContext(UserContext)
    const a = useContext(UserContext1)
    return(
        // <UserContext>
        //     {
        //         user => {
        //      return   <Text>hiii {user}</Text>
        //         }
        //      }
        // </UserContext>
         <View>
            <Text>{u},{a}</Text>
         </View>


    )
}