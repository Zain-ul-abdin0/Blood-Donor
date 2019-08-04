import {createStackNavigator , createAppContainer} from 'react-navigation'
import Swipee from './Swipe'
import Login from './Login'
import SignUp from './SignUp'
import BecomeDonor from './BecomeDonor'
import SplashScreen from './SplashScreen'
import requestBlood from './requestBlood'
import LandingPage from './Backend/LandingPage'
import AllRequests from './Backend/AllRequests'
import ExploreAllDonors from './Backend/ExploreAllDonors'
import Get from './Get'
import Upload from './Upload'

const AppSwitchNavigator = createStackNavigator({

    LandingPage:LandingPage,

    Swipee:Swipee,
    Login:Login,

    ExploreAllDonors:ExploreAllDonors,
    Get:Get,

    BecomeDonor:BecomeDonor,


    Upload:Upload,



    LandingPage:LandingPage,
    AllRequests:AllRequests,
    requestBlood:requestBlood,
    SignUp:SignUp,
 });
 export default  createAppContainer(AppSwitchNavigator);