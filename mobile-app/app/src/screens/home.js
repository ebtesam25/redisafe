import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Path, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';



export default function Home() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/bold.ttf'),
        E: require('../assets/fonts/exbold.ttf'),
        H: require('../assets/fonts/heavy.ttf'),

      });
    const [calibrated,setCalibrated] = useState(false);
    const [pulse, setPulse] = useState({"pulse":[65,67,76,85,64,78,70,80,85,73]})
    const [health, setHealth] = useState({"length": 12, "gsrraw": ["471", "472", "469", "468", "467", "463", "468", "469", "473", "474", "472"], "gsrdev": ["2",
    "3", "0", "-1", "-2", "-6", "-1", "0", "4", "5", "3"], "time": ["1621201310", "1621201322", "1621205559", "1621205576",
    "1621205583", "1621205598", "1621205634", "1621205639", "1621205644", "1621205644", "1621205659"], "pulse": ["88", "89",
    "93", "91", "92", "90", "91", "91", "91", "87", "88"], "oxygen": ["99", "100", "99", "99", "99", "99", "98", "100",
    "100", "100", "99"], "temperature": ["97.1", "97.1", "97.2", "97.1", "97.0", "97.1", "97.2", "97.0", "97.0", "96.8",
    "96.9"]});

    const _getHealthData = () => {
        fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/healthchain',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"action":"getchaindata","eid":"4"}),
          })
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data),"Data");
            setHealth(data);
            let i=0;
            let arr = [];
            for(i-0;i<data.length;i++){
                arr[i]=parseInt(data.pulse[i]);
            }
            setPulse({"pulse":arr});
            
        });
    }

    useEffect(()=>{
        _getHealthData();

    },[])

   
    if(fontLoaded){
    return (
        <View style={styles.container}>
            
            <ImageBackground source={require('../assets/bg.png')} style={{height:'100%', width:'100%'}} imageStyle={{resizeMode:'cover', alignSelf:'flex-end'}}>
            <View style={{marginHorizontal:'7.5%', marginTop:'10%'}}>
             
                <Image source={require('../assets/logored.png')} style={styles.logo}></Image>
                <Image source={{uri:'https://static.wikia.nocookie.net/parksandrecreation/images/3/33/Ann_Perkins.jpg/revision/latest?cb=20180116070354'}} style={styles.avatar}></Image>

                
                <View style={{marginTop:'10%'}}></View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontFamily:'H', fontSize:45, color:"#F04D4E", lineHeight:45}}>Hey, Anne</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Home2')}><View style={{flexDirection:'row'}}><Text style={{fontFamily:'E', fontSize:20, color:"#F04D4E", lineHeight:50}}>See More </Text>
                <Icon name="chevron-circle-right" type="font-awesome" color="#F04D4E" size={18} style={{marginTop:"100%"}}></Icon></View></TouchableOpacity>
                </View>

                <View style={{marginTop:'5%'}}></View>
                <View style={{flexDirection:'row', height:'42%'}}>
                <LinearGradient
                    colors={[ '#FFA5A6', "#F04D4E"]}
                    start={[1,-0.3]}
                    end={[1,1]}
                    style={{backgroundColor:"#F04D4E",borderRadius:20, borderColor:"#FFA5A6", borderWidth:1, width:184,shadowColor: "#FF0000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,}}
                >
                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:'5%', paddingTop:'5%'}}>
                    <Text style={styles.title}>Heart Rate</Text>
                    <Icon name="rightcircle" type="ant-design" color="#FEF3F3"></Icon>
                    </View>
                    <Svg width="207" height="100">
                    <Path
                        transform="scale(1, -1) translate(0, -100)"
                        d={`M0 ${pulse.pulse[0]} C 20,${pulse.pulse[1]}, 40,${pulse.pulse[2]}, 60,${pulse.pulse[3]} S80,${pulse.pulse[4]}, 100 ${pulse.pulse[5]}, S120,${pulse.pulse[6]}, 140,${pulse.pulse[7]}, S160,${pulse.pulse[8]}, 180,${pulse.pulse[9]}`}
                        fill="none"
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeWidth={4}
                    />
                    </Svg>
                    <View style={{paddingHorizontal:'10%', paddingBottom:'5%'}}>
                    <Text style={styles.subtitle}>Normal</Text>
                    <Text style={{fontFamily:'H', fontSize:50, color:"#FFF"}}>{pulse.pulse[9]}<Text style={{color:"#FFD6D6", fontSize:20}}> BPM</Text></Text>
                    <Image source={require('../assets/pulse.png')} style={{height:70, width:70, resizeMode:'contain', position:'absolute', right:0, bottom:0}}></Image>
                    </View>
                    
                </LinearGradient>

                <View style={{}}>
                <LinearGradient
                    // View Linear Gradient
                    colors={['#FFFFFF', '#fabbbb']}
                    start={[0,-0.6]}
                    end={[0,1.4]}
                    style={{backgroundColor:"#F4ACAC", paddingVertical:'5%', width:'90%', alignSelf:'flex-end', marginLeft:'2.5%',
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,
                    borderRadius:15, marginTop:'5%', paddingHorizontal:'10%',borderColor:"#fabbbb", borderWidth:1}}>
                        <ImageBackground source={require('../assets/O2.png')} style={{width:'100%', height:'40%'}} imageStyle={{resizeMode:'contain'}}>
                    <Text style={styles.btnlabel}>{health.oxygen[0]}%</Text>
                    <Text style={styles.subtitle2}>SPO2 Level</Text>
                    </ImageBackground>
                </LinearGradient>
                <LinearGradient
                    // View Linear Gradient
                    colors={['#FFFFFF', '#fabbbb']}
                    start={[0,-0.6]}
                    end={[0,1.4]}
                    style={{backgroundColor:"#F4ACAC", paddingVertical:'5%', width:'90%', alignSelf:'flex-end', marginLeft:'2.5%',
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,
                    borderRadius:15, marginTop:'10%', paddingHorizontal:'10%',borderColor:"#fabbbb", borderWidth:1}}>
                        <ImageBackground source={require('../assets/O2.png')} style={{width:'100%', height:'40%'}} imageStyle={{resizeMode:'contain'}}>
                    <Text style={styles.btnlabel}>{health.temperature[0]}°C</Text>
                    <Text style={styles.subtitle2}>Temperature</Text>
                    </ImageBackground>
                </LinearGradient>
                </View>
                
                </View>
                </View>
                <View style={{flexDirection:'row', marginTop:'-80%', paddingHorizontal:'5%'}}>
                <LinearGradient
                    // View Linear Gradient
                    colors={['#FFFFFF', '#fabbbb']}
                    start={[0,-0.6]}
                    end={[0,1.4]}
                    style={{backgroundColor:"#F4ACAC", paddingVertical:'5%', width:'50%', alignSelf:'flex-end', marginLeft:'2.5%',
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,
                    borderRadius:15, marginTop:'10%', paddingHorizontal:'10%',borderColor:"#fabbbb", borderWidth:1}}>
                    <Text style={{fontFamily:'H', fontSize:25, textAlign:'center', color:'#F04D4E'}}>Steps</Text>
                    <Svg style={{height:'25%'}}>
                    <Circle cx="50" cy="50" r="30" fill="transparent" stroke="#fca4a4" strokeWidth={4} />
                    <Path d="M 27 27 A 30 30 0 0 1 73 73" stroke="#FF5C5C" fill="transparent" strokeWidth="5" strokeLinecap="round"/>
                    
                    </Svg>
                    <Text style={styles.btnlabel}>7500</Text>
                    <Text style={styles.subtitle2}>steps to reach daily goal</Text>
                </LinearGradient>
                <LinearGradient
                    // View Linear Gradient
                    colors={['#FFFFFF', '#fabbbb']}
                    start={[0,-0.6]}
                    end={[0,1.4]}
                    style={{backgroundColor:"#F4ACAC", paddingVertical:'5%', width:'45%', height:'55%', alignSelf:'flex-end', marginLeft:'2.5%',
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,
                    borderRadius:15, marginTop:'10%', paddingHorizontal:'10%',borderColor:"#fabbbb", borderWidth:1}}>
                        <ImageBackground source={require('../assets/calories.png')} style={{width:'100%', height:'65%'}} imageStyle={{resizeMode:'contain', marginTop:'55%'}}>
                    <Text style={{fontFamily:'H', fontSize:25, textAlign:'center', color:'#F04D4E'}}>Calories Burnt</Text>
                    <View style={{marginTop:'80%'}}></View>
                    <Text style={styles.btnlabel}>1278</Text>
                    <Text style={styles.subtitle2}>burnt today</Text>
                    </ImageBackground>
                </LinearGradient>
                </View>
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