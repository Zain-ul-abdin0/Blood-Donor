import React, { Component } from 'react'
import {View , Text , StyleSheet, Image ,Button, TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
import { LinearGradient } from 'expo';
import ExploreAllDonors from './ExploreAllDonors'
import AllRequests from './AllRequests'
import {createDrawerNavigator,createAppContainer} from 'react-navigation'

 class LandingPage extends Component {
  componentDidMount(){
    if(this.props.drawers=='1'){
      this.props.navigation.openDrawer()
    }
  }

 constructor(props){
   super (props);
 }
      render() {
    return (
        <View>

         <LinearGradient
          colors={['#FF217A', '#FF4D4D']}
          style={{ padding: 15, alignItems: 'center',width:500,height:260 }}
            ></LinearGradient>

        <View style={{flex:1,position:'absolute',height:101,width:316,alignSelf:'center',marginTop:30,}}>
          <Text style={styles.numbers}>0</Text>
          <Text style={styles.txt}>Donor's</Text>
          
           <Image source ={require('../../pics/LandingPage/Landing.png')}/>
        </View>
         

        <TouchableOpacity style={[styles.btnView,{marginTop:60}]} onPress={()=>{this.props.navigation.navigate('ExploreAllDonors')}}>
          <Text style={styles.btn}>FIND DONOR</Text>
        </TouchableOpacity>
        
        <View style={{flex:1,position:'absolute',height:101,width:316,alignSelf:'center',marginTop:140}}>
          <Text style={styles.numbers}>0</Text>
          <Text style={styles.txt}>Request</Text>
           <Image source ={require('../../pics/LandingPage/Landing.png')}/>
        </View>

        
        <View style={{position:'absolute',marginTop:120}}>
        <TouchableOpacity style={[styles.btnView,]} onPress={()=>{this.props.navigation.navigate('AllRequests')}}>
         <Text style={styles.btn}>SEE REQUEST</Text>
        </TouchableOpacity>

        </View>
        </View>
      )
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  LandingPage:LandingPage,
  ExploreAllDonors:ExploreAllDonors,
  AllRequests:AllRequests,
  })

export default createAppContainer(AppDrawerNavigator);
const styles = StyleSheet.create({
    Header:{
        height:50,
        width:200
    },
   btn:{
        alignSelf:'center',
        color:'#FF275B',
        paddingTop: 10,
        fontWeight: '500',
       
   },
   btnView:{
    borderRadius: 40,width:155.64,height:38,color:'black',
    backgroundColor:'#fff',position:'absolute',marginTop:50,marginLeft:160
   },
   txt:{
       paddingTop:50,
       paddingLeft: 30,
       position:'absolute',
       color:'#fff'
   },
   numbers:{
    paddingTop:25,
    paddingLeft: 50,
    position:'absolute',
    color:'#fff',
    fontWeight: '500',
    fontSize: 20,
   }
}) 