import React, { Component } from 'react'
import {View , Text, Image,TouchableWithoutFeedback,TouchableOpacity,Alert} from 'react-native'
import { LinearGradient } from 'expo';
import Firebase from './firebaseComp'
export default class DonorToFirebase extends Component {
    
    submit=()=>{
        const {currentUser}=Firebase.auth();
        Firebase.database().ref(`/users/${currentUser.uid}/Donors`).push({
            name:this.props.name,
            city:this.props.email,
            phone:this.props.phone,
            gender:this.props.gender,
            blood:this.props.blood,

            
        })
    
    }
    
    render() {
    return (
        <View style={{flex:5 ,flexDirection:'column',alignItems:'flex-end',marginTop:100,justifyContent:'center',marginRight:20}}>
        <TouchableOpacity style={{flex:1,flexDirection:'column',alignItems:'center',marginTop:10}}
        onPress={()=>this.submit()}
        >
          <LinearGradient
          colors={['#FF217A', '#FF4D4D']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 40,width:300,height:50 }}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          >
            <Text style={{color:'white'}}>SUBMIT</Text>
            </LinearGradient>
          </TouchableOpacity>
              
        </View>
    )
  }
}
