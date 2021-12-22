import React,{useState} from "react";
import { Text, View, StyleSheet, Modal, Pressable} from "react-native";
import { TextInput, TouchableOpacity} from "react-native-gesture-handler";
import Buttons from "../components/Button";
import Texts from "../components/Text";
import Textinput from "../components/TextInput";
import Images from "../components/Image";
import { AntDesign } from "@expo/vector-icons";

const Login2 = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',top:20}}>
                    <View style={{right:'350%'}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login1')}>
                    <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                    </View>
            <Texts text='Verify Phone' fontWeight='bold' fontSize={24}/>
            </View>
            </View>
            <View style={{flex:5,}}>
                <Text style={{textAlign:'center', fontSize:20}}>Code is sent to ...</Text>
                <View>
                    <Textinput placeHolder='Enter code...' borderWidth={1} height={40} margin={10} borderRadius={10} padding={10} secureTextEntry={true}/>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login1')}>
                    <Text style={{margin:15}}>Didn,t receive code?</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Buttons backgroundColor='blue' height={50} width={250} alignSelf='center' borderRadius={10} btext='Verify and create account' textAlign='center' justifyContent='center' color='#fff' fontSize={20} onPress={()=>setModalVisible(true)}/>
                </View>
            </View>
                <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
        }}
    >
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <AntDesign name="checkcircle" size={70} color="blue" />
            <Text style={styles.modalText}>Success</Text>
            <Text style={{color:'grey'}}>congratulation, you have </Text>
            <Text style={{color:'grey'}}>completed your registration!</Text>
            <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
            >
            <Text style={styles.textStyle}>Done</Text>
            </Pressable>
        </View>
        </View>
    </Modal>
        </View>
    )
}



export default Login2;

const styles = StyleSheet.create({
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22
    },
    modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    height:"30%",
    width:'80%',
    shadowOffset: {
    width: 0,
    height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    },
    button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width:250,
    top:10,
    },
    buttonOpen: {
    backgroundColor: "#F194FF",
    },
    buttonClose: {
    backgroundColor: "#2196F3",
    },
    textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:26
    },
    modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:18,
    top:5,
    fontWeight:'bold'
    }
});