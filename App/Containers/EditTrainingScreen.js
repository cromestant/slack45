import React, { Component } from 'react'
import { ScrollView, Text,View ,Image, FlatList, ListItem} from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/EditTrainingScreenStyle'


class EditTrainingScreen extends Component {
  render () {
    console.tron.log("from ma props!",this.props.trainings)
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.container}>
          <View style={styles.section}>
            {/* <Image source={Images.ready} />*/}
            <Text style={styles.sectionText}>
              Edit training screen
            </Text>
          </View>
        <ScrollView style={styles.container}>
        <FlatList
          data={this.props.trainings.data}
          renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}/>
        </ScrollView>
      </View>
    </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.tron.log("State is",state.trainings);
  return {
    trainings : state.trainings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTrainingScreen)
