import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text ,TouchableHighlight} from 'react-native'
import styles from './Styles/ListItemStyle'

export default class ListItem extends Component {
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
    console.tron.log("this.props",this.props)
    return (
      <TouchableHighlight onPress={()=>this.props.onPress(this.props.item_key)}>
        <View style={styles.container}>
         <Text style={styles.listTitle}>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
