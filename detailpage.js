import { View, Text ,Image, Pressable, Button, ActivityIndicator, ImageBackground} from 'react-native';
import React,{useState} from 'react';
import Bg from './bbgs.jpeg';

export default function Detailpage(props) {
  
  
  return (
    <View style={{padding: 20 ,flex:1}}> 
    
  <Pressable onPress={()=> props.navigation.goBack()}>
        <Text style={{fontSize: 20,fontWeight: 'bold', color: '#000'}}>Back</Text></Pressable>
       <View style={{borderColor:'black', borderWidth:2, padding:10, alignContent:'center' }}> 
         
        <Image style={{height: 350, width: '100%', backgroundColor: 'black'}}
                    source={{uri: props?.route?.params?.data?.image_url}}/>
      <Text style={{ fontSize: 20,fontWeight: 'bold', color: '#000', textAlign:"center"}}>{props?.route?.params?.data?.name}</Text>
      <Text style={{fontSize:20, textAlign:"center"}}>{props?.route?.params?.data?.price}</Text>
      <Text style={{ fontSize: 15, color: '#000', textAlign:"center"}}> category: {props?.route?.params?.data?.category?.name}</Text>
      <Text style={{ fontSize: 15, color: '#000', textAlign:"center"}}>{props?.route?.params?.data?.description}</Text>
      
      <Button title='contact us' onPress={()=> props.navigation.navigate("Contactfrom", {pname: props?.route?.params?.data?.name,})}></Button>
      
      </View> 
      </View>
  );
1
  }