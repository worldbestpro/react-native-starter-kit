import * as React from 'react'
import { Text as ReactNativeText } from 'react-native'
import { presets } from './text.presets'
import { TextProps } from './text.props'

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
  // grab the props
  const { preset = 'default', text, children, style: styleOverride, ...rest } = props

  // figure out which content to use
  const content = text || children

  // assemble the style
  const presetToUse = presets[preset] || presets.default
  const style = { ...presetToUse, ...styleOverride }

  return (
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  )
}
