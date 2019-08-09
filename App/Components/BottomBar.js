import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/BottomBarStyle'

import Icon from 'react-native-vector-icons/FontAwesome'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'


export default class BottomBar extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  _onPressButton = (_value) => {
    console.tron.log(_value)
  }

  render () {
    console.tron.log('Bottom bar styles: \n',styles)
    return (
      <View style={[styles.iconsContainer, styles.debugGreen]}>
        <TouchableOpacity style={[styles.icons,styles.debugYellow]} onPress={() => this._onPressButton('rocket')} >
          <Icon style={styles.icons} name='rocket' size={40} color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.debugYellow]} onPress={ () => this._onPressButton('send') }>
          <Icon style={styles.icons} name='send' size={40} color='white' />
        </TouchableOpacity>
      </View>
    )
  }

}
