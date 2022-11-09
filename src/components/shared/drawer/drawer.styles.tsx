import { ViewStyle, TextStyle, ImageStyle, StyleSheet } from 'react-native'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: '#686868',
  borderColor: '#616161',
  borderWidth: 1,
}

export const row: ViewStyle = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: 'lightgrey',
  paddingLeft: 5,
}

export const close: ViewStyle = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: 'lightgrey',
  justifyContent: 'center',
  marginBottom: -4,
  paddingLeft: 20,
  height: 50,
}
