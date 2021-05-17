import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Path, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import MapView,{Marker,Circle as Circ} from 'react-native-maps';




export default function Map() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/bold.ttf'),
        E: require('../assets/fonts/exbold.ttf'),
        H: require('../assets/fonts/heavy.ttf'),

      });

    const [covid, setCovid] = useState({"length":3,"lat":["28.063136646557602","28.06410239722876"],"lon":["-80.6238106525923","-80.61911117922998"],"time":["1621201322","1621205559"],"covid":["low","low"],"chain":[{"index":0,"transactions":[],"timestamp":1621200636.5674877,"previous_hash":"0","nonce":0,"data":"REDISAFE","hash":"c422dac9892a1916d9ba59e30bc4cad71b218253fb0ee99316cebd09f9b647ea"},{"index":1,"transactions":[{"lat":"28.063136646557602","lon":"-80.6238106525923","covid":"low","time":"1621201322"}],"timestamp":1621205479.8964634,"previous_hash":"c422dac9892a1916d9ba59e30bc4cad71b218253fb0ee99316cebd09f9b647ea","nonce":0,"data":"xxxxxxxxxxxxxx","hash":"00c599822d2a0ba7eab7784505d25548166f25acc2b2d953b827f35d36d85828"},{"index":2,"transactions":[{"lat":"28.06410239722876","lon":"-80.61911117922998","covid":"low","time":"1621205559"}],"timestamp":1621205602.9146283,"previous_hash":"00c599822d2a0ba7eab7784505d25548166f25acc2b2d953b827f35d36d85828","nonce":0,"data":"xxxxxxxxxxxxxx","hash":"00a9c8b267beb94d5c8069f9da2c53aa97c76d7607456424ac30db9bb871c4dd"}]})
    const [arr, setArr] = useState([{
        "covid": "low",
        "latlng":{
          "latitude": 28.06410239722876,
          "longitude": -80.61911117922998,
        },
        "time": "1621205559",
      },]);


    const [markers, setMarkers] = useState({"marker":[
        {latitude: 37.78825,longitude: -122.4324},
        {latitude: 37.68825,longitude: -119.4324},
        {latitude: 36.78825,longitude: -120.4324}]})

    const [cluster, setCluster] = useState({"cluster":[
            {latitude: 37.18825,longitude: -112.4324},
            {latitude: 37.78815,longitude: -122.4314},
            {latitude: 37.74855,longitude: -122.4264},
            {latitude: 47.68825,longitude: -119.4324},
            {latitude: 47.68815,longitude: -119.4124},
            {latitude: 36.78525,longitude: -120.4124},
            {latitude: 36.78555,longitude: -120.4324}]})


    const _restructure = (covid) => {
        let len = covid.lat.length;
        let lat = covid.lat;
        let lon = covid.lon;
        let status = covid.covid;
        let time = covid.time;
        let arr = [];
        let i=0;
        for(i=0;i<len;i++){
            arr[i]={"latlng":{"latitude":parseFloat(lat[i]),"longitude":parseFloat(lon[i])},"covid":status[i],"time":time[i]}
        }
        console.log(arr);
        setArr(arr);

     }

     const _getCOVIDData = () => {
        fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/healthchain',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"action":"getchaindata","eid":"5"}),
          })
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data),"Data");
            setCovid(data);
            _restructure(data);
            
        });
    }

    useEffect(()=>{
     
        _getCOVIDData();

    },[])


   
    if(arr!=''){
    return (
        <View style={styles.container}>
            <View style={{marginHorizontal:'7.5%', marginTop:'10%'}}>
                <View style={{flexDirection:'row'}}>
                    <Icon name="chevron-left" size={45} color="#F04D4E"></Icon>
                <Text style={{fontFamily:'H', fontSize:40, color:"#F04D4E", lineHeight:47}}>Around you</Text>
                </View>
                </View>
                <View style={{marginTop:'5%'}}></View>
                <View style={{width:'100%', height:'100%'}}>
                <MapView
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                    style={{width:420, height:690}}
                >
                    {markers.marker.map((marker, index) => (
                        <Marker
                        key={index}
                        coordinate={marker}
                        icon={require('../assets/dot.png')}
                        />
                    ))}
                    {cluster.cluster.map((marker, index) => (
                        <Circ center={marker} radius={2000} fillColor={`rgba(240, 77, 78,0.3)`} strokeColor="#f04d4e"/>
                    ))}
                    {arr.map((marker, index) => (
                    <Circ center={marker.latlng} radius={2000} fillColor={marker.covid=='high'?`rgba(240, 77, 78,0.3)`:`rgba(230, 27, 78,0.1)`} strokeColor="#f04d4e"/>
                    ))}
                    
                    </MapView>
                </View>
                





                

                <View style={{marginTop:'5%'}}></View>

                <View style={{flexDirection:'row', width:'30%', borderRadius:15, backgroundColor:"#ffeded", shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    elevation: 10, position:'absolute', zIndex:3, bottom:100, alignSelf:'flex-start', justifyContent:'space-between', 
                    paddingHorizontal:'10%', paddingVertical:'5%', borderWidth:1, borderColor:"#faacac", marginLeft:'5%'}}>
                    <Icon name="primitive-dot" type="octicon" color="#F04D4E"></Icon>
                    <Text style={styles.subtitle}>Visited</Text>
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
                    <TouchableOpacity onPress={()=>{navigation.navigate('Notif')}}><Icon name="bell" type="material-community" color="#F04D4E"></Icon></TouchableOpacity>
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
        color:'#FFD6D6'
    },
    subtitle: {
        fontFamily:'E',
        color:"#F04D4E",
        fontSize:20,
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
        fontFamily:'H',
        fontSize:40,
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