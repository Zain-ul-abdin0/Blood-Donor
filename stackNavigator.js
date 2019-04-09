import {createStackNavigator} from 'react-navigation'
import Swipee from './Swipe'
import Login from './Login'
import SignUp from './SignUp'
import BecomeDonor from './BecomeDonor'
import SplashScreen from './SplashScreen'
import requestBlood from './requestBlood'
export default Stock = createStackNavigator({
    Swipee:Swipee,
    requestBlood:requestBlood,
    SplashScreen:SplashScreen,
    Login:Login,
    BecomeDonor:BecomeDonor,
    SignUp:SignUp,


 })
 
 