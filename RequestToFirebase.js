import React, { Component } from 'react'
import {View , Text, Image,TouchableWithoutFeedback,TouchableOpacity,Alert} from 'react-native'
import { LinearGradient } from 'expo';
import Firebase from './firebaseComp';
import uuid from 'uuid';

export default class RequestToFirebase extends Component {
    constructor(props){
      super(props);
      this.state={
        number :'10'
      }
    }
    submit=()=>{
  
          Firebase.database().ref('/users/Requests').push({
          name:this.props.bloodFor,
          city:this.props.city,
          phone:this.props.phone,
          blood:this.props.bloodGroup,
          url:this.props.url
        });

        var ref = Firebase.database().ref("/users/RequestsCounter"); //Here assuming 'Users' as main table of contents   

        ref.once('value').then(snapshot => {
            // console.log(snapshot.val());
        
             var counting = snapshot.val().counter;
        
            this.setState({number :counting});
            Alert.alert(counting+"");
        
          });

       Firebase.database().ref('/users/RequestsCounter').update({
         counter:this.state.number+1
       })
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
