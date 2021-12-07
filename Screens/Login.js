import React from "react";
import { Text, View, StyleSheet,TextInput} from "react-native";
import Texts from "../components/Text";
import Textinput from "../components/TextInput";
import Images from "../components/Image";
import { TouchableOpacity } from "react-native-gesture-handler";
import Buttons from "../components/Button";
import { Ionicons } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";

const Login = ({navigation}) => {

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
                <Text style={styles.text_header}>Login</Text>
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
                    name="eye-off-outline" 
                    size={24} 
                    color="black" 
                    />
                    :
                    <Ionicons 
                    name="eye-outline" 
                    size={24} 
                    color="black" 
                    />
                        }
                    </TouchableOpacity>
                </View>
                <View style={{width:'100%',marginTop:50}}>
                    <Buttons btext='Log In' backgroundColor='blue' fontSize={36} color='#fff' textAlign='center' borderRadius={10} onPress={()=>navigation.navigate('Login1')}/>
                </View>
                <Text style={{textAlign:'center',marginTop:10,color:'grey'}}>Don,t have an account</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                <Text style={{textAlign:'center',color:'blue',fontSize:18}}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={{textAlign:'center',color:'grey',marginTop:15}}>Or login with</Text>
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <TouchableOpacity>
                    <Images IMAGE={require('../images/google.png')} height={90} width={60} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Images IMAGE={require('../images/fb.png')} height={70} width={70} top={7}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}



export default Login;

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

 // <View style={{flex:1,backgroundColor:'#D3D3D3'}}>
        //     <View style={{flex:0.2,justifyContent:'center'}}>
        //     <Texts text='Log In' fontWeight='bold' fontSize={46}/>
        //     </View>
        //     <View style={{flex:0.8,backgroundColor:'#fff',borderTopEndRadius:10,borderTopStartRadius:10}}>
        //         <View style={{flex:0.2,}}>
        //         <Texts text='Your Email' fontSize={20}/> 
        //         <Textinput height={40} margin={10} padding={10} borderWidth={1} borderRadius={10} placeHolder='Enter your email address'/>
        //         </View>
        //         <View style={{flex:0.2,}}>
        //             <Texts text='Password' fontSize={20}/>
        //             <Textinput height={40} margin={10} padding={10} borderWidth={1} borderRadius={10} placeHolder='Enter the password'/>
        //             {/* <Ionicons name="eye-off-outline" size={24} color="black" /> */}
        //         </View>
        //         <View style={{flex:0.1,}}>
        //             <Buttons backgroundColor='blue' btext='Log In' textAlign='center' color='#fff' fontSize={24} margin={5}  borderRadius={10} height='90%' justifyContent='center' padding={3} onPress={() => navigation.navigate('Login1')}/>
                    
        //         </View>
        //         <View style={{flex:0.07,flexDirection:'row',justifyContent:'center'}}>
        //             <Texts text='Don,t have an account?' textAlign='center' color='grey' justifyContent='center'/>
        //             <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={{top:10}}>
        //             <Texts text='Signup' color='blue' textAlign='center' justifyContent='center'fontSize={15}/>
        //             </TouchableOpacity>
        //         </View>
        //         <View style={{flex:0.05,justifyContent:'center'}}>
        //             <Texts text='or login with' textAlign='center'/>
        //         </View>
                
        //     </View>
        // </View>