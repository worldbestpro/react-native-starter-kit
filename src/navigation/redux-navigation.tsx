import * as React from 'react'
import * as ReactNavigation from 'react-navigation'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
  reduxifyNavigator,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import AppNavigation from './app-navigation'

// // here is our redux-aware our smart component
// function ReduxNavigation(props) {
//   const { dispatch, nav } = props
//   const middleware = createReactNavigationReduxMiddleware('root', state => nav)
//   const addListener = createReduxBoundAddListener('root')
//   const navigation = ReactNavigation.addNavigationHelpers({
//     dispatch,
//     state: nav,
//     addListener,
//   })

//   return <AppNavigation navigation={navigation} />
// }
const middleware = createReactNavigationReduxMiddleware(
  'root',
  (state: any) => state.nav
)
const ReduxNavigation = reduxifyNavigator(AppNavigation, 'root')

const mapStateToProps = state => ({ state: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
