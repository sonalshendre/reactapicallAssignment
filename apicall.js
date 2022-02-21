import { 
  View, Text, ScrollView ,Image,Button, 
  StyleSheet, ImageBackground, ActivityIndicator, Pressable} from 'react-native';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Detailpage from './detailpage';




export default function Apicall(props) {


    const [apiData, setapiData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const apiURL =
    'https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0';

useEffect(()=>{
    axios.get(apiURL).then(data=>{
      console.log(data,"typing")
     setapiData(data.data);
     setLoading(true);
       setTimeout(() => {
      setLoading(false);
    }, 3);
    });

},[]);



  return (
   <View style={styles.container}>
     <Pressable onPress={()=> props.navigation.goBack()}>
        <Text style={{fontSize: 20,fontWeight: 'bold', color: '#000'}}>Back</Text></Pressable>
     <View style={{backgroundColor: 'lightblue'}}><Text style={styles.pageHeading}>Fruit Bazar</Text></View>
     { isLoading ?(
       <ActivityIndicator color={'blue'} size="large" animating={isLoading}  textContent='Loading..'/> ) :
       (
      <ScrollView >
      {apiData?.store_items?.map(item => {
          return (
            <View style={{backgroundColor:"black"}}>
              <Text style={styles.catName}> { item?.category?.name} </Text>
              <View style={styles.productItemContainer}>
                {item?.items?.map(productItem => {
                  return (
                    <View style={styles.productItem}>
                     <Image  
                        style={{height: 150, width: '100%'}}
                        source={{uri: productItem?.image_url}}
                      />
                      <Text
                        style={{fontSize: 15, marginBottom: 10, color: '#000'}}
                        numberOfLines={1}>
                        {productItem                      ?.name}
                      </Text>
                      <View style={styles.priceWrap}>
                        <Text style={styles.dprice}>
                          {productItem?.price} INR
                        </Text>
                          <Text style={styles.oprice}>
                          {productItem?.discounted_price} INR
                        </Text>
                      </View>
                      <Button onPress={()=> props.navigation.navigate("Detailpage", {data: productItem,})}  title="Add to cart" />
                    </View>
                  );
                         })}
              </View>
            </View>
          );
               })}  

    </ScrollView> )}
    </View>
    
  );
             
};
const styles = StyleSheet.create ({
   
    container: {
        padding: 20,
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
        backgroundColor: 'lightblue'
        ,justifyContent:'center'
      },
      catName: {
        color: '#000',
        textAlign: 'center',
        backgroundColor: 'gray',
        color: 'black',
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
      },

      oprice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000"
      },
    });