import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import * as Animatable from "react-native-animatable";
import CallsData from './CallsData';

export default function SignalDetails() {

    const [isExpanded, setIsExpanded] = useState(false);

    const handlePress = () => {
        setIsExpanded(!isExpanded);
    };

    return (
       <>
       
       <TouchableOpacity onPress={handlePress}>
           
        <View style={styles.signalContainer}>


        <View style={styles.timeContainer}>
        <Text style={styles.time}>02 Nov 2023 01:30 pm</Text>
        </View>
        <Text style={styles.product}>NIFTY 18900 CE Nov 2023</Text>


        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 2}} > 
                <Text style={styles.amount}>₹100 - ₹110</Text> 
                <Text style={styles.recommendedPrice}>Recommended Price</Text>
            </View>
            <View style={{...styles.action}} >
                <Text style={styles.actionText} >SELL</Text>
            </View>
        </View>

        <View style={{...styles.target,flexDirection: 'row'}}>

            <View style={{flex: 1}} > 
                <Text style={styles.amount}>SL ₹80</Text> 
            </View>

            <View style={{...styles.targetTg1,flex: 1}} > 
                <Text style={styles.amount}>TG1 ₹140</Text> 
            </View>

            <View style={{...styles.targetTg2,flex: 1}} > 
                <Text style={styles.amount}>TG2 ₹175</Text> 
            </View>
            
        </View>


           <Animatable.View
           animation={isExpanded ? 'slideInDown' : ''}
           duration={500}
           style={{
               padding: 16,
               borderColor: 'gray',
           }}
       >
           {isExpanded && <> 
          
           <CallsData/>
           
           
           </>}
       </Animatable.View>

        </View>
   </TouchableOpacity>
  
       </>
    );


}


const styles = StyleSheet.create({

    signalContainer:{
        backgroundColor:"#000",
        marginBottom:10,
        borderRadius:10,
       padding:10
    },
    timeContainer:{
        alignItems:"flex-end",
        
    },
    time:{
        color:"gray",
       fontSize:12
    },
    product:{
        color:"#fff",
       fontSize:16,
       fontWeight:"bold"

    },
    amount:{
        color:"#fff",
        fontSize:16,
        fontWeight:"bold"
    },
    recommendedPrice:{
        color:"gray",
        fontSize:12
    },
    action:{
        backgroundColor:"#00cc00",
        width:45,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        height:25
       
    },
    actionText:{
         color:"#fff",
         fontSize:14,
         fontWeight:"bold"
    },
    target:{
        marginTop:5
    },
    targetTg1:{
        alignItems:"center"
    },
    targetTg2:{
        alignItems:"flex-end"
    },
   

});


// export default function SignalDetails() {

//     const [isExpanded, setIsExpanded] = useState(false);

//     const toggleCard = () => {
//         setIsExpanded(!isExpanded);
//     };

//     return (
        
//     );


// }