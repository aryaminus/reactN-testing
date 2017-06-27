import react , {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class myapp2 extends Component {
  render() {
    return (
      <View>
        <Text>Yo Man!</Text>
      </View>
    );
  }

}

AppRegistry.registerComponent('myapp2', () => myapp2);