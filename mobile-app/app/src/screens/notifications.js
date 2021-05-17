import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Path, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import MapView,{Marker,Circle as Circ} from 'react-native-maps';
import { ScrollView } from 'react-native-gesture-handler';




export default function Notif() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/bold.ttf'),
        E: require('../assets/fonts/exbold.ttf'),
        H: require('../assets/fonts/heavy.ttf'),

      });
    const [markers, setMarkers] = useState({"marker":[
        {latitude: 37.78825,longitude: -122.4324},
        {latitude: 37.68825,longitude: -119.4324},
        {latitude: 36.78825,longitude: -120.4324}]})
        

    const [notif,setNotif] = useState({"notifications":[{"time":"05/16/2021","msg":"45 new cases nearby"},{"time":"05/16/2021","msg":"You were in a containment zone! Take precautions!"}]})
    const [notif3,setNotif3] = useState({"notifications":[{"time":"05/14/2021","msg":"15 new cases nearby"},
    {"time":"05/13/2021","msg":"45 new cases nearby"},{"time":"05/13/2021","msg":"Fall detected! SOS call initiated"}]})



    const notifications = notif.notifications.map((data) => {
            return (
                <LinearGradient
                // View Linear Gradient
                colors={['#FFFFFF', '#fabbbb']}
                start={[0,-0.3]}
                end={[0,1.9]}
                style={{backgroundColor:"#fabbbb", paddingVertical:'2.5%', width:'90%', alignSelf:'center', marginLeft:'2.5%',
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.01,
                shadowRadius: 5,
                
                elevation: 2,
                borderRadius:15, marginTop:'2.5%', paddingHorizontal:'10%'}}>
                    
  
                        <Text style={styles.subtitle}>{data.time}</Text>
                   
                      <View style={{flexDirection:'row', display:'flex', justifyContent:'space-between'}}>
                          
    
                        <Text style={styles.btnlabel}>{data.msg}</Text>
                      </View>
                      
                     
                    </LinearGradient>
            )});

            
                const notifications3 = notif3.notifications.map((data) => {
                    return (
                        <LinearGradient
                        // View Linear Gradient
                        colors={['#FFFFFF', '#fabbbb']}
                        start={[0,-0.3]}
                        end={[0,1.9]}
                        style={{backgroundColor:"#fabbbb", paddingVertical:'2.5%', width:'90%', alignSelf:'center', marginLeft:'2.5%',
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.01,
                        shadowRadius: 5,
                        
                        elevation: 2,
                        borderRadius:15, marginTop:'2.5%', paddingHorizontal:'10%'}}>
                            
          
                                <Text style={styles.subtitle}>{data.time}</Text>
                           
                              <View style={{flexDirection:'row', display:'flex', justifyContent:'space-between'}}>
                                  
            
                                <Text style={styles.btnlabel}>{data.msg}</Text>
                              </View>
                              
                             
                            </LinearGradient>
                    )});


   
    if(fontLoaded){
    return (
        <View style={styles.container}>
            <View style={{marginHorizontal:'7.5%', marginTop:'10%'}}>
                <View style={{flexDirection:'row'}}>
                    <Icon name="chevron-left" size={45} color="#F04D4E"></Icon>
                <Text style={{fontFamily:'H', fontSize:40, color:"#F04D4E", lineHeight:47}}>Notifications</Text>
                </View>
                </View>
                <View style={{marginTop:'5%'}}></View>
                <Text style={styles.title}>Today</Text>
                <View style={{height:'22%',marginBottom:'5%'}}>     
                <ScrollView overScrollMode="auto">
                    {notifications}
                </ScrollView>
                </View>
                <Text style={styles.title}>This Week</Text>
                <View style={{height:'55%',marginBottom:'5%'}}>     
                <ScrollView overScrollMode="auto">
                    {notifications3}
                </ScrollView>
                </View>



                <View style={{flexDirection:'row', width:'90%', borderRadius:15, backgroundColor:"#FEF5F5", shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    elevation: 10, position:'absolute', zIndex:3, bottom:20, alignSelf:'center', justifyContent:'space-between', paddingHorizontal:'10%', paddingVertical:'5%'}}>
                    <Icon name="home" type="entypo" color="#F04D4E"></Icon>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Map')}}><Icon name="marker" type="foundation" color="#F04D4E"></Icon></TouchableOpacity>
                    <Icon name="bell" type="material-community" color="#F04D4E"></Icon>
                    <Icon name="user" type="font-awesome" color="#F04D4E"></Icon>
                </View>
            
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
        backgroundColor: '#FFF',
    },
    logo: {
        width:'15%',
        height:'15%',
        resizeMode:'contain',
    },
    avatar: {
        width: 50,
        height:50,
        borderRadius:20,
        resizeMode:'cover',
        position:'absolute',
        right:0,
    },
    calibrate: {
        width:'40%',
        height:'25%',
        resizeMode:'contain',
        alignSelf:'flex-start',
    },
    title: {
        fontFamily:'H',
        fontSize:25,
        textAlign:'left',
        color:'#F04D4E',
        marginLeft:'10%'
    },
    subtitle: {
        fontFamily:'E',
        color:"#fc9d9d",
        fontSize:15,
        textAlign:'left',
    },
    subtitle2: {
        fontFamily:'E',
        color:"#FF5C5C",
        fontSize:17,
        textAlign:'center',
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
        fontFamily:'E',
        fontSize:22,
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
        textAlign:'center',
        color:'#FFF'

    }

});