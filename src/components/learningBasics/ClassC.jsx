import React, { Component } from "react";
import { Button, View,Text, } from "react-native";

export default class ClassC extends Component{
    constructor(props){
        super(props);
        this.state={
            data : 0
        }
    }
componentDidUpdate(nextProps,nextState){
        console.log(nextState)
        console.log(this.state.data)
        return true
    }

    render(){
        return(
            <View>
                <Text> {this.state.data}</Text>
                <Button title="press" onPress={()=>{this.setState({data: this.state.data+1})}}/>
            </View>
        )
    }
}