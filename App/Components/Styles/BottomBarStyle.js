import { StyleSheet } from 'react-native'
import DebugStyles from '../../Themes/DebugStyles'
import { Metrics } from '../../Themes/'



export default StyleSheet.create({
  ...DebugStyles,
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin
  },
  icons:{
    height: 45
    
    }
  
})
