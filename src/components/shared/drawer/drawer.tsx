import * as React from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { DrawerItems, NavigationScreenProps } from 'react-navigation'
import IonIcons from 'react-native-vector-icons/Ionicons'
import * as screenStyles from './drawer.styles'

export interface DrawerScreenProps extends NavigationScreenProps<{}> {}

export class DrawerScreen extends React.Component<DrawerScreenProps, {}> {
  handleClose = () => {
    this.props.navigation.navigate('DrawerClose')
  }

  render() {
    return (
      <ScrollView style={screenStyles.ROOT}>
        <SafeAreaView>
          <TouchableOpacity style={screenStyles.close} onPress={this.handleClose}>
            <IonIcons name="md-close" size={30} color="white" />
          </TouchableOpacity>
          <DrawerItems {...this.props} itemStyle={screenStyles.row} />
        </SafeAreaView>
      </ScrollView>
    )
  }
}
