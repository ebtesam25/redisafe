import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Path, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import MapView,{Marker,Circle as Circ} from 'react-native-maps';




export default function Home2() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/bold.ttf'),
        E: require('../assets/fonts/exbold.ttf'),
        H: require('../assets/fonts/heavy.ttf'),

      });
    const [pulse, setPulse] = useState({"pulse":[65,67,76,85,64,78,70,80,85,73]})
    const [date, setDate] = useState('');
    

    useEffect(()=>{
     
 

    },[])


    const currentDate=()=>{
 
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
 
      setDate(date+'/'+month+'/'+year);
 
     }
     
     const [cluster, setCluster] = useState({"cluster":[
        {latitude: 37.18825,longitude: -112.4324},
        {latitude: 37.78815,longitude: -122.4314},
        {latitude: 37.74855,longitude: -122.4264},
        {latitude: 47.68825,longitude: -119.4324},
        {latitude: 47.68815,longitude: -119.4124},
        {latitude: 36.78525,longitude: -120.4124},
        {latitude: 36.78555,longitude: -120.4324}]})

   
    if(fontLoaded){
    return (
        <View style={styles.container}>
            
            <ImageBackground source={require('../assets/bg.png')} style={{height:'100%', width:'100%'}} imageStyle={{resizeMode:'cover', alignSelf:'flex-end'}}>
            <View style={{marginHorizontal:'7.5%', marginTop:'10%'}}>
             
                <Image source={require('../assets/logored.png')} style={styles.logo}></Image>
                <Image source={{uri:'https://static.wikia.nocookie.net/parksandrecreation/images/3/33/Ann_Perkins.jpg/revision/latest?cb=20180116070354'}} style={styles.avatar}></Image>

                
                <View style={{marginTop:'10%'}}></View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontFamily:'H', fontSize:30, color:"#F04D4E", lineHeight:30}}>Around You</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}><View style={{flexDirection:'row'}}><Icon name="chevron-circle-left" type="font-awesome" color="#F04D4E" size={18} style={{marginTop:"20%"}}></Icon><Text style={{fontFamily:'E', fontSize:20, color:"#F04D4E", lineHeight:30}}> Go Back </Text>
                </View></TouchableOpacity>
                </View>

                <View style={{marginTop:'5%'}}></View>
                <View style={{flexDirection:'row', height:'42%'}}>
                <LinearGradient
                    colors={[ '#FFA5A6', "#F04D4E"]}
                    start={[1,-0.3]}
                    end={[1,1]}
                    style={{backgroundColor:"#F04D4E",borderRadius:20, borderColor:"#FFA5A6", borderWidth:1, width:'100%',shadowColor: "#FF0000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,}}
                >
                    
                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:'5%', paddingTop:'5%'}}>
                    <View><Text style={styles.title}>COVID-19</Text>
                    <Text style={styles.subtitle}>{date}</Text></View>
                    <Icon name="rightcircle" type="ant-design" color="#FEF3F3"></Icon>
                    </View>
                    <View style={{paddingHorizontal:'5%', paddingBottom:'5%'}}>
                    <Text style={{fontFamily:'H', fontSize:50, color:"#FFF"}}>2440<Text style={{color:"#FFD6D6", fontSize:20}}>{'\n'}new cases today {'\n'}within 10 miles</Text></Text>
                    <MapView
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                    style={{width:150, height:150, position:'absolute', right:20, top:-50}}
                >
                    {cluster.cluster.map((marker, index) => (
                        <Circ center={marker} radius={2000} fillColor={`rgba(240, 77, 78,0.3)`} strokeColor="#f04d4e"/>
                    ))}
                </MapView>
                    </View>
                    
                </LinearGradient>

                
                </View>
                
                </View>
                <View style={{flexDirection:'row'}}>
                <LinearGradient
                    // View Linear Gradient
                    colors={['#FFFFFF', '#fabbbb']}
                    start={[0,-0.6]}
                    end={[0,1.4]}
                    style={{backgroundColor:"#F4ACAC", paddingVertical:'5%', width:'27.5%', alignSelf:'center', marginLeft:'10%',
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,
                    borderTopLeftRadius:15,borderBottomLeftRadius:15, marginTop:'-30%', paddingHorizontal:'5%',borderColor:"#fabbbb", borderWidth:1}}>
                    <Text style={styles.btnlabel}>45%</Text>
                    <Text style={styles.subtitle2}>Humidity</Text>
                </LinearGradient>
                <LinearGradient
                    // View Linear Gradient
                    colors={['#FFFFFF', '#fabbbb']}
                    start={[0,-0.6]}
                    end={[0,1.4]}
                    style={{backgroundColor:"#F4ACAC", paddingVertical:'5%', width:'27.5%', alignSelf:'center', marginHorizontal:'0%',
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,
                    borderRadius:0, marginTop:'-30%', paddingHorizontal:'1%',borderColor:"#fabbbb", borderWidth:1}}>
                    <Text style={styles.btnlabel}>37°C</Text>
                    <Text style={styles.subtitle2}>Temperature</Text>
                </LinearGradient>
                <LinearGradient
                    // View Linear Gradient
                    colors={['#FFFFFF', '#fabbbb']}
                    start={[0,-0.6]}
                    end={[0,1.4]}
                    style={{backgroundColor:"#F4ACAC", paddingVertical:'5%', width:'27.5%', alignSelf:'center', marginHorizontal:'0%',
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,
                    borderTopRightRadius:15,borderBottomRightRadius:15, marginTop:'-30%', paddingHorizontal:'1%',borderColor:"#fabbbb", borderWidth:1}}>
                    <Text style={styles.btnlabel}>731<Text style={{fontSize:15}}> mm Hg</Text></Text>
                    <Text style={styles.subtitle2}>Air Pressure</Text>
                </LinearGradient>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Map')}><View style={{flexDirection:'row'}}><Text style={{color:"#F04D4E", fontFamily:"E", fontSize:20, marginLeft:'10%',
                 marginTop:'5%', backgroundColor:`rgba(252, 219, 220, 0.3)`, width:'50%', lineHeight:18}}>see more around you</Text>
                 <Icon name="chevron-circle-right" type="font-awesome" color="#F04D4E" size={20} style={{marginTop:"100%"}}></Icon></View></TouchableOpacity>
                </ImageBackground>

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
        color:'#FFD6D6'
    },
    subtitle: {
        fontFamily:'E',
        color:"#FFD6D6",
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
        fontSize:30,
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