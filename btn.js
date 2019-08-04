import React, { Component } from 'react'
import {View , Text, Image,TouchableWithoutFeedback,TouchableOpacity,Alert} from 'react-native'
import { LinearGradient } from 'expo';
import DonorToFirebase from './DonorToFirebase'
export default class Btn extends Component {
    constructor(props){
        super(props);
        this.state={
            aNegative:require('../pics/DonorPics/A-.png'),
            aPositive:require('../pics/DonorPics/A+.png'),
            aNegativeColor:require('../pics/DonorPics/A-Color.png'),
            aPositiveColor:require('../pics/DonorPics/A+Color.png'),
            abNegative:require('../pics/DonorPics/AB-.png'),
            abPositive:require('../pics/DonorPics/AB+.png'),
            abNegativeColor:require('../pics/DonorPics/AB-Color.png'),
            abPositiveColor:require('../pics/DonorPics/AB+Color.png'),
            bNegative:require('../pics/DonorPics/B-.png'),
            bPositive:require('../pics/DonorPics/B+.png'),
            bNegativeColor:require('../pics/DonorPics/B-Color.png'),
            bPositiveColor:require('../pics/DonorPics/B+Color.png'),
            oNegative:require('../pics/DonorPics/O-.png'),
            oPositive:require('../pics/DonorPics/O+.png'),
            oNegativeColor:require('../pics/DonorPics/O-Color.png'),
            oPositiveColor:require('../pics/DonorPics/O+Color.png'),
            bloodGroup:''
        }
    }
  
  render() {
    return (
       <View style={{flex:1,flexDirection:'row'}}>
         <View style={{marginLeft:20}}>
          <TouchableWithoutFeedback
          onPress={()=>this.setState({
          aPositive:this.state.aPositiveColor,
          aNegative:require('../pics/DonorPics/A-.png'),
          abNegative:require('../pics/DonorPics/AB-.png'),
          abPositive:require('../pics/DonorPics/AB+.png'),
          bNegative:require('../pics/DonorPics/B-.png'),
          bPositive:require('../pics/DonorPics/B+.png'),
          oNegative:require('../pics/DonorPics/O-.png'),
          oPositive:require('../pics/DonorPics/O+.png'),
          bloodGroup:'A+'
          })}
          >
         <Image source={this.state.aPositive}/>
         </TouchableWithoutFeedback>
         </View>
          
         <View style={{marginLeft:10}}>
         <TouchableWithoutFeedback
         onPress={()=>this.setState({
             aNegative:this.state.aNegativeColor,
             aPositive:require('../pics/DonorPics/A+.png'),
             abNegative:require('../pics/DonorPics/AB-.png'),
             abPositive:require('../pics/DonorPics/AB+.png'),
             bNegative:require('../pics/DonorPics/B-.png'),
             bPositive:require('../pics/DonorPics/B+.png'),
             oNegative:require('../pics/DonorPics/O-.png'),
             oPositive:require('../pics/DonorPics/O+.png'),
             bloodGroup:'A-'
         })}
         >
         <Image source={this.state.aNegative}/>
         </TouchableWithoutFeedback>
         </View>

         <View style={{marginLeft:10}}>
         <TouchableWithoutFeedback
         onPress={()=>this.setState({
             bPositive:this.state.bPositiveColor,
             oNegative:require('../pics/DonorPics/O-.png'),
             oPositive:require('../pics/DonorPics/O+.png'),
             aPositive:require('../pics/DonorPics/A+.png'),
             abNegative:require('../pics/DonorPics/AB-.png'),
             abPositive:require('../pics/DonorPics/AB+.png'),
             bNegative:require('../pics/DonorPics/B-.png'),
             aNegative:require('../pics/DonorPics/A-.png'),
             bloodGroup:'B+'
         })
         }
         >
         <Image source={this.state.bPositive}/>
         </TouchableWithoutFeedback>
         </View>
         
         <View style={{marginLeft:10}}>
         <TouchableWithoutFeedback
         onPress={()=>this.setState({
             bNegative:this.state.bNegativeColor,
             oNegative:require('../pics/DonorPics/O-.png'),
             oPositive:require('../pics/DonorPics/O+.png'),
             aPositive:require('../pics/DonorPics/A+.png'),
             abNegative:require('../pics/DonorPics/AB-.png'),
             abPositive:require('../pics/DonorPics/AB+.png'),
             aNegative:require('../pics/DonorPics/A-.png'),
             bPositive:require('../pics/DonorPics/B+.png'),
             bloodGroup:'B-'

         })
         }
         >
         <Image source={this.state.bNegative}/>
         </TouchableWithoutFeedback>
         </View>
         
         <View style={{marginLeft:10}}>
         <TouchableWithoutFeedback
         onPress={()=>this.setState({
             abPositive:this.state.abPositiveColor,
             oNegative:require('../pics/DonorPics/O-.png'),
             oPositive:require('../pics/DonorPics/O+.png'),
             aPositive:require('../pics/DonorPics/A+.png'),
             abNegative:require('../pics/DonorPics/AB-.png'),
             aNegative:require('../pics/DonorPics/A-.png'),
             bPositive:require('../pics/DonorPics/B+.png'),
             bNegative:require('../pics/DonorPics/B-.png'),
             bloodGroup:'AB+'

           
         })
         }
         >
         <Image source={this.state.abPositive}/>
         </TouchableWithoutFeedback>
         </View>
         
         <View style={{marginLeft:10}}>
         <TouchableWithoutFeedback
           onPress={()=>this.setState({
             abNegative:this.state.abNegativeColor,
             oNegative:require('../pics/DonorPics/O-.png'),
             oPositive:require('../pics/DonorPics/O+.png'),
             aPositive:require('../pics/DonorPics/A+.png'),
             abPositive:require('../pics/DonorPics/AB+.png'),
             aNegative:require('../pics/DonorPics/A-.png'),
             bPositive:require('../pics/DonorPics/B+.png'),
             bNegative:require('../pics/DonorPics/B-.png'),
             bloodGroup:'AB-'


         })
         }
         >
         <Image source={this.state.abNegative}/>
         </TouchableWithoutFeedback>
         </View>
         
         
        <View style={{position:'absolute',top:20,flex:1,flexDirection:'row',marginTop:30,marginLeft:20}}>
         <TouchableWithoutFeedback
           onPress={()=>this.setState({
              oPositive:this.state.oPositiveColor,
             oNegative:require('../pics/DonorPics/O-.png'),
             aPositive:require('../pics/DonorPics/A+.png'),
             abPositive:require('../pics/DonorPics/AB+.png'),
             aNegative:require('../pics/DonorPics/A-.png'),
             bPositive:require('../pics/DonorPics/B+.png'),
             bNegative:require('../pics/DonorPics/B-.png'),
             abNegative:require('../pics/DonorPics/AB-.png'),
             bloodGroup:'O+'

 
         })
         }
         >
         <Image source={this.state.oPositive}/>
         </TouchableWithoutFeedback>

        <View style={{marginLeft:10}}>
         <TouchableWithoutFeedback
           onPress={()=>this.setState({
             oNegative:this.state.oNegativeColor,
             oPositive:require('../pics/DonorPics/O+.png'),
             aPositive:require('../pics/DonorPics/A+.png'),
             abPositive:require('../pics/DonorPics/AB+.png'),
             aNegative:require('../pics/DonorPics/A-.png'),
             bPositive:require('../pics/DonorPics/B+.png'),
             bNegative:require('../pics/DonorPics/B-.png'),
             abNegative:require('../pics/DonorPics/AB-.png'),
             bloodGroup:'O-'

 
         })
         }
         >
         <Image source={this.state.oNegative}/>
         </TouchableWithoutFeedback>
         </View>
         </View>
        
         <DonorToFirebase email={this.props.email} gender={this.props.gender} name={this.props.name} blood={this.state.bloodGroup} phone={this.props.phone}  url={this.props.url}/>
       </View>
       
    )
  }
}
