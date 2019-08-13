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
  _onPressButton = (_value) => {
    console.tron.log(_value)
  }

  render () {
    console.tron.log('Bottom bar styles: \n',styles)
    return (
      <View style={[styles.iconsContainer]}>
        <TouchableOpacity style={[styles.icons]} onPress={() => this.props.callback('EditTrainingScreen')} >
          <Icon style={styles.icons} name='edit' size={40} color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={ () => this.props.callback('SETTINGS') }>
          <Icon style={styles.icons} name='sliders' size={40} color='white' />
        </TouchableOpacity>
      </View>
    )
  }

}
