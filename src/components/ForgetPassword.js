import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { ImageBackground, Image, StatusBar, Text, Alert } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from '../actions/AuthActions';

class ForgotPassword extends Component {
  resetpassword = () => {
    axios({
      method: 'POST',
      url: 'http://192.168.43.228:3090/fetchpassword',
      data: {
        email: this.props.email,
      },
    }).then((res) => {
      console.log(res.success);
      Alert.alert(
        'Reset Password',
        'Reset Password link has been sent to your mail',
        [
          {
            text: 'ok',
            onPress: () => Actions.resetpassword(),
          },
        ],
      );
    });
  };

  render() {
    return (
      <ImageBackground
        source={require('../../icons/back1.jpg')}
        style={{
          height: null,
          alignSelf: 'stretch',
          width: null,
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <StatusBar
          hidden
          showHideTransition="fade"
          backgroundColor="#4256af"
          barStyle="light-content"
        />
        <Image
          source={require('../../icons/logogg.png')}
          style={{
            height: 100,
            width: 100,
            alignSelf: 'center',
            marginTop: 50,
          }}
        />
        <CardSection style={{ alignSelf: 'center' }}>
          <Text
            style={{
              color: '#8cc546',
              fontSize: 50,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}
          >
            Go
          </Text>
          <Text
            style={{
              color: '#58585a',
              fontSize: 50,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}
          >
            Grocery
          </Text>
        </CardSection>
        <Text
          style={{
            color: 'grey',
            paddingBottom: 0,
            alignSelf: 'center',
            fontSize: 15,
            opacity: 0.5,
          }}
        >
          Grocery in your pocket
        </Text>

        <Card style={{ flexGrow: 1 }}>
          <CardSection
            style={{
              borderBottomWidth: 1,
              borderColor: 'white',
              padding: 0,
              alignItems: 'baseline',
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            <Image
              source={require('../../icons/mail.png')}
              style={{
                height: 20,
                width: 20,
                tintColor: 'white',
                marginTop: 37,
                marginRight: 10,
              }}
            />

            <Input
              style={{ paddingBottom: 20 }}
              labelStyle={{ flex: 0, paddingLeft: 0 }}
              placeholder="Email"
              placeholderColor="white"
              value={this.props.email}
              onChangeText={(text) => {
                this.setState({ login: '' });
                this.props.emailChanged(text);
              }}
            />
          </CardSection>
          <CardSection style={{ paddingTop: 20 }}>
            <Button
              onPress={() => this.resetpassword()}
              style={{
                backgroundColor: '#4256af',
                borderColor: '#4256af',
              }}
            >
              Reset Password
            </Button>
          </CardSection>
        </Card>
      </ImageBackground>
    );
  }
}
const mapStateToProps = state => ({
  email: state.auth.email,
});

export default connect(mapStateToProps, { emailChanged })(ForgotPassword);
