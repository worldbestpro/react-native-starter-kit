import { ViewStyle, TextStyle, ImageStyle, StyleSheet } from 'react-native'

export const ROOT: ViewStyle = {
  flexDirection: 'row',
  backgroundColor: '#666666',
  height: 40,
}

export const left: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 10,
  width: 80,
}

export const leftButton: ViewStyle = {
  flexDirection: 'row',
}

export const backImage: ImageStyle = {
  resizeMode: 'stretch',
  tintColor: '#fff',
  width: 12,
  height: 20,
}

export const back: TextStyle = {
  color: '#fff',
  fontSize: 16,
  paddingLeft: 5,
}

export const center: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

export const title: TextStyle = {
  color: '#ffffff',
  fontWeight: '600',
  fontSize: 16,
}

export const right: ViewStyle = {
  alignItems: 'flex-end',
  justifyContent: 'center',
  width: 80,
}
