import { View, Text,Image,StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Monthly from './monthly.png';
import Onlines from './onlines.png';
import BusTicket from './bus.jpeg';
import Paytmc from './paytmc.png';
import MovieT from './movieT.png';
import InQ  from './insuranceQ.png';
import PMoney  from './pMoney.png';
import Fastag  from './fastagg.jpeg';
import Cylinder  from './cylinder.png';
import Mobilere  from './mobilere.png';
import Broadbb from './broadbb.png';
import Wear from './womens.webp';
import MnG from './mng.jpeg';
import StrD from './storadeD.jpeg';
import Offer from './offer.png';





export default function Paytmui() {
  return (
    <View style={{flex:1}}>
      <View style={pageStyles.firstContainer}>
        <Text style={{ fontSize:20, fontWeight: 'bold', color: 'black'}}>Featured</Text>
        <View style={pageStyles.iconContainer_firstContainer}>
        <View style={pageStyles.innerView_iconContainer_firstContainer}>
          <Image source={Monthly} style={pageStyles.imageStyle_firstContainer}/>
           <Text >Monthly {"\n"} Bill</Text>
       </View> 
       <View style={pageStyles.innerView_iconContainer_firstContainer}>
          <Image source={Onlines} style={pageStyles.imageStyle_firstContainer}/>
           <Text>Online {"\n"}Shoping</Text>
       </View>
       <View style={pageStyles.innerView_iconContainer_firstContainer}>
          <Image source={BusTicket} style={pageStyles.imageStyle_firstContainer}/>
           <Text>Bus {"\n"}Tickets</Text>
       </View>
       
       <View style={pageStyles.innerView_iconContainer_firstContainer}>
          <Image source={MovieT} style={pageStyles.imageStyle_firstContainer}/>
           <Text>Movie{"\n"} Tickets</Text>
       </View>
       <View style={pageStyles.innerView_iconContainer_firstContainer}>
          <Image source={Paytmc} style={pageStyles.imageStyle_firstContainer}/>
           <Text>Paytm {"\n"}Credit Card</Text>
       </View>
       <View style={pageStyles.innerView_iconContainer_firstContainer}>
          <Image source={InQ} style={pageStyles.imageStyle_firstContainer}/>
           <Text>Insurance {"\n"} Quotes</Text>
       </View>
       <View style={pageStyles.innerView_iconContainer_firstContainer}>
          <Image source={PMoney} style={pageStyles.imageStyle_firstContainer}/>
           <Text>Paytm {"\n"} Money</Text>
       </View>
       <View style={pageStyles.innerView_iconContainer_firstContainer}>
          <Image source={Fastag} style={pageStyles.imageStyle_firstContainer}/>
           <Text>Paytm {"\n"} Money</Text>
       </View>
       </View>
       </View>
       <View style={pageStyles.secondeContainer}>
       <Text style={{ padding:10,marginBottom:30 ,fontSize:20, fontWeight: 'bold', color: 'black'}}>Recommended</Text>
       <View style={pageStyles.mainIconView_secondeContainer}>
       <View  style={[pageStyles.sec_innnerView_secondeContainer,{borderBottomWidth:1,borderRightWidth:1}]} >
           <Text style={pageStyles.recommendedItemText_secondeContainer}>Book Your Gas {"\n"} Cylinder</Text>
           <Image source={Cylinder} style={pageStyles.imageStyle_secondeContainer}/>
         </View>
         <View  style={[pageStyles.sec_innnerView_secondeContainer,{borderBottomWidth:1}]} >
           <Text style={pageStyles.recommendedItemText_secondeContainer}>Paytm {"\n"} Postpaid</Text>
           <Image source={Monthly} style={pageStyles.imageStyle_secondeContainer}/>
         </View>
         <View  style={[pageStyles.sec_innnerView_secondeContainer,{borderRightWidth:1}]} >
           <Text style={pageStyles.recommendedItemText_secondeContainer}>Recharge your {"\n"} Mobile</Text>
           <Image source={Mobilere} style={pageStyles.imageStyle_secondeContainer}/>
         </View>
         <View  style={pageStyles.sec_innnerView_secondeContainer} >
           <Text style={pageStyles.recommendedItemText_secondeContainer}>Pay your{"\n"}Boardband Bill</Text>
           <Image source={Broadbb} style={pageStyles.imageStyle_secondeContainer}/>
         </View>
      </View>
      </View>
       <View style={{flex:1, backgroundColor:'#fffe'}}>
        <Text style={{fontSize: 20, color: "black",fontWeight:'bold'}}> Shop on Mall</Text> 
       <ScrollView style={{}} horizontal={true}>
         <View style={pageStyles.main_thirdContainerView}>

       <View style={{flexWrap:"wrap" ,flexDirection:'column',}}>
         <Image source={MnG} style={ pageStyles.imagicon_thirdContainer}/>
        <Text style={pageStyles.icontextstyle_thirdContainer}>Mobile{"\n &"}gadgets</Text>
       </View>
       
       <View >
         <Image source={Wear} style={ pageStyles.imagicon_thirdContainer}/>
        <Text style={pageStyles.icontextstyle_thirdContainer}>Ladies{"\n"}Fashion</Text>
       </View>
       <View >
         <Image source={StrD} style={ pageStyles.imagicon_thirdContainer}/>
        <Text style={pageStyles.icontextstyle_thirdContainer}>Storage{"\n"}Devies</Text>
       </View>
       <View >
         <Image source={Offer} style={ pageStyles.imagicon_thirdContainer}/>
        <Text style={pageStyles.icontextstyle_thirdContainer}>Top {"\n"}Offers</Text>
       </View>
       <View style={{flexWrap:'wrap', flexDirection:'column'}}>
         <Image source={MnG} style={ pageStyles.imagicon_thirdContainer}/>
        <Text style={pageStyles.icontextstyle_thirdContainer}>Mobile and {"\n"}gadgets</Text>
       </View>
       </View>
       </ScrollView>
       </View>
      
       
       
       
       
      
    </View>
  )

  }
  
  const pageStyles = StyleSheet.create ({
   
  firstContainer:{ 
    backgroundColor: '#e5dff1',
    flex:1
  },

  imageStyle_firstContainer:{
    width: 50,
    height:50
  },

  iconContainer_firstContainer:{
   flexDirection:'row',
   justifyContent: 'center',
   padding: 10,
   flexWrap: 'wrap',
   alignContent:'center',
   alignItems:'center'
  },

  innerView_iconContainer_firstContainer:{
    width: '19%'
    , margin:10
  },

  secondeContainer:{
     backgroundColor:'#fffe',
     flex:1
  },
  mainIconView_secondeContainer:{
    flexDirection:'row',
   flexWrap: 'wrap',
  },


   sec_innnerView_secondeContainer:{
   flexDirection: 'row',
   width:'50%',
   justifyContent: 'space-between',
   flexWrap:'wrap',
   alignContent:'center'
    
   
   },

  imageStyle_secondeContainer:{
    width:  40,
    height: 40,
    

  
  },

  recommendedItemText_secondeContainer:{
 color: "black",
 fontSize: 15,
 fontWeight: 'bold'
 , padding:10
  },

  main_thirdContainerView:{
   flexDirection:"row",
   justifyContent: 'space-between',
   padding:10,
    paddingBottom: 20,
    margin:20,
    flexWrap: 'wrap'
    
   
  },
  imagicon_thirdContainer:
  {
    width:  75,
    height: 75,
    borderRadius: 75/2, 

  },

  icontextstyle_thirdContainer:{
   fontSize:20,
   color:"black",
   marginEnd: 20,
   
  }

  

  })
