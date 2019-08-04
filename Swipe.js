import React  from 'react';
import {StyleSheet,Text,View,StatusBar,ListView,ScrollView,Image,TouchableOpacity} from 'react-native'
import Login from './Login'

export default class Swipee extends React.Component {
  static navigationOptions = {
    header: null,
    };

  render() {
    return (
        <ScrollView
        horizontal = {true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        >

             <View style={{flex:1,justifyContent:'flex-end',backgroundColor:'#fff'}}>
                 <Image source={require('../pics/firstSwipe.png')} />
             </View>
              
             <View style={{flex:1,justifyContent:'flex-end',backgroundColor:'#fff'}}>
                 <Image source={require('../pics/firstSwipe2.png')} />

                 <View style={styles.btnView}>
                   <TouchableOpacity style={styles.btn}
                   onPress={()=>{this.props.navigation.navigate('Login')}}
                   >
                       <Text style={styles.btxText}>FINISH</Text>
                   </TouchableOpacity>
                   </View>
             </View>


             </ScrollView>
             
          );
  }
}
const styles=StyleSheet.create({
    btnView:{
        height:50, 
        alignSelf: 'flex-end',
        position: 'absolute',
        marginTop:50
    },
    btn:{
      borderColor:'#fff',
      borderRadius: 20,
      borderWidth:1,
      borderRightWidth: 0,
      width:100,
      height:35,
      left:13
    },
    btxText:{
      textAlign:'center',
      paddingTop :7,
      color:'#fff',
      fontWeight: '500',
    }

})

