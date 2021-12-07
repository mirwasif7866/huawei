import React from "react";
import { View, Text} from "react-native";

const Texts = (props) => {
    const { text, color, fontSize, textAlign, fontWeight, justifyContent, padding, top} = props;

    return(
        <View style={{justifyContent:justifyContent}}>
            <Text style={{color:color,fontSize:fontSize,textAlign:textAlign,fontWeight:fontWeight,padding:padding,top:top}}>{text}</Text>
        </View>
    )
}



export default Texts;