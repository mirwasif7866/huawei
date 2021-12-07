import React,{useState} from "react";
import { TextInput, View } from "react-native";

const Textinput = (props) => {
    const [text, settext] = useState('')
    const {placeHolder,
        height,
        margin,
        borderWidth,
        padding,
        borderRadius,
        width,
        keyboardType,
        secureTextEntry} = props
    return(
        <View>
            <TextInput
            style={{
                height: height,
                margin: margin,
                borderWidth: borderWidth,
                padding: padding,
                borderRadius:borderRadius,
                width:width,
            }}
            onChangeText={settext}
            value={text}
            placeholder={placeHolder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
}



export default Textinput;