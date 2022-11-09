import * as React from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Icons from 'react-native-vector-icons/FontAwesome'
import ExplorerScreen from '../containers/main/explorer'

const ExplorerNavigator = StackNavigator(
  {
    explorer_main: {
      screen: ExplorerScreen,
      navigationOptions: {},
    },
  },
  {
    initialRouteName: 'explorer_main',
    navigationOptions: {}
  },
)

export default ExplorerNavigator
