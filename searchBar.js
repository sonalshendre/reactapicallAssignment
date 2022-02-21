import { View, Text,Image,TouchableOpacity,StyleSheet ,TextInput} from 'react-native'
import React from 'react'
import Crossb from './crossb.png'

export default function SearchBar () {
  return (
   <>
     <View style={{backgroundColor: 'lightblue'}}><Text style={styles.pageHeading}>Fruit Bazar</Text></View>
    <View>
      <Text>SearchProduct</Text>
      <TextInput
        style={{backgroundColor: '#ddd', padding: 20,borderColor:'blue',borderWidth:1}}
        placeholder="search product name....."
        onChangeText={(value) => handleChange(value)}
      />
      <TouchableOpacity onPress={ handleChange('')}>
         <Image source={Crossb} style={{height:20,width:20}}/>
      </TouchableOpacity>
    </View>
     
     </>
  );
}


const styles = StyleSheet.create ({


    Container:{
        padding: 20 
    }

})