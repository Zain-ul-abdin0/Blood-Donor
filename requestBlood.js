import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button,Picker,
  TouchableOpacity,Image,TextInput
} from 'react-native';
import { Container, Header, Body, Right, Left, Title,Content,Item,Input } from 'native-base';
import SelectBlood from './SelectBlood'
export default class requestBlood extends Component {
	constructor(){
		super();
		this.state={
            bloodFor:'Friend',
            city:'Lahore',
		}
		
	};

    
    static navigationOptions = {
        title: 'Request for Blood',
        headerStyle: {
          
          backgroundColor: '#fff',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
        
        headerLeft: (
          <TouchableOpacity
          onPress={() => {}}
          >
           <View style={{marginLeft:10}}>
           <Image  
            source={require('../pics/back.png')}
           
          />
          </View>
          </TouchableOpacity>
        ),
        
      };

  render() {
    return (
      <View style={styles.container}>
      
         <Text style={styles.txt}>Blood For</Text>
         <View style={{marginTop:10}}>
          <Item rounded style={styles.round}>
            <Input style ={{fontSize:12}} placeholder='Friend' placeholderTextColor='#A2A2A2' 
            onChangeText={(bloodFor)=>this.setState({bloodFor})}
             />
          </Item>
          </View>

         <Text style={styles.txt}>City Preference</Text>
         <View style={{marginTop:10}}>
          <Item rounded style={styles.round}>
            <Input style ={{fontSize:12}} placeholder='Lahore' placeholderTextColor='#A2A2A2' 
            onChangeText={(city)=>this.setState({city})}
             />
          </Item>
          </View>
          <Text style={styles.txt}>Select Blood Group</Text>
        <SelectBlood blood={this.state.bloodFor} city={this.state.city}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  txt: {
    padding:20,
    fontWeight:'bold'
  },
  round: {
    backgroundColor:'#EFEFEF',borderColor:'#EFEFEF',width:320,alignSelf:'center'

  },
});