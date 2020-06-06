import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
      picture: require('../assets/default.jpg'),
      name: "Cín est",
      id: "College Name",
      courses: [{id: 1,
                 class: "S0 CSE",
                 code: "XX100", 
                 name: "Course Name"},
                {id: 2,
                 class: "S0 ECE",
                 code: "XX100", 
                 name: "Course Name"},
                {id: 3,
                 class: "S0 EEE",
                 code: "XX100", 
                 name: "Course Name"},
                {id: 4,
                 class: "S0 ME",
                 code: "XX100", 
                 name: "Course Name"},
                {id: 6,
                 class: "S0 CE",
                 code: "XX100",  
                 name: "Course Name"},]
    }
  }
  static navigationOptions={
    headerShown: false
  }

  componentDidMount() {
     StatusBar.setHidden(true);
  }

  render(){ 
    return(
      <View style={styles.parent}>
        <View style={styles.firstbuffer}/>
        <View style={styles.header}>
          <View style={styles.pictureOuterView}>
            <View style={styles.secondbuffer}/>
            <View style={styles.pictureInnerView}>
              <View style={styles.thirdbuffer}/>
              <Image 
                source={this.state.picture}
                style={styles.picture}
                resize="contain"
              />
              <View style={styles.thirdbuffer}/>
            </View>
            <View style={styles.secondbuffer}/>
          </View>
          <View style={styles.details}>
            <View style={styles.fourthbufferone}/>
            <View style={styles.nameView}>
              <Text style={styles.name} numberOfLines={2}>{this.state.name}</Text>
            </View>
            <View style={styles.idView}>
              <Text style={styles.id}>{this.state.id}</Text>
            </View>
            <View style={styles.fourthbuffertwo}/>
          </View>
        </View>
        <View style={styles.fifthbuffer}/>
        <ActionButton buttonColor="rgba(229, 105, 103, 1)" btnOutRange="rgba(229, 105, 103, 1)" degrees={45}>
          <ActionButton.Item buttonColor='#E56999' title="Announcements" onPress={() => {this.props.navigation.navigate("Announcements")}}>
            <Icon4 name="md-megaphone" size={22}/>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#E569B5' title="Registration" onPress={() => {this.props.navigation.navigate("Registration")}}>
            <Icon name="form" size={20}/>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#E569C5' title="Fees" onPress={() => {this.props.navigation.navigate("Fees")}}>
            <Icon2 name="rupee" size={18}/>
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}