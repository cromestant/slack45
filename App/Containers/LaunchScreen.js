import React, { Component } from 'react'
import { ScrollView, Text, Image, View ,TouchableOpacity} from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import BottomBar from '../Components/BottomBar.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
console.tron.log("launchscreen styles: \n",styles)
export default class LaunchScreen extends Component {
_onPressButton = ()=>{
  console.tron.log("pressed the randomizer")
};
  render () {
    return (
      <View style={[styles.mainContainer , styles.debugBlue]}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={[styles.container, styles.debugPink]}>
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
        <View style={styles.debugRed}>
            <BottomBar />
          {/*
            <DevscreensButton />
            
             
             */}
        </View>
      </View>
    )
  }
}
