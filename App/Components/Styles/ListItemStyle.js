import { StyleSheet } from 'react-native'
import { Fonts, Colors , Metrics} from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  }
  ,listTitle:{
    color: Colors.snow,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})
