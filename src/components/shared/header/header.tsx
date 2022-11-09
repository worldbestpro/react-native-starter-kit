import * as React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Icons from 'react-native-vector-icons/FontAwesome'
import { Drawer } from '../../../navigation/app-controls'
import * as screenStyles from './header.styles'

export interface HeaderProps extends NavigationScreenProps {
  title?: string
  isDrawer?: boolean
  onBack?: () => void
}

export class Header extends React.Component<HeaderProps, {}> {
  public static defaultProps: Partial<HeaderProps> = {
    isDrawer: true,
  }

  render() {
    const { navigation, title, onBack, isDrawer } = this.props

    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.left}>
          {onBack && (
            <TouchableOpacity style={screenStyles.leftButton} onPress={() => onBack()}>
              <Image
                source={require('../../../assets/icon-back.png')}
                style={screenStyles.backImage}
              />
              <Text style={screenStyles.back}>Back</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={screenStyles.center}>
          <Text ellipsizeMode="middle" numberOfLines={1} style={screenStyles.title}>
            {title}
          </Text>
        </View>
        <View style={screenStyles.right}>{isDrawer && <Drawer navigation={navigation} />}</View>
      </View>
    )
  }
}
