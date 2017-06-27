import React , {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
//import Component1 from './Component1';
import Component1 from './app/components/Component1/Component1';

export default class myapp2 extends Component{
  render(){
    return(
      <View>
        <Component1 message="Lolita" />
      </View>
    );
  }
}

AppRegistry.registerComponent('myapp2', () => myapp2);