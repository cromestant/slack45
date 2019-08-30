import React, { Component } from 'react'
import { ScrollView, Text,View ,Image, FlatList, KeyboardAvoidingView} from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import ListItem from '../Components/ListItem.js'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {TrainingsSelectors} from '../Redux/TrainingsRedux'

// Styles
import styles from './Styles/EditTrainingScreenStyle'


class EditTrainingScreen extends Component {
  

  render () {
    console.tron.log('state from props', this.props.trainings)
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.section}>
            <Text style={styles.sectionText}>
              Edit trainings
            </Text>
          </View>
          </KeyboardAvoidingView>
      </View>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  item_key = ownProps.navigation.getParam('item_key', null);
  if(item_key === null)
    return {}
  return {
        trainings: TrainingsSelectors.getDataForKeySelector(state,item_key)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTrainingScreen)
