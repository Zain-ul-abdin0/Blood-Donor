import React, { Component } from 'react'
import {View , Text, Image,TouchableOpacity,StyleSheet,ScrollView,TouchableWithoutFeedback,Alert,Keyboard,Button} from 'react-native'
import { Container, Header, Body, Right, Left, Title,Content,Item,Input,Thumbnail } from 'native-base';
import { LinearGradient } from 'expo';
import Btn from '../components/btn'
import { ImagePicker } from 'expo';


console.disableYellowBox = true;

export default class BecomeDonor extends Component {

  
  constructor(props){
    super (props);
    this.state={
      womenColor: require('../pics/womanColor.png'),
      women: require('../pics/woman.png'),
      menColor: require('../pics/manColor.png'),
      men: require('../pics/man.png'),
      gender:'',
      name:'',
      email:'',
      phone:'',
      image:require('../pics/user.png'),
      url:''
    }
  }

  submit=()=>{
    return (<View><Text>zaindsfffdfdsfsd</Text></View>)
  }
  
  static navigationOptions = {
    title: 'Become Donor',
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
  
  render() {
        let { image } = this.state;

    return (
        

        <ScrollView style={styles.container}>
              
          <TouchableWithoutFeedback
           onPress={this._pickImage}
          >
        
         
  
          <Thumbnail source={  image }  style={{height:100,width:100,borderRadius:100,alignSelf:'center',marginTop:10}}/>
        
          </TouchableWithoutFeedback>
        <Container>
        <Content>
        <View style={{marginTop:10}}>
          <Item rounded style={styles.round}>
            <Input style ={{fontSize:12}} placeholder='Name' placeholderTextColor='#A2A2A2' 
            onChangeText={(name)=>this.setState({name})}
             />
          </Item>
          </View>
         
          <View style={{marginTop:10}}>
          <Item rounded style={styles.round}>
            <Input style ={{fontSize:12}} placeholder='City' placeholderTextColor='#A2A2A2'
              onChangeText={(email)=>this.setState({email})}
            />
          </Item>
          </View>

          <View style={{marginTop:10}}>
          <Item rounded style={styles.round}>
            <Input style ={{fontSize:12}} placeholder='Phone Number' placeholderTextColor='#A2A2A2'
            onChangeText={(phone)=>this.setState({phone})}

            />
          </Item>
          </View>
         
            <Text style={styles.gender}>Gender</Text>
            <View style={styles.Border}></View>
          <View style={{position:'absolute',marginTop:240,marginLeft:100}}>
          <TouchableWithoutFeedback
          onPress={()=>this.setState({men:require('../pics/manColor.png'),man:true,women:require('../pics/woman.png'),gender:'male'})}
          >

          <Image  source ={this.state.men}/>
          </TouchableWithoutFeedback>
          </View>

          <View style={{position:'absolute',marginTop:240,marginLeft:200}}>
          <TouchableWithoutFeedback

           onPress={()=>this.setState({women:require('../pics/womanColor.png'),woman:true,men:require('../pics/man.png'),gender:'female'})}
          >
          <Image  source ={this.state.women}/>
          </TouchableWithoutFeedback>
          </View>

          <Text style={styles.gender}>Select Blood Group</Text>
  
          <Btn gender={this.state.gender} name={this.state.name} email={this.state.email} phone={this.state.phone} url={this.state.url}></Btn>

          

          
        </Content>
      </Container>
      
        </ScrollView>
      )
  }
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,
  },
  gender:{
    padding:20,
    fontWeight:'bold'
  },
  Border:{
    position:'relative',
    borderRightColor:'#C9C9C9',borderWidth:1,
    height:50,width:30,borderTopColor:'#fff',
    borderBottomColor:'#fff',borderLeftColor:'#fff',
    alignSelf:'center',
    marginRight: 40,
  },
  round:{
    backgroundColor:'#EFEFEF',borderColor:'#EFEFEF',width:320,alignSelf:'center'
  },
  blood:{
    borderColor:'#fff',
    borderWidth:1,
    borderRadius: 50,
    width:41,
    height:41
  }, 
})