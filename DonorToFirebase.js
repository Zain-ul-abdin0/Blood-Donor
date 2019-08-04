import React, { Component } from 'react'
import {View , Text, Image,TouchableWithoutFeedback,TouchableOpacity,Alert} from 'react-native'
import { LinearGradient } from 'expo';
import Firebase from './firebaseComp'
import { Constants, ImagePicker, Permissions } from 'expo';
import uuid from 'uuid';


export default class DonorToFirebase extends Component {
    
    submit=()=>{
        Firebase.database().ref('/users/Donors').push({
            name:this.props.name,
            city:this.props.email,
            phone:this.props.phone,
            gender:this.props.gender,
            blood:this.props.blood,
            url:this.props.url
          });
          this.uploadImageAsync(this.props.url);
}
  uploadImageAsync=async(uri) =>{
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const ref = Firebase
    .storage()
    .ref()
    .child(uuid.v4());
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
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
