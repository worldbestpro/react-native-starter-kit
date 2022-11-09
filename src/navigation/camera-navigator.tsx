import * as React from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Icons from 'react-native-vector-icons/FontAwesome'
import CameraScreen from '../containers/main/camera'

const ExplorerNavigator = StackNavigator(
  {
    camera_main: {
      screen: CameraScreen,
      navigationOptions: {},
    },
  },
  {
    initialRouteName: 'camera_main',
    navigationOptions: {}
  },
)

export default ExplorerNavigator
