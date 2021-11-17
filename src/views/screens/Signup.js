import React from 'react';
import {Image,ScrollView, StyleSheet, Text, View , TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import COLORS from '../../consts/colors';


function Signup({navigation}) {
    return (
      <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1, alignItems: 'center', justifyContent: 'center' ,}}>
     


        
        <Text style={styles.mainStyled}> Hello! </Text>
  
        <Text style={{color:COLORS.primary}}> Register </Text>

        
        <View style={styles.buttonCatnew} >
          <TextInput style={{color:COLORS.primary, fontSize:15,paddingLeft:10, }} placeholder=' Name'/> 
          </View>
          <View style={styles.buttonCatnew} >
          <TextInput style={{color:COLORS.primary, fontSize:15,paddingLeft:10, }} placeholder=' Email'/> 
          </View>
          <View style={styles.buttonCatnew} >
          <TextInput style={{color:COLORS.primary, fontSize:15,paddingLeft:10, }}placeholder=' Telephone'/>
          </View>
          <View style={styles.buttonCatnew} >
          <TextInput  secureTextEntry={true} style={{color:COLORS.primary, fontSize:15,paddingLeft:10, }} placeholder=' Password'/>
          </View>
          <View style={styles.buttonCatnew} >
          <TextInput secureTextEntry={true} style={{color:COLORS.primary, fontSize:15,paddingLeft:10, }}  placeholder=' Verify Password'/>
          </View>
        
        
      
  
  
            <TouchableOpacity style={styles.buttonMain} onPress={() => navigation.replace('HomeScreen')}  >
            <Text  style={{color:"white", fontSize:18, fontWeight: 'bold', textAlign:'center'}}>Register</Text> 
            
            </TouchableOpacity>
  
            <Text style={{color:COLORS.primary, marginTop:20, }}> Have an account? <Text style={{fontWeight:'bold'}} onPress={() => navigation.push('Login')}  > Login</Text>  </Text>
          
  
  
  
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    buttonMain:{
  
        height:60, 
        justifyContent:'center',
        borderRadius:15, 
        backgroundColor:COLORS.primary, 
        alignSelf:"center", 
        textAlign: "center" ,
        width:"80%",
        marginTop:25,
        
      },
      buttonCatnew:{
        width:330,
        height:60,
        justifyContent:'center',
        borderRadius:15, 
        backgroundColor:"#fafafa",
        textAlign: "center" ,
        marginRight:10,
        marginLeft:10,
        marginTop:20,
        
      },

      mainStyle2:{
        height: 50, 
        width: "80%", 
        borderBottomWidth:1, 
        marginBottom:"5%", 
        fontSize: 20,
        },

      mainStyled:{
        height: 50,
        width: "80%",
        marginTop:"2%" , 
        textAlign:"center",
        fontSize: 40, 
        fontWeight: 'bold', color:"#262626",
        },

        
  });
  

  export default Signup;