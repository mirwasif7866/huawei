import React from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Buttons from "../components/Button";
import Texts from "../components/Text";
import Textinput from "../components/TextInput";
import Images from "../components/Image";
import { AntDesign } from "@expo/vector-icons";

const Login2 = ({navigation}) => {
    return(
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <View style={{right:'350%'}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login1')}>
                    <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                    </View>
            <Texts text='Verify Phone' fontWeight='bold' fontSize={24}/>
            </View>
            </View>
        </View>
    )
}



export default Login2;