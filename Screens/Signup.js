import React from "react";
import { Text, View, StyleSheet,TextInput} from "react-native";
import Texts from "../components/Text";
import Textinput from "../components/TextInput";
import Images from "../components/Image";
import { TouchableOpacity } from "react-native-gesture-handler";
import Buttons from "../components/Button";
import { Ionicons } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";

const Signup = ({navigation}) => {

    const [data, setData] = React.useState({
        check_textInputChange:false,
        secureTextEntry:true
    }) 

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password:val
        })
    } 

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Sign up</Text>
                <Text style={{color:'grey'}}>Enter your details below & sign up</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>your Email</Text>
                <View style={styles.action}>
                    <Textinput placeHolder='Enter your Email' style={styles.textinput}/>
                </View>
                <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
                <View style={[styles.action,{justifyContent:'space-between'}]}>
                    <TextInput 
                    placeholder='Enter the Password' 
                    style={styles.textinput} 
                    secureTextEntry={data.secureTextEntry ? true : false}
                    onChangeText={(val)=>handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? 
                    <Ionicons 
                    name="eye-outline" 
                    size={24} 
                    color="black" 
                    />
                    :
                    <Ionicons 
                    name="eye-off-outline" 
                    size={24} 
                    color="black" 
                    />
                        }
                    </TouchableOpacity>
                </View>
                <View style={{width:'100%',marginTop:50}}>
                    <Buttons btext='Sign up' backgroundColor='blue' fontSize={36} color='#fff' textAlign='center' borderRadius={10} onPress={()=>navigation.navigate('Login2')}/>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={{textAlign:'center',marginTop:35,color:'grey'}}>Already have an account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default Signup;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#D3D3D3"
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50,
    },
    footer:{
        flex:5,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30,
    },
    text_header:{
        color:'#000',
        fontWeight:'bold',
        fontSize:30
    },
    text_footer:{
        color:"#05375a",
        fontSize:18
    },
    action:{
        flexDirection:"row",
        marginTop:10,
        borderBottomWidth:1,
        borderColor:'#f2f2f2',
        paddingBottom:5
    },
    textinput:{
        flex:1,
        paddingLeft:10,
        color:'#05375a'
    },
})
