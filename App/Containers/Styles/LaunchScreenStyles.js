import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
import DebugStyles from '../../Themes/DebugStyles'

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  ...DebugStyles,
  bottom: {...ApplicationStyles.bottom},
  container: {
    paddingBottom: Metrics.baseMargin,
    flex:1
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  }
})
export default styles