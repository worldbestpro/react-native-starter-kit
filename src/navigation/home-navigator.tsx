import * as React from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Icons from 'react-native-vector-icons/FontAwesome'
import HomeScreen from '../containers/main/home'

const HomeNavigator = StackNavigator(
  {
    home_main: {
      screen: HomeScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => <Icons name="check-square" size={25} color={tintColor} />,
        drawerLabel: 'Tasks',
      },
    },
  },
  {
    initialRouteName: 'home_main',
    navigationOptions: {}
  },
)

export default HomeNavigator
