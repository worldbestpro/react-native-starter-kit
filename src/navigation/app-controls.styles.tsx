import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { colors, metrics } from '../themes'

export const ROOT: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

export const leftContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: 15,
}

export const leftImage: ImageStyle = {
  resizeMode: 'contain',
  tintColor: 'white',
  width: 110,
  height: 25,
}

export const rightContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginRight: 15,
}

export const rightBell: ImageStyle = {
  resizeMode: 'contain',
  tintColor: 'white',
  width: 20,
  height: 20,
}

export const rightUser: ViewStyle = {
  borderColor: '#ffffff',
  borderRadius: 14,
  borderWidth: 1,
  marginLeft: 20,
  width: 28,
  height: 28,
}

export const userImage: ImageStyle = {
  borderRadius: 13,
  width: 26,
  height: 26,
}

export const drawerContainer: ViewStyle = {
  marginRight: 15,
  marginTop: 0,
}

export const tabContainer: ViewStyle = {
  flexDirection: 'row',
  backgroundColor: colors.primary,
  height: 70,
  paddingBottom: 15,
  paddingTop: 5,
  paddingHorizontal: 0,
}

export const tabItem: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

export const tabText: TextStyle = {
  color: colors.white,
  fontSize: 10,
  textAlign: 'center',
  width: 70,
}

export const tabManage: ImageStyle = {
  resizeMode: 'stretch',
  tintColor: colors.white,
  width: 27,
  height: 27,
}

export const tabCommunity: ImageStyle = {
  resizeMode: 'stretch',
  tintColor: colors.white,
  width: 32,
  height: 27,
}

export const tabAdd: ImageStyle = {
  resizeMode: 'stretch',
  tintColor: colors.white,
  width: 27,
  height: 27,
}

export const addModal: ViewStyle = {
  marginLeft: 10,
  marginRight: 10,
  marginTop: 200,
  marginBottom: 40,
}

export const modalRow: ViewStyle = {
  flexDirection: 'row',
  backgroundColor: colors.primary,
  marginHorizontal: 10,
  marginBottom: 2,
  paddingVertical: 15,
  paddingLeft: 100,
}

export const topRow: ViewStyle = {
  flexDirection: 'row',
  backgroundColor: colors.primary,
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  marginHorizontal: 10,
  marginBottom: 2,
  paddingLeft: 100,
  paddingVertical: 15,
}

export const bottomRow: ViewStyle = {
  flexDirection: 'row',
  backgroundColor: colors.primary,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
  marginHorizontal: 10,
  marginBottom: 2,
  paddingLeft: 100,
  paddingVertical: 15,
}

export const modalText: TextStyle = {
  color: colors.white,
  fontWeight: '700',
  fontSize: 16,
  paddingLeft: 10,
}
