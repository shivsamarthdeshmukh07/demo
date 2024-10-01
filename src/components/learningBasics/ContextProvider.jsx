import React, { createContext } from "react";
import { Appearance, Text, View } from "react-native";
import ContextConsumer from "./ContextConsumer";


export const UserContext = createContext()
export const UserContext1 = createContext()

export default ContextProvider=()=>{
    return(
      <View>
        <UserContext.Provider value={"shiv"}>
           <UserContext1.Provider value={"abc"}>
              <ContextConsumer/>
              </UserContext1.Provider>
        </UserContext.Provider>
      </View>

    )
}