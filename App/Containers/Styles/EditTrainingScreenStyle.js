import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
import DebugStyles from '../../Themes/DebugStyles'

let style = StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.lists
})

export default style
