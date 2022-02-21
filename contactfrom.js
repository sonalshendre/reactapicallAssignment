import { View, Text, TextInput, StyleSheet, Button,Pressable} from 'react-native';
import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Contactfrom(props) {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
  });

  useEffect(() => {
    var value = getData('fname');
    value.then(data => {
      console.log(data, 'mydata');
    });
  }, []);

  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email ,setEmail] = useState('');

  const getData = async keyName => {
    try {
      const value = await AsyncStorage.getItem(keyName);
      if (value !== null) {
        // value previously stored
      }
      return value;
    } catch (e) {
      // error reading value
    }
  };


  const handleChangeText = (value, fieldName) => {
    // let data = {...formData};
    // //rest operator
    // data[fieldName] = value;
    // setFormData(data);
    if (fieldName === 'fname') {
      setfirstName(value);
    } else if (fieldName === 'lname') {
      setLastName(value);
    } else {
      setEmail(value);
    }
  };
  const handleSubmit = () => {
    AsyncStorage.setItem('fname', firstName);
    alert('successful');
  };

  const productName= props?.route?.params?.pname;
  return (
    <View >
      <Pressable onPress={()=>props.navigation.goBack()}> 
        <Text style={{fontSize: 20,fontWeight: 'bold', color: '#000'}}>Back</Text></Pressable>
        <View style={{padding: 10, margin: 10 }}>
        <Text style={{fontSize: 20, color: '#000', textAlign: 'center'}}>
        Enquiry for {productName}
      </Text>
        </View>
      <View >

        <View style={{flexDirection:'row',padding:10,justifyContent:'center'}}>
          <Text style={{fontSize:20,paddingTop:20 }}>First Name :</Text>
          <TextInput style={{borderColor:'black',borderWidth:1,width:'70%',margin:10}}
            value={firstName}
            placeholder="Enter your Fname"
            onChangeText={value => handleChangeText(value, 'fname')}
          />
        </View>
        <View style={{flexDirection:'row',padding:10 ,justifyContent:'center'}}>
          <Text style={{fontSize:20,paddingTop:20}}>Last Name :</Text>
          <TextInput style={{borderColor:'black',borderWidth:1,width:'70%',margin:10}}
            value={lastName}
            placeholder="Enter your lastName"
            onChangeText={value => handleChangeText(value, 'lname')}
          />
      </View >
      <View style={{flexDirection:'row',padding:10,justifyContent:'center'}}>
          <Text style={{fontSize:20,paddingTop:20,width:100,textAlign:'right' }}>Email : </Text>
          <TextInput style={{borderColor:'black',borderWidth:1,width:'70%',margin:10}}
            value={email}
            placeholder="Enter your Email:"
            onChangeText={value => handleChangeText(value, 'email')}
          />
      </View >
     
    <Button onPress={handleSubmit} title="Submit form " />
      </View>
    </View>
  )
}


