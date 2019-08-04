import React, { Component } from 'react'
import { Text, View, Image ,ActivityIndicator,StyleSheet} from 'react-native';


export default class Activity extends Component {

  render() {
    
    return (
        <View style={styles.ActiveIndicator}>
        <ActivityIndicator  size="large" color="#FF3B3B" />
        </View>
       );
  }
}
const styles=StyleSheet.create({
    ActiveIndicator : {
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
                  
    },
})