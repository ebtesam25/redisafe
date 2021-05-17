import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';


export default function Welcome() {
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
                <View style={{marginTop:'60%'}}></View>
                <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
                <Text style={{fontFamily:'H', fontSize:40, color:"#FFF"}}><Text style={{color:"#FBCACA"}}>Redi</Text>Safe</Text>
                <Text style={{fontFamily:'B', fontSize:18, width:'70%', color:"#FFF"}}>Health monitoring, contact tracing, COVID alerts at your fingertips.</Text>
                <View style={{marginTop:'15%'}}></View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#FFFFFF', '#F4ACAC']}
                    start={[1,-0.3]}
                    end={[1,1]}
                    style={styles.btn}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.btnlabel}>Login</Text>
                    <Icon name="rightcircle" type="ant-design" color="#F04D4E" style={{textAlign:'right'}}></Icon>
                    </View>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                <View style={styles.btn2}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.btnlabel2}>Sign up</Text>
                    <Icon name="rightcircle" type="ant-design" color="#FFF" style={{textAlign:'right'}}></Icon>
                    </View>
                </View>
                </TouchableOpacity>

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
        width:'20%',
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
        fontSize:20,
        textAlign:'left',
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
        textAlign:'left',
        color:'#FFF'

    }

});