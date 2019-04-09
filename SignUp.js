import React, { Component } from 'react'
import {View , Text, Image,TouchableOpacity,StyleSheet,Alert} from 'react-native'
import { LinearGradient } from 'expo';
import { Container, Header, Content, Item, Input,Button } from 'native-base';
import Firebase from './firebaseComp'
import Login from './Login'

export default class SignUp extends Component {                      //Main Class
 
    static navigationOptions = { title: 'Welcome', header: null };
    
    constructor(props){
      super(props);
      this.state=({
        email:'',
        password:'',
      })
    }

  signUp=(email,password)=>{
   try {
     if(this.state.password.length < 6){
       Alert.alert("Please enter atLeast 6 characters")
     }
     else{
      Firebase.auth().createUserWithEmailAndPassword(email,password)
     }

   } catch (error) {
    
    console.log(error.toString())
     }
  }

  render() {
    return (
        <Container>
        <View style={{alignItems:'center',marginTop:30}}>
        <Image source ={require('../pics/up1.png')}/>
        </View>
         <Content>
          <Item rounded style={styles.textBox}>
            <Input
             placeholder='Email'
             onChangeText={(email)=>this.setState({email})}
             />
          </Item>
          <Item rounded style={styles.textBox}>
            <Input placeholder='Password'
            secureTextEntry={true}
            onChangeText={(password)=>this.setState({password})}
            />
          </Item>
          <TouchableOpacity style={{alignItems:'center',marginTop:10}}
          onPress={()=>this.signUp(this.state.email,this.state.password)}
          >
          <LinearGradient
          colors={['#FF217A', '#FF4D4D']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 40,width:140,height:50 }}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          >
            <Text style={styles.btnTxt}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('Login')}
          >
              <Text style={{color:'#828282',textAlign:'center',paddingTop:5}}>ALREADY HAVE ACCOUNT? SIGN IN</Text>
          </TouchableOpacity>

          <View style={{marginTop:70}}>
         <Image source ={require('../pics/up2.png')}/>
         </View>

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
        width:300,marginLeft:30,marginTop:15
    }
})
