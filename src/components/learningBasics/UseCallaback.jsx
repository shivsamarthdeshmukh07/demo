import React, { memo, useState } from "react";
import { Button, Image, ScrollView, Text } from "react-native";
import Imagess from "../Image/imageCompo";
import Flexss from "./Flexss";
import StateC from "./StateC";
import A1 from "./A1";
import A2 from "./A2";

export default UseCallback=memo(({children})=>{
      console.log('child rendering')
    return(
        <ScrollView>
           <A1 name={'vivek'}/>
           <A2/>
           {/* {children} */}
        </ScrollView>
    )

})