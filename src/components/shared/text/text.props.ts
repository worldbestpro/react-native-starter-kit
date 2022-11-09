import { TextStyle, TextProperties } from 'react-native'
import { TextPresetNames } from './text.presets'

export interface TextProps extends TextProperties {
  /**
   * Children components.
   */
  children?: React.ReactNode

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: TextStyle

  /**
   * One of the different types of text presets.
   */
  preset?: TextPresetNames
}
