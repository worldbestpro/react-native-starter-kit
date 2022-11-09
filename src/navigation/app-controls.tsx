import * as React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Modal from 'react-native-modal'
import Icons from 'react-native-vector-icons/FontAwesome'
import { Icon } from '../components'
import { equals } from 'ramda'
import * as screenStyles from './app-controls.styles'

const HeaderLeft = () => (
  <View style={screenStyles.leftContainer}>
    <Image source={require('../assets/logo_title.png')} style={screenStyles.leftImage} />
  </View>
)

const HeaderRight = ({ navigation }) => (
  <View style={screenStyles.leftContainer}>
    <Image source={require('../assets/logo_title.png')} style={screenStyles.leftImage} />
  </View>
)


interface DSTabBarProps extends NavigationScreenProps {}
interface DSTabBarState {
  route: String
  visible: boolean
}

class ReelTabBar extends React.Component<DSTabBarProps, DSTabBarState> {
  constructor(props) {
    super(props)
    this.state = {
      route: 'Manage',
      visible: false,
    }
  }

  handlePressTabs = route => {
    this.setState({ route })
    this.props.navigation.navigate(route)
  }

  render() {
    const { route, visible } = this.state
    return (
      <View style={screenStyles.tabContainer}>
        <TouchableOpacity
          style={screenStyles.tabItem}
          onPress={() => this.handlePressTabs('Explorer')}
        >
          <Image
            source={
              equals(route, 'Explorer')
                ? require('../assets/icon-manage-active.png')
                : require('../assets/icon-manage-disabled.png')
            }
            style={screenStyles.tabManage}
          />
          <Text style={screenStyles.tabText}>Explorer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={screenStyles.tabItem}
          onPress={() => this.handlePressTabs('Camera')}
        >
          <Image
            source={
              equals(route, 'Camera')
                ? require('../assets/icon-develop-active.png')
                : require('../assets/icon-develop-disabled.png')
            }
            style={screenStyles.tabManage}
          />
          <Text style={screenStyles.tabText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={screenStyles.tabItem}
          onPress={() => this.handlePressTabs('Home')}
        >
          <Image
            source={
              equals(route, 'Home')
                ? require('../assets/icon-analytics-active.png')
                : require('../assets/icon-analytics-disabled.png')
            }
            style={screenStyles.tabManage}
          />
          <Text style={screenStyles.tabText}>Home</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export { ReelTabBar, HeaderLeft, HeaderRight }
