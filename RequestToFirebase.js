import React, { Component } from 'react'
import {View , Text, Image,TouchableWithoutFeedback,TouchableOpacity,Alert} from 'react-native'
import { LinearGradient } from 'expo';
import Firebase from './firebaseComp'
export default class RequestToFirebase extends Component {
    
    submit=()=>{
      
        Alert.alert(this.props.bloodGroup);
        Alert.alert(this.props.bloodFor)
        Alert.alert(this.props.city);

    
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
