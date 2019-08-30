import { createStackNavigator, createAppContainer } from 'react-navigation'
import ListTrainingsScreen from '../Containers/ListTrainingsScreen'
import EditTrainingScreen from '../Containers/EditTrainingScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  ListTrainingsScreen: { screen: ListTrainingsScreen },
  EditTrainingScreen: { screen: EditTrainingScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ListTrainingsScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
