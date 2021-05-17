import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import Done from '../assets/calibrated.png';
import Progress from '../assets/calibrate.png';


export default function Calibrate() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/bold.ttf'),
        E: require('../assets/fonts/exbold.ttf'),
        H: require('../assets/fonts/heavy.ttf'),

      });
    const [calibrated,setCalibrated] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setCalibrated(true);
        }, 3000);

    },[calibrated])

   
    if(fontLoaded){
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.png')} style={{height:'100%', width:'100%'}} imageStyle={{resizeMode:'cover', alignSelf:'flex-end'}}>
            <View style={{marginHorizontal:'7.5%', marginTop:'10%'}}>
                <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
                <View style={{marginTop:'40%'}}></View>
                <Image source={calibrated?Done:Progress} style={styles.calibrate}></Image>
                <View style={{marginTop:'5%'}}></View>
                <Text style={{fontFamily:'H', fontSize:45, color:"#FFF", lineHeight:45}}>{!calibrated ? "Calibrating Hardware...":"Hardware Calibrated"}</Text>
                {!calibrated &&<Text style={{fontFamily:'B', fontSize:24, color:"#FFF", marginTop:'5%'}}>Please wait, this may take a while...</Text>}
               
                {!calibrated &&<TouchableOpacity onPress={()=>navigation.navigate('Homr')}><Text style={{color:"#FCDBDC", fontFamily:"E", fontSize:20, marginLeft:'1%',
                 marginTop:'5%', backgroundColor:`rgba(252, 219, 220, 0.3)`, width:'17%', lineHeight:18}}>or skip</Text></TouchableOpacity>}

                {calibrated &&<TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#FFFFFF', '#F4ACAC']}
                    start={[1,-0.3]}
                    end={[1,1]}
                    style={styles.btn}>
                    <Text style={styles.btnlabel}>Continue</Text>
                </LinearGradient>
                </TouchableOpacity>}

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
    calibrate: {
        width:'30%',
        height:'20%',
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