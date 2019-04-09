import React, { Component } from 'react'
import { Text, View, Image ,ActivityIndicator,StyleSheet} from 'react-native';


export default class SplashScreen extends Component {
  static navigationOptions = { title: 'Welcome', header: null };

  render() {
    
    return (
        <View style={{flex:1,position:'relative'}}>      
        <Image source={require('../pics/Splash.png')} />
        <View style={styles.ActiveIndicator}>
        <ActivityIndicator  size="large" color="#FF3B3B" />
        </View>
        </View>
       );
  }
}
const styles=StyleSheet.create({
    ActiveIndicator : {
        position: 'relative',
        top: -110,
        left:125,
        width: 100,
        height: 100,
                  
    },
})