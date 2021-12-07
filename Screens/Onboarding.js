import React from "react"
import { StyleSheet, Text, View, Image,Button} from "react-native";
import Images from "../components/Image";
import Texts from "../components/Text";
import Swiper from "react-native-swiper";
import { TouchableOpacity } from "react-native-gesture-handler";
import Buttons from "../components/Button";
import Onboarding from "react-native-onboarding-swiper";
import Login from "./Login";

const dot = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? "blue" : "rgba(0, 0, 0, 0.3)";
    return(
        <View
        style={{
            width:10,
            height:5,
            marginHorizontal:3,
            borderRadius:5,
            backgroundColor
        }}
        />
    )
}

const Done = ({...props}) => (
    <Button
    title='Done'
    color='blue'
    {...props}
    />
)

const OnboardingScreen = ({navigation}) => {
    return(
        <View style={{flex:1}}>
    <Onboarding
        onSkip={()=>navigation.navigate('Signup')}
        onDone={()=>navigation.navigate('Signup')}
        DoneButtonComponent={Done}
        DotComponent={dot}
        titleStyles={{fontSize:30,fontWeight:'bold'}}
        pages={[
                {
    backgroundColor: '#fff',
    image: <Image source={require('../images/pic1.jpg')} />,
    title: 'Numerous free                          trial courses',
    subtitle: 'Free courses for you to find your way to                         learning',
    },
    {
    backgroundColor: '#fff',
    image: <Image source={require('../images/pic2.jpg')} />,
    title: 'Quick and easy                   learning',
    subtitle: 'Easy and fast learning at  any time to help you           improve various skills',
    },
    {
    backgroundColor: '#fff',
    image: <Image source={require('../images/pic3.jpg')} />,
    title: 'Create your own                           study plan',
    subtitle: 'Study according to the study plan,                                  make study more motivated',
    },
]}
/>
        </View>
//         <Swiper
//         // loop
//         // autoplay
//         activeDotStyle={{
//         width: "7%",
//         height: "100%",
//         backgroundColor: "blue",
//     }}
//     dot={
//         <View style={{height:"100%",width:'3%',backgroundColor:'lightgrey',borderRadius:5,margin:2}}></View>
//     }
//     paginationStyle={{ bottom: "18%" }}
//     >
// <View style={{flex:1,backgroundColor:'#fff'}}>
//         <View style={{ flex: 0.1 }}></View>
//         <View style={{flex:0.05,alignItems:'flex-end',right:25}}>
//             <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
//             <Texts text='Skip' color="grey"/>
//             </TouchableOpacity>
//         </View>
//         <View style={{flex:0.4,alignItems:'center'}}>
//             <Images IMAGE={require('../images/pic1.jpg')} height={200} width={200}/>
//         </View>
        
//         <View style={{flex:0.1,}}>
//             <Texts text='Numerous free' fontSize={28} textAlign='center' fontWeight='bold'/>
//             <Texts text='trial courses' fontSize={28} textAlign='center' fontWeight='bold'/>
//         </View>
//         <View style={{flex:0.04}}></View>
//         <View style={{flex:0.06,}}>
//             <Texts text='Free courses for you to' fontSize={18} textAlign='center' color='grey'/>
//             <Texts text='find your way to learning' fontSize={18} textAlign='center' color='grey'/>
//         </View>
//     </View>
    
//     <View style={{flex:1,backgroundColor:'#fff'}}>
//         <View style={{ flex: 0.1 }}></View>
//         <View style={{flex:0.05,alignItems:'flex-end',right:25}}>
//             <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
//             <Texts text='Skip' color="grey"/>
//             </TouchableOpacity>
//         </View>
//         <View style={{flex:0.4,alignItems:'center'}}>
//             <Images IMAGE={require('../images/pic2.jpg')} height={200} width={200}/>
//         </View>
        
//         <View style={{flex:0.1,}}>
//             <Texts text='Quick and easy' fontSize={28} textAlign='center' fontWeight='bold'/>
//             <Texts text='learning' fontSize={28} textAlign='center' fontWeight='bold'/>
//         </View>
//         <View style={{flex:0.04}}></View>
//         <View style={{flex:0.1,}}>
//             <Texts text='Easy and fast learning at' fontSize={18} textAlign='center' color='grey'/>
//             <Texts text='any time to help you' fontSize={18} textAlign='center' color='grey'/>
//             <Texts text='improve various skills' fontSize={18} textAlign='center' color='grey'/>
//         </View>
//     </View>
//     <View style={{flex:1,backgroundColor:'#fff'}}>
//         <View style={{ flex: 0.1 }}></View>
//         {/* <View style={{flex:0.05,alignItems:'flex-end',right:25}}>
//             <TouchableOpacity>
//             <Texts text='Skip' color="grey"/>
//             </TouchableOpacity>
//         </View> */}
//         <View style={{flex:0.36,alignItems:'center',}}>
//             <Images IMAGE={require('../images/pic3.jpg')} height={200} width={200}/>
//         </View>
        
//         <View style={{flex:0.1,}}>
//             <Texts text='Create your own' fontSize={28} textAlign='center' fontWeight='bold'/>
//             <Texts text='study plan' fontSize={28} textAlign='center' fontWeight='bold'/>
//         </View>
//         <View style={{flex:0.04}}></View>
//         <View style={{flex:0.1,}}>
//             <Texts text='study according to the' fontSize={18} textAlign='center' color='grey'/>
//             <Texts text='study plan, make study' fontSize={18} textAlign='center' color='grey'/>
//             <Texts text='more motivated' fontSize={18} textAlign='center' color='grey'/>
//         </View>
//         <View style={{flex:0.15}}></View>
//         <View style={{flex:0.1,flexDirection:'row',justifyContent:'space-evenly'  }}>
//             <Buttons btext='Sign up' fontSize={38} backgroundColor='blue' textAlign='center' alignSelf='center' color='#fff' borderRadius={10} onPress={()=>navigation.navigate('Signup')}/>
//             <Buttons btext='Log in' fontSize={38}  textAlign='center' alignSelf='center' color='blue' borderRadius={10} borderColor='blue' borderWidth={2} onPress={()=>navigation.navigate('Login')}/>
//         </View>
//     </View>
//     </Swiper>
    )
    }

    export default OnboardingScreen;