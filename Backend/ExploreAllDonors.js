import React, { Component } from 'react'
import {View,Text, Button,Alert, StyleSheet, FlatList, Image} from 'react-native'
import Firebase from '../firebaseComp'
import Activity from '../Activity'
class FlatListItem extends Component{

  render(){
    return(
      <View style={{backgroundColor: '#EFEFEF',marginTop:10}}>

      <View style={styles.card}>
      
      <Image style={{height:75,width:75,borderRadius:100,marginTop:15,position:'absolute',marginLeft:10}} source={{uri: this.props.item.url}}/>
      <Image style={{height:9.88,width:7.92,marginTop:15,position:'absolute',marginLeft:105,marginTop:45}} source={require('../../pics/loc.png')}/>

      <Text style={styles.name}>{this.props.item.name}</Text>

      <Text style={styles.city}>{this.props.item.city}</Text>
      <View style ={{width:141,height:35,borderColor:'#C9C9C9',borderRadius:20,borderWidth:1,marginTop:20,marginLeft:100}}>
       <Text style ={{alignSelf:'center',paddingTop:7 ,color:'#FF3162'}}>Ask For Help</Text>
      </View>
       </View>
       <View style={styles.bloodGroupView}>
       <Text style={{alignSelf:'center',paddingTop:10 ,color:'#FF3162'}}>{this.props.item.blood}</Text>
      </View>
   </View>
    );
  }
}

export default class ExploreAllDonors extends Component {

  componentDidMount(){

    var ref = Firebase.database().ref("/users/Donors"); //Here assuming 'Users' as main table of contents   

    ref.once('value').then(snapshot => {
        // console.log(snapshot.val());
    
         // get children as an array
         var items = [];
         snapshot.forEach((child) => {
           items.push({
              blood: child.val().blood,
              name: child.val().name,
              email: child.val().email,
              phone: child.val().phone,
              city: child.val().city,
              url:child.val().url
           });
        });
    
        this.setState({ stores: items,isLoading:false});
    });
  }

  constructor(props){
    super (props);
    this.state={
      stores:[],
      isLoading :true
    }
  }
 check=()=>{
    console.log(this.state.stores)
 }
  render() {
    if(this.state.isLoading==true){
     return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Activity/>
      </View>
     );
    }
    else {
    return (
      <View style={{backgroundColor:'#EFEFEF'}}>
         <FlatList data={this.state.stores}
          renderItem={({item, index})=>{
            return (
              <FlatListItem item={item} index={index}>

              </FlatListItem>
            )
          }}
         />
      </View>
    );
    }
  }
}
const styles = StyleSheet.create({
card :{
  height:141,width:371,backgroundColor:'#fff'
    },
 bloodGroupView:{
  height:41,width:41,borderColor:'#C9C9C9',
  position :'absolute',borderWidth:1,borderRadius:20,
  left:300,
  top:30 
},
name :{
  paddingLeft: 110,
  paddingTop:20
},
city:{
  fontSize:10,
  color:'#707070',
  paddingLeft:120,
  paddingTop:5
}
})