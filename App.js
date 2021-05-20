/* eslint-disable prettier/prettier */
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import First from './src/screens/First'
import HomeScreen from './src/screens/HomeScreen'
import IndicesData from './src/screens/IndicesData'

const navigator = createStackNavigator({
  'Value your stocks':First,
  'Features':HomeScreen,
  'Search by NSE group':IndicesData
},{
  initialRouteParams: 'Value your stocks',
  // headerMode:'none',
  defaultNavigationOptions: {
    headerTitleAlign:'center',
    headerTintColor:'#5EFCA8',  //Text color
    headerStyle:{
      backgroundColor:'#1B375E', //Background color
      shadowColor: '#e00026',
      height:50,
      shadowOffset: 
      {
        width: 0,
        height: 5,
      },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 10},
    headerTitleStyle:{
      fontSize:26,
      fontFamily:'FROSTBITE-Wide Bold',
      fontWeight:'bold'
    }
  }
});

export default createAppContainer(navigator);