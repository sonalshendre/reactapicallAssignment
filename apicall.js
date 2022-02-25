import { 
  View, Text, ScrollView ,Image,Button, 
  StyleSheet, ImageBackground, ActivityIndicator, Pressable, TouchableOpacity} from 'react-native';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Detailpage from './detailpage';




export default function Apicall(props) {


    const [apiData, setapiData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [cartData,setCartData] = useState({});
    const [totalqty,settotalqty]= useState(0);

    const apiURL =
    'https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0';

useEffect(()=>{
    axios.get(apiURL).then(data=>{
      console.log(data,"typing")
    
     setLoading(true);
     setapiData(data.data);
      setLoading(false);
    
    });
},[]);

useEffect(()=>{
    var totalQuantity =0;
  cartData && Object.keys(cartData)?.length &&
  Object.keys(cartData).map((key)=>{
    totalQuantity = totalQuantity + cartData[key]?. quantity 
  });
console.log( totalQuantity);
settotalqty(totalQuantity);
},[cartData]);


const handleCart =(productItem)=>{
  let cartPayload = {...cartData};
console.log("cart",cartPayload);
cartPayload[productItem?.id]={
  ...productItem,
  quantity : 1,
}
  setCartData(cartPayload);
}

const incrementCart=(id)=>{
  let cartPayload = {...cartData};
  cartPayload[id].quantity= cartPayload[id].quantity + 1;
  setCartData(cartPayload);
}
const decrementCart=(id)=>{
  let cartPayload = {...cartData};
  cartPayload[id].quantity= cartPayload[id].quantity - 1;
  setCartData(cartPayload);
}

const renderCartButton=(productItem)=>{
  return(
    cartData[productItem?.id]?.quantity ?(<View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <TouchableOpacity style={{flex:1}} onPress={()=> decrementCart(productItem?.id)}>
      <Text style={{textAlign:'center', backgroundColor:'blue', color:'white', fontSize:15,fontWeight:'bold'}}>-</Text>
      </TouchableOpacity>
   <Text style={{flex:1 ,textAlign:"center"}}>
     {cartData[productItem?.id]?.quantity} </Text>
   <TouchableOpacity style={{ flex:1}} onPress={()=>incrementCart(productItem?.id)}>
     <Text style={{textAlign:'center', backgroundColor:'blue', color:'white', fontSize:15}} >+</Text>
     </TouchableOpacity>
  </View>):(<Button  onPress={()=>handleCart(productItem)} title="Add to cart" />)

  );
}


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
                {item?.items?.slice(0,2)?. map(productItem => {
                  return (
                    <View style={styles.productItem}>
                      <TouchableOpacity onPress={()=> props.navigation.navigate("Detailpage", {data: productItem,})}>
                      <Image  
                        style={{height: 150, width: '100%'}}
                        source={{uri: productItem?.image_url}}
                      />
                      <Text
                        style={{fontSize: 15, marginBottom: 10, color: '#000'}}
                        numberOfLines={1}>
                        {productItem?.name}
                      </Text>
                      <View style={styles.priceWrap}>
                        <Text style={styles.dprice}>
                          {productItem?.price} INR
                        </Text>
                          <Text style={styles.oprice}>
                          {productItem?.discounted_price} INR
                        </Text>
                      </View>
                      </TouchableOpacity>
                      { renderCartButton(productItem)}
                    </View>
                  );
                         })}
                </View>
               {item?.items?.length>2 ? <Text style={{color:'white'}}>see all products......</Text>:null}
                </View>
          );
               })}  

    </ScrollView>
    )}
    <View>
      { cartData && Object.keys(cartData)?.length ?
      <Pressable
      onPress={()=> props.navigation.navigate("CartPage", {data : cartData,})}
       style={{flexDirection:'row',justifyContent:'space-between', padding:10,backgroundColor: 'lightblue'}}>
      <Text>View cart</Text>
      <Text> {totalqty} </Text>
    </Pressable> : null}
    </View>
   </View>
    
  );
             
};
const styles = StyleSheet.create ({
   
    container: {
      
        flex:1
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