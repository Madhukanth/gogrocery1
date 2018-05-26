import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window');
export default class Footer extends Component {
  // componentWillMount() {
  // 	Actions.vegetables();
  // }
  render() {
    return (
      <View
        style={{
          height: 40,
          backgroundColor: '#000',
          width,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity onPress={() => Actions.vegetables()}>
          <Image
            source={{
              uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/11637-200.png',
            }}
            style={{
              height: 25,
              width: 35,
              tintColor: '#f00',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.grocery()}>
          <Image
            source={{
              uri:
                'http://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/512/search-icon.png',
            }}
            style={{
              height: 25,
              width: 35,
              tintColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.personalCare()}>
          <Image
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/money/512/21-512.png',
            }}
            style={{
              height: 25,
              width: 35,
              tintColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.stationery()}>
          <Image
            source={{
              uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/194977-200.png',
            }}
            style={{
              height: 25,
              width: 35,
              tintColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
