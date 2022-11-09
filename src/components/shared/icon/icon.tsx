import * as React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

interface IconProps {
  iconType?: 'font' | 'ionic' | 'material'
  name?: string
  size?: number
  color?: string
}

export class Icon extends React.Component<IconProps, {}> {
  render() {
    const { iconType, name, size, color } = this.props

    switch (iconType) {
      case 'font':
        return <Icons name={name} size={size} color={color} />

      case 'ionic':
        return <IonIcons name={name} size={size * 1.5} color={color} />

      case 'material':
        return <MaterialIcons name={name} size={size} color={color} />

      default:
        return <Icons name={name} size={size} color={color} />
    }
  }
}
