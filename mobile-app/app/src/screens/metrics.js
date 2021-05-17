import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';


export default function Metrics() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/bold.ttf'),
        E: require('../assets/fonts/exbold.ttf'),
        H: require('../assets/fonts/heavy.ttf'),

      });

   
    if(fontLoaded){
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.png')} style={{height:'100%', width:'100%'}} imageStyle={{resizeMode:'cover', alignSelf:'flex-end'}}>
            <View style={{marginHorizontal:'7.5%', marginTop:'10%'}}>
                <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
                <View style={{marginTop:'5%'}}></View>
                <Text style={{fontFamily:'E', fontSize:45, color:"#FFF", lineHeight:45, width:'80%'}}>Personal Metrics</Text>
                <Text style={{fontFamily:'B', fontSize:20, color:"#FFF", marginTop:'5%'}}>We don’t store any of this data, this is for your health analytics.</Text>
                <View style={{marginTop:'15%', justifyContent:'space-evenly'}}></View>
               

               <View style={{marginTop:'5%', backgroundColor:`rgba(252, 219, 220, 0.2)`, borderRadius:15, paddingHorizontal:'5%', paddingVertical:'1.5%', flexDirection:'row'}}>
                   <View style={{width:'90%'}}>
                       <Text style={{fontFamily:'E', color:"#FAD8D8"}}>Age</Text>
                       <TextInput placeholder="years" style={{fontFamily:"B", color:"#FFF", fontSize:20}} placeholderTextColor="#FAD8D8"></TextInput>
                   </View>
               </View>

               <View style={{marginTop:'5%', backgroundColor:`rgba(252, 219, 220, 0.2)`, borderRadius:15, paddingHorizontal:'5%', paddingVertical:'1.5%', flexDirection:'row'}}>
                   <View style={{width:'90%'}}>
                       <Text style={{fontFamily:'E', color:"#FAD8D8"}}>Height</Text>
                       <TextInput placeholder="ft" style={{fontFamily:"B", color:"#FFF", fontSize:20}} placeholderTextColor="#FAD8D8"></TextInput>
                   </View>
                   <Icon name="human-male-height" type="material-community" color={`rgba(250, 216, 216, 0.5)`} size={35} style={{textAlign:'right'}}></Icon>
               </View>
               <View style={{marginTop:'5%', backgroundColor:`rgba(252, 219, 220, 0.2)`, borderRadius:15, paddingHorizontal:'5%', paddingVertical:'1.5%', flexDirection:'row'}}>
                   <View style={{width:'93%'}}>
                       <Text style={{fontFamily:'E', color:"#FAD8D8"}}>Weight</Text>
                       <TextInput placeholder="lb" style={{fontFamily:"B", color:"#FFF", fontSize:20}} placeholderTextColor="#FAD8D8"></TextInput>
                   </View>
                   <Icon name="weight" type="font-awesome-5" color={`rgba(250, 216, 216, 0.5)`} size={25} style={{textAlign:'right', marginTop:'25%'}}></Icon>
               </View>



               <TouchableOpacity onPress={()=>navigation.navigate('Calibrate')}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#FFFFFF', '#F4ACAC']}
                    start={[1,-0.3]}
                    end={[1,1]}
                    style={styles.btn}>
                    <Text style={styles.btnlabel}>Continue</Text>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity><Text style={{color:"#FCDBDC", fontFamily:"E", fontSize:20, marginLeft:'10%',
                 marginTop:'5%', backgroundColor:`rgba(252, 219, 220, 0.3)`, width:'19%', lineHeight:18}}>or skip</Text></TouchableOpacity>

                </View>
                </ImageBackground>
            
        </View>
    );

}
else{
    return(<View></View>)
}
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#F04D4E',
    },
    logo: {
        width:'15%',
        height:'15%',
        resizeMode:'contain',
        alignSelf:'flex-start',
    },
    title: {
        fontFamily:'H',
        color:"#FFF",
        fontSize:20,
        textAlign:'center',
        color:'#F04D4E'
    },
    subtitle: {
        fontFamily:'B',
        color:"#FFF",
        fontSize:17,
        textAlign:'center',
        marginTop:'50%',
        width:'40%',
        alignSelf:'center'
    },
    btn: {
        backgroundColor:"#F4ACAC",
        paddingVertical:'5%',
        width:'90%',
        alignSelf:'center',
        borderRadius:15,
        marginTop:'10%',
        paddingHorizontal:'10%',

    },
    btnlabel: {
        fontFamily:'H',
        fontSize:24,
        textAlign:'center',
        color:'#F04D4E'

    },
    btn2: {
        backgroundColor:`rgba(255, 255, 255, 0.1)`,
        paddingVertical:'5%',
        width:'90%',
        alignSelf:'center',
        borderRadius:15,
        marginTop:'5%',
        paddingHorizontal:'10%',
        borderColor:`rgba(252, 219, 220, 0.5)`,
        borderWidth:2

    },
    btnlabel2: {
        fontFamily:'H',
        fontSize:20,
        textAlign:'center',
        color:'#FFF'

    }

});