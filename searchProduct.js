import React ,{useState} from 'react';
import { 
  View, Text, ScrollView ,Image,Button,TextInput, 
  StyleSheet,
  TouchableOpacity,
  ImageBackground,ActivityIndicator,KeyboardAvoidingView} from 'react-native';
import axios from 'axios';
import Crossb from './crossb.png';
import Bg from './dbg.jpeg';
import Bgs from './backg.png';




export default function SearchProduct(props) {
 
  var url = 'https://api.dotshowroom.in/api/dotk/catalog/searchItems';
  
  const [apiData, setapiData] = useState([]);
  const[text,settext]=useState("");
  const[isLoading,setisLoading]=useState(false);
  
  function handleChange(settext) {
    setisLoading(true);
    axios.post(url,{
      page :1,
      store_id: 2490120,
      search_text: settext,
    })
    .then(data=> {
    
      console.log(data, 'dadads');
      
        setapiData(data.data);
        setisLoading(false); 
    }).catch((error)=>{  
  setisLoading(false);
console.log(error)
  });


  };

  function clearf(){
  settext('');
  setapiData(null);

  };


    
  return (

    <View style={styles.container}>
       <KeyboardAvoidingView>
      <ImageBackground source={Bgs} blurRadius={4}>
     <View style={{backgroundColor: 'lightblue'}}>
       <ImageBackground source={Bg}>
       <Text style={styles.pageHeading}>Fruit Bazar</Text>
       </ImageBackground>
      
     </View>
      <View style={styles.SearchbarSty}>
      <TextInput
        style={ styles.SearchtextStyl}
        placeholder="search product name....."
        value={text}
        onChangeText={(value) => {handleChange(value),settext(value)}}
      />
      <TouchableOpacity onPress={ ()=> clearf()}>
         <Image source={Crossb} style={{height:30,width:30,padding:10, marginTop:10}}/>
      </TouchableOpacity>
    </View>
    <View >
    <TouchableOpacity onPress={()=> props.navigation.navigate("Apicall")}>
      <Text style={{color:"black",fontWeight:'bold'}}>View all products..</Text>
    </TouchableOpacity>
  
  </View>
    {isLoading?( <ActivityIndicator color={'blue'} size="large" animating={isLoading}  textContent='Loading..'/> ):null}
   
  <ScrollView >
   
  <View style={styles.productItemContainer}>
  
  
    {apiData?.items?.map(item =>{
         return(
           <View style={styles.productItem}>
           
                     <Image  
                        style={{height: 150, width: '100%'}}
                        source={{uri: item?.image_url}}
                      />
                      <Text
                        style={{fontSize: 15, marginBottom: 10, color: '#000'}}
                        numberOfLines={1}>
                        {item?.name}
                      </Text>
                      <View style={styles.priceWrap}>
                        <Text style={styles.dprice}>
                          {item?.price} INR
                        </Text>
                          <Text style={styles.oprice}>
                          {item?.discounted_price} INR
                        </Text>
                      </View>
                      <Button onPress={()=> props.navigation.navigate("Detailpage", {data: item,})}  title="Add to cart" />
                    </View>                         
         );
       })}

  </View>
   </ScrollView>
  
  </ImageBackground>
  </KeyboardAvoidingView>
  </View> 
  );
  }

const styles = StyleSheet.create ({
   
  container: {
padding:10,
    },

    pageHeading: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#000',
    } ,

    productItemContainer: {
      
      flexDirection: 'row',
      flexWrap: 'wrap', 
    },

    productItem: {
      width: '44%',
      padding: 10,
      borderWidth: 2,
      borderColor: '#000',
      borderStyle: 'solid',
      borderRadius: 6,
      marginHorizontal: 10,
      marginVertical: 10,
      backgroundColor:'lightblue',
      alignItems:'center'
    },

    catName: {
      color: '#000',
      textAlign: 'center',
      backgroundColor: 'gray',
      color: 'white',
      padding: 10,
      marginVertical: 10,
      fontSize: 20
    },

    priceWrap: {
      flexDirection: 'row',
      marginBottom: 10,
      alignItems: "center"
    },

    dprice: {
      textDecorationLine: 'line-through',
      marginRight: 10
      , color: '#000'
    },

    oprice: {
      fontSize: 18,
      fontWeight: 'bold',
      color: "#000"
    },

    SearchbarSty:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignContent:'center',
      borderColor:'black',
      borderWidth:2,
      backgroundColor: '#ddd',
      borderRadius:10,
      margin:10, 
     

    },
    SearchtextStyl:{
     
       padding: 10,
       width:'90%',  
    }
  });