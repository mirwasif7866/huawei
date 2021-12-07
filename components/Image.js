import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

const Images=(props)=>{
    const {IMAGE,height,width,top} = props
return (
    <View>
        <View>
    <Image source={IMAGE}
    style={{height:height,width:width,top:top}}
    />
    </View>
    {/* <StatusBar style='auto' /> */}
    </View>
);
}


export default Images;