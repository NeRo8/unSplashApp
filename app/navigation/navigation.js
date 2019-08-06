import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

import colors from '../constants/colors.js';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home Screen',
        headerBackTitle: 'Back'
      }
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        title: 'Detail Screen'
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.TEAL
      },
      headerTintColor: colors.WHITE
    }
  }
);

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
