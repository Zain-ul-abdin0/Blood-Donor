import React, { Component } from 'react'
import {View , Text, Image,TouchableOpacity,StyleSheet,Alert} from 'react-native'
import { LinearGradient } from 'expo';
import { Container, Header, Content, Item, Input,Button } from 'native-base';
import Firebase from './firebaseComp'
import Swipee from './Swipe'
import SignUp from './SignUp'
import BecomeDonor from './BecomeDonor'
import Activity from './Activity'
export default class Login extends Component {
  static navigationOptions = {
    header: null,
    };

    constructor(props){
      super(props);
      this.state=({
        email:'',
        password:'',
        isLoading:0
      })
    }
  
     logIn=(email,password) =>{
      this.setState({isLoading:1})      

       Firebase.auth().signInWithEmailAndPassword(email, password).then(this.onSuccess.bind(this)).catch(this.onFailure.bind(this))
  
}
onFailure=()=>{
  Alert.alert("You have entered wrong password or email")
  this.setState({isLoading:0})      

}

onSuccess=()=>{
  this.props.navigation.navigate('BecomeDonor')        
  this.setState({isLoading:0})      

}

onButton=()=>{
if(this.state.isLoading==1){
  return(
      <Activity/>
  );
}
else{
  return(
    <TouchableOpacity 
          onPress={()=>{this.logIn(this.state.email,this.state.password)}}
          style={{alignItems:'center',marginTop:5}}>
          <LinearGradient
          colors={['#FF217A', '#FF4D4D']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 40,width:140,height:50 }}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          >
            <Text style={styles.btnTxt}>Sign in</Text>
            </LinearGradient>
          </TouchableOpacity>
  );
  }
}
  render() {
    return (
        <Container>
        <Image source ={require('../pics/LoginPic.png')}/>
         <Content>
          <Item rounded style={styles.textBox}>
            <Input 
            onChangeText={(email)=>this.setState({email})}
            placeholder='Email'/>
          </Item>
          <Item rounded style={[{marginTop:5},{width:300,marginLeft:30}]}>
            <Input 
            onChangeText={(password)=>this.setState({password})}
            placeholder='Password'
            secureTextEntry={true}
            />
          </Item>
          {this.onButton()}
          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('SignUp')}
          >
              <Text style={{color:'#828282',textAlign:'center',paddingTop:5}}>DON'T HAVE AN ACCOUNT? SIGNUP</Text>
          </TouchableOpacity>
        </Content>
        </Container>
        
    )
  }
}
const styles=StyleSheet.create({
    btnTxt:{
        color:'white',
        fontWeight: '500',
    },
    textBox:{
        width:300,marginLeft:30
    }
})
