import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/BottomBarStyle'

import Icon from 'react-native-vector-icons/FontAwesome'

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

  render () {
    console.tron.log('rendering my component')
    console.tron.log('Bottom bar styles: \n',styles)
    return (
      <View style={[styles.iconsContainer, styles.debugGreen]}>
        <TouchableOpacity style={[styles.icons,styles.debugYellow]} onPress={()=>{console.tron.log('rocket')}} >
          <Icon style={styles.icons} name='rocket' size={40} color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={ ()=>{console.tron.log('send')} }>
          <Icon style={styles.icons} name='send' size={40} color='white' />
        </TouchableOpacity>
      </View>
    )
  }
}
