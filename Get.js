import React, { Component } from 'react'
import {View , Text, Image,TouchableWithoutFeedback,TouchableOpacity,Button} from 'react-native'
import { LinearGradient } from 'expo';
import Firebase from './firebaseComp'
import { Constants, ImagePicker, Permissions } from 'expo';
import uuid from 'uuid';
export default class Get extends Component {
    constructor(props){
        super(props);
        this.state={
            z:'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540zainahmad%252FBloodDonor/ImagePicker/3bb527cd-20f4-4230-a65f-ddca614d1439.jpg'
        }
    }
    onP=async()=>{
        const ref = Firebase.storage().ref();
const url = await ref.getDownloadUrl("uuid.v4()");
this.setState({z:url})
    }
  render() {
    return (
        <View>

            <Image style={{height:100,width:100,borderRadius:100,alignSelf:'center',marginTop:10}} source={{uri:"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540zainahmad%252FBloodDonor/ImagePicker/3bb527cd-20f4-4230-a65f-ddca614d1439.jpg"}}/>

        </View>

    )
  }
}
