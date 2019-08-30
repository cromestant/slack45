import React, { Component } from 'react'
import { ScrollView, Text,View ,Image, FlatList} from 'react-native'
import { connect } from 'react-redux'
import ListItem from '../Components/ListItem.js'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import {TrainingsSelectors} from '../Redux/TrainingsRedux'
import { Images } from '../Themes'

// Styles
import styles from './Styles/ListTrainingsScreenStyle'
// Screens
import EditTrainingScreen from './EditTrainingScreen'



class ListTrainingsScreen extends Component {

_onListItemPress= (item_key) => {
  this.props.navigation.navigate({
      routeName:'EditTrainingScreen'
      ,params:{
        item_key:item_key
        }
    })
}


render () {
  console.tron.log("state prop training is", this.props.trainings)
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.container}>
          <View style={styles.section}>
            {/* <Image source={Images.ready} />*/}
            <Text style={styles.sectionText}>
              List trainings
            </Text>
          </View>
        <ScrollView style={styles.container}>
        <FlatList
          data={this.props.trainings}
          renderItem={({item}) => <ListItem title={item.title} subtitle={item.subtitle} item_key={item.key} onPress={this._onListItemPress}/>}
          ItemSeparatorComponent={
            /*Platform.OS !== 'android' && */({highlighted}) => 
            (
              <View style={[styles.listSeparator, highlighted && {marginLeft: 0}]} />
            )
          }
          />
        </ScrollView>
      </View>
    </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trainings : TrainingsSelectors.getData(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTrainingsScreen)
