import React from 'react';
import { Alert, StyleSheet, Text, View , TextInput, TouchableOpacity, Image,ScrollView} from 'react-native';
import COLORS from '../../consts/colors';




const showAlert = ({navigation}) =>
  Alert.alert(
    "Purchase Succesful",
    "Congratulations!! You have successfully purchased your items.",
    [
      {
        text: "Done",
        
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

function Checkout({navigation}) {

    const [input,setInput,] = React.useState("");
    
    return (

        <View style={styles.Checkout}>
            
            <Text style={{textAlign:'center', paddingBottom:10,}}> Fill the forms to complete transaction </Text>
            
            
            <Text style={{ textAlign:'center', fontSize:20,fontWeight:'bold'}}> Enter Card Details </Text>
            
            <Text style={styles.cardStyle}> CARD NAME </Text>
            <View style={styles.buttonCatnew}  >
            <TextInput 
            style={{color:"black", fontSize:15,paddingLeft:10, }}
            value={input}
            onChangeText={(text)=> setInput(text)}
            onSubmitEditing={() => {
                alert("Your Card Name is: + {value} ");
                setInput('');
            }}
            placeholder=' Enter Card Name '
            />
            </View>
            
            <Text style={styles.cardStyle}> CARD NUMBER </Text>
            <View style={styles.buttonCatnew} >
            <TextInput keyboardType="default" style={{color:"black", fontSize:15,paddingLeft:10, }} placeholder=' Enter Card Number ' />
            </View>

            <View style={styles.categories}>
                <View>
                <Text style={styles.cardStyle}> EXPIRY DATE </Text>
                <TouchableOpacity style={styles.buttonCat} >
                <TextInput style={{color:"black", fontSize:15,paddingLeft:10, }} placeholder=' Enter Date '  />
                </TouchableOpacity>
                </View>

                <View>
                <Text style={styles.cardStyle}> CVV </Text>
                <TouchableOpacity style={styles.buttonCat} >
                <TextInput codeLength={3} keyboardType='numeric' style={{color:"black", fontSize:15,paddingLeft:10, }} placeholder=' Enter CVV '  />
                </TouchableOpacity>
                </View>
                        
            </View>

            <View style={styles.categories}>
                <View>
                <Text style={{fontSize:20,paddingTop:40,paddingLeft:30,}}> Payment Amount  </Text>
                </View>

                <View>
                <Text style={{fontSize:25,paddingTop:37,paddingLeft:20, fontWeight:'bold', color:COLORS.red,}}> $1200.00 </Text>
                </View>
                        
            </View>

            <TouchableOpacity style={styles.button2} onPress={showAlert} >
            <Text 
            style={{color:"white", fontSize:20, fontWeight: 'bold', textAlign:'center',}}  >Buy Now</Text> 
            </TouchableOpacity>

            <Text style={{fontSize:15,paddingBottom: 30, textAlign:'center', color:'#8c8c8c'}} onPress={() => navigation.push('HomeScreen')}  > Return  </Text> 

           
        </View>
    );
}

const styles= StyleSheet.create({
    categories:{
        flexDirection:'row',
    },

    

        Checkout:{
            marginTop:100,
            backgroundColor:'#f2f2f2',
        },
        
        
        cardStyle:{
          textAlign:'left', 
            paddingBottom:10,
            paddingTop:40,
            
            marginLeft:35,
            fontSize:15,
            color:'#8c8c8c',
          },

        buttonCatnew:{
            width:350,
            height:55,
            justifyContent:'center',
            borderRadius:15, 
            backgroundColor:"#ededed",
            textAlign: "center" ,
            marginRight:10,
            marginLeft:20,
            marginTop:0,
            
          },
          buttonCat:{
            width:160,
            height:55,
            justifyContent:'center',
            borderRadius:15, 
            backgroundColor:"#ededed",
            textAlign: "center" ,
            marginLeft:20,
            marginTop:0,
          },
          button2:{
  
            height:60,
            justifyContent:'center',
            borderRadius:15, 
            backgroundColor:COLORS.primary, 
            alignSelf:"center", 
            textAlign: "center" ,
            width:"85%",
            marginTop:20,
            marginRight:0,
            marginBottom:20,
          },

});

export default Checkout;