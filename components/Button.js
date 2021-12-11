// sign in button = S-button
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity} from "react-native";
import { color } from "react-native-reanimated";

const Buttons=(props)=>{
    const {
        btext,
        onPress,
        fontSize,
        color,
        textAlign,
        backgroundColor,
        alignSelf,
        borderRadius,
        borderWidth,
        borderColor,
        margin,
        padding,
        height,
        width,
        justifyContent,
        alignItems,
        alignContent,
        // alignSelf
    } = props
return (
    <View>
        <TouchableOpacity onPress={onPress} style={{backgroundColor:backgroundColor,alignSelf:alignSelf,borderRadius:borderRadius,borderWidth:borderWidth,borderColor,margin:margin,padding:padding,height:height,width:width,justifyContent:justifyContent,alignItems:alignItems,alignSelf:alignSelf,alignContent:alignContent}}>
        <View>
    <Text style={{color:color,fontSize:fontSize,textAlign:textAlign}}>{btext}</Text>
    </View>
        </TouchableOpacity>
    {/* <StatusBar style='auto' /> */}
    </View>
);
}




export default Buttons;