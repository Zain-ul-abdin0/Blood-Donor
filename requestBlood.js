import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button,Picker,
  TouchableOpacity,Image,TouchableWithoutFeedback,ScrollView
} from 'react-native';
import { Container, Header, Body, Right, Left, Title,Content,Item,Input,Thumbnail } from 'native-base';
import SelectBlood from './SelectBlood'
import { ImagePicker } from 'expo';

export default class requestBlood extends Component {
	constructor(){
		super();
		this.state={
            bloodFor:'Friend',
            city:'Lahore',
            image:require('../pics/user.png'),
            phone:'',
            url:''
		}
		
  };
 
  
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result,url:result.uri });
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
    let { image } = this.state;
     
    

    return (

      <ScrollView style={styles.container}> 
      <TouchableWithoutFeedback
      onPress={this._pickImage}
     >
 
  

   <Thumbnail source={  image }  style={{height:100,width:100,borderRadius:100,alignSelf:'center',marginTop:10}}/>
 
   </TouchableWithoutFeedback> 

      <View style={styles.container}>
      
         <Text style={styles.txt}>Name</Text>
         <View style={{marginTop:10}}>
          <Item rounded style={styles.round}>
            <Input style ={{fontSize:12}} placeholder='Name' placeholderTextColor='#A2A2A2' 
            onChangeText={(bloodFor)=>this.setState({bloodFor})}
             />
          </Item>
          </View>

          <Text style={styles.txt}>Phone number</Text>
         <View style={{marginTop:10}}>
          <Item rounded style={styles.round}>
            <Input style ={{fontSize:12}} placeholder='Phone number' placeholderTextColor='#A2A2A2' 
            onChangeText={(phone)=>this.setState({phone})}
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
        <SelectBlood blood={this.state.bloodFor} city={this.state.city} phone={this.state.phone} url={this.state.url}/>
      </View>
      </ScrollView>
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