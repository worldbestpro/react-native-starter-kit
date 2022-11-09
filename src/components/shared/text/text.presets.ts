import { TextStyle } from 'react-native'
import { colors } from '../../../themes'

/**
 * All text will start off looking like this.
 */
const PRIMARY: TextStyle = {
  // fontFamily: 'Lato',
  color: colors.black,
}

export const SECONDARY: TextStyle = {
  // fontFamily: 'Roboto',
  color: colors.grey,
}

/**
 * All the variations of text styling within the app.
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  default: { ...PRIMARY, fontSize: 16 } as TextStyle,

  pexlarge: { ...PRIMARY, fontSize: 20, fontWeight: '500' } as TextStyle,
  plarge: { ...PRIMARY, fontSize: 18, fontWeight: '500' } as TextStyle,
  pregular: { ...PRIMARY, fontSize: 16, fontWeight: '500' } as TextStyle,
  pmedium: { ...PRIMARY, fontSize: 14, fontWeight: '500' } as TextStyle,
  psmall: { ...PRIMARY, fontSize: 12, fontWeight: '500' } as TextStyle,
  ptiny: { ...PRIMARY, fontSize: 10, fontWeight: '500' } as TextStyle,

  slarge: { ...SECONDARY, fontSize: 18, fontWeight: '400' } as TextStyle,
  sregular: { ...SECONDARY, fontSize: 16, fontWeight: '400' } as TextStyle,
  smedium: { ...SECONDARY, fontSize: 14, fontWeight: '400' } as TextStyle,
  ssmall: { ...SECONDARY, fontSize: 12, fontWeight: '400' } as TextStyle,
  stiny: { ...SECONDARY, fontSize: 10, fontWeight: '400' } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresetNames = keyof typeof presets
