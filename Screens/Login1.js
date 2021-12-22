import React from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Buttons from "../components/Button";
import Texts from "../components/Text";
import Textinput from "../components/TextInput";
import Images from "../components/Image";
import { AntDesign } from "@expo/vector-icons";

const Login1 = ({navigation}) => {
    return(
        <View style={{flex:1,backgroundColor:'#D3D3D3'}}>
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',top:20}}>
                    <View style={{right:'220%'}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <AntDesign name="left" size={24} color="black" />
                    </TouchableOpacity>
                    </View>
            <Texts text='Continue with phone' fontWeight='bold' fontSize={24}/>
            </View>
            <View style={{}}></View>
            <View style={{alignItems:'center',marginTop:35}}>
            <Images IMAGE={require('../images/phone.jpg')} height={120} width={120} top={30}/>
            </View>
            </View>
            <View style={{flex:2,backgroundColor:'#fff',borderTopEndRadius:30,borderTopStartRadius:30}}>
                <View style={{flex:0.1,justifyContent:'center'}}>
                    <Texts text='Enter Your Phone Number' fontSize={18} textAlign='center' color='grey'/> 
                </View>
                <View style={{flex:0.4,flexDirection:'row'}}>
                    <View style={{flex:0.9,left:10}}>
                <Textinput height={"50%"} width={"100%"} margin={10} padding={10} borderWidth={1} borderRadius={10} placeHolder='Phone No...' keyboardType='numeric'/>
                    </View>
                <View style={{flex:0.9,}}>
                <Buttons   height={"50%"} width={"80%"} margin={10} btext='Continue' fontSize={20} color='white' textAlign='center' justifyContent='center' borderRadius={10} backgroundColor='blue' onPress={()=>navigation.navigate('Login2')}/>
                </View>
                </View>
            </View>
        </View>
    )
}



export default Login1;