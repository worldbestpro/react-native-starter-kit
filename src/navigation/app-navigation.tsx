import * as React from 'react'
import { Animated, Easing, Image } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import IonIcons from 'react-native-vector-icons/Ionicons'
import LandingNavigator from './landing-navigator'
import HomeNavigator from './home-navigator'
import CameraNavigator from './camera-navigator'
import ExplorerNavigator from './explorer-navigator'
import { HeaderLeft, HeaderRight, ReelTabBar } from './app-controls'
import * as screenStyles from './app-controls.styles'

const MyTransitionSpec = {
  duration: 500,
  easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
  timing: Animated.timing,
}

const ViewTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 0.99, index + 1]

  const translateX = position.interpolate({
    inputRange,
    outputRange: [50, 0, 0, 0],
  })

  return { transform: [{ translateX }] }
}

const ModalTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 0.99, index + 1]

  const translateX = 0
  const translateY = position.interpolate({
    inputRange,
    outputRange: [50, 0, 0, 0],
  })

  return {
    transform: [{ translateX }, { translateY }],
  }
}

const FadeTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 0.99, index + 1]

  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1, 0],
  })

  return { opacity }
}

const TransitionConfiguration = () => {
  return {
    // Define scene interpolation, eq. custom transition
    screenInterpolator: sceneProps => {
      const { position, scene } = sceneProps
      const { index, route } = scene
      const params = route.params || {}
      const transition = params.transition || 'default'

      return {
        viewTransition: ViewTransition(index, position),
        modalTransition: ModalTransition(index, position),
        fadeTransition: FadeTransition(index, position),
        default: ViewTransition(index, position),
      }[transition]
    },
  }
}


const Main = TabNavigator(
  {
    Explorer: {
      screen: ExplorerNavigator,
      navigationOptions: {},
    },
    Camera: {
      screen: CameraNavigator,
      navigationOptions: {},
    },
    Home: {
      screen: HomeNavigator,
      navigationOptions: {},
    },
  },
  {
    initialRouteName: 'Camera',
    animationEnabled: false,
    backBehavior: 'none',
    lazy: true,
    swipeEnabled: false,
    tabBarComponent: ({ navigation }) => <ReelTabBar navigation={navigation} />,
    tabBarOptions: {},
    tabBarPosition: 'bottom',
  },
)

const AppNavigation = StackNavigator(
  {
    landing: {
      screen: LandingNavigator,
      navigationOptions: {},
    },
    main: {
      screen: Main,
      navigationOptions: ({ navigation }) => ({
        title: '',
        headerLeft: <HeaderLeft />,
        headerRight: <HeaderRight navigation={navigation} />,
        headerStyle: {
          backgroundColor: '#376caf',
          borderBottomWidth: 0,
          elevation: 0,
        },
        headerTitleStyle: {
          color: '#ffffff',
        },
      }),
    },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'landing',
    mode: 'card',
    navigationOptions: {},
    transitionConfig: TransitionConfiguration,
  },
)

export default AppNavigation
