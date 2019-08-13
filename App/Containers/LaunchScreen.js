import React, { Component } from 'react'
import { ScrollView, Text, Image, View ,TouchableOpacity} from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import EditTrainingScreen from './EditTrainingScreen.js'

import BottomBar from '../Components/BottomBar.js'
import { Images } from '../Themes'
// Styles
import styles from './Styles/LaunchScreenStyles'


export default class LaunchScreen extends Component {


_onPressButton = (screen)=>{
  console.tron.log("pressed the randomizer",screen)
  switch(screen){
    case 'EditTrainingScreen':
      this.props.navigation.navigate(screen);
      break;
    

    default:
    return;
  }
  //this.props.navigation.navigate('EditTrainingScreen')

  //TODO MONDAY, propagate a prop to the button that is a function that alerts me HERE that I should navigate away from this screen
};
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.container}>
          <View style={styles.section} >
            {/* <Image source={Images.ready} />*/}
            <Text style={styles.sectionText}>
              Tap to randomly choose your training task. Slack off for 5
            </Text>
          </View>

          <View style={styles.centered}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Image source={Images.launch} style={styles.logo} />
            </TouchableOpacity>
          </View>
        </View>
        <View >
            <BottomBar callback={this._onPressButton} /> 
        </View>
      </View>
    )
  }
}
