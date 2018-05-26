import React, { Component } from 'react';
import {
  BackHandler,
  ImageBackground,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { emailChanged, passwordChanged, loginSuccess } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  state = {
    login: '',
    change: true,
    showColor: 'white',
  };
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
    });

    if (this.props.loggedin) {
      Actions.menu();
    }
  }

  login = () => {
    if (this.props.email !== '' && this.props.password !== '') {
      axios({
        method: 'POST',
        url: 'http://192.168.43.228:3090/login',
        data: {
          email: this.props.email.toLowerCase(),
          password: this.props.password,
        },
      })
        .then((res) => {
          console.log(res.data.success);
          if (res.data.success === true) {
            this.props.loginSuccess();
            this.setState({ login: 'success' });
          }
        })
        .catch((err) => {
          console.log(err);
          this.refs.view.shake(1000);
          this.setState({ login: 'failed' });
        });
    } else if (this.props.email === '' || this.props.password === '') {
      this.refs.view.jello(1000);
    }
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
            opacity: 0,
          }}
        >
          Grocery in your pocket
        </Text>

        <Card style={{ flexGrow: 1 }}>
          <Animatable.View ref="view">
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
                clearButtonMode="while-editing"
              />
            </CardSection>
            <CardSection
              style={{
                borderColor: 'white',
                borderBottomWidth: 1,
                padding: 0,
                alignItems: 'baseline',
                marginLeft: 15,
                marginRight: 15,
              }}
            >
              <Image
                source={require('../../icons/password.png')}
                style={{
                  height: 22,
                  width: 18,
                  tintColor: 'white',
                  marginRight: 10,
                  marginBottom: 10,
                }}
              />
              <Input
                style={{ paddingBottom: 17 }}
                labelStyle={{ flex: 0, paddingLeft: 0 }}
                secureTextEntry={this.state.change}
                placeholder="Password"
                placeholderColor="white"
                value={this.props.password}
                onChangeText={(text) => {
                  this.setState({ login: '' });
                  this.props.passwordChanged(text);
                }}
                keyboardType={this.state.visiblePassword}
              />
              <TouchableOpacity
                onPress={() => {
                  this.setState({ change: !this.state.change });
                  if (this.state.change) {
                    this.setState({ showColor: '#4256af' });
                  } else {
                    this.setState({ showColor: 'white' });
                  }
                }}
                style={{ marginTop: 30 }}
              >
                <Image
                  source={require('../../icons/showpass.png')}
                  style={{
                    tintColor: this.state.showColor,
                    height: 25,
                    width: 25,
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
            </CardSection>
          </Animatable.View>
          <CardSection style={{ paddingTop: 20 }}>
            <Button
              style={{
                backgroundColor: '#4256af',
                borderColor: '#4256af',
              }}
              onPress={() => this.login()}
            >
              Login
            </Button>
          </CardSection>
          <CardSection style={{ justifyContent: 'space-between' }}>
            <Button
              textStyle={{ fontSize: 15 }}
              style={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
              }}
              onPress={() => Actions.resetpassword()}
            >
              Forgot Password?
            </Button>
            <Image
              source={require('../../icons/separator.png')}
              style={{
                tintColor: 'white',
                height: 30,
                width: 20,
              }}
            />
            <Button
              textStyle={{ fontSize: 15, marginRight: 50 }}
              style={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
              }}
              onPress={() => Actions.signup()}
            >
              Signup
            </Button>
          </CardSection>

          {(() => {
            if (this.state.login === 'failed') {
              return (
                <CardSection
                  style={{
                    borderColor: 'red',
                    backgroundColor: '#fb4e5150',
                    borderRadius: 30,
                    height: 30,
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{ color: 'red', fontSize: 15, alignSelf: 'center' }}
                  >
                    Please enter valid email and password
                  </Text>
                </CardSection>
              );
            }
          })()}
        </Card>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  loggedin: state.auth.loggedin,
});

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginSuccess,
})(LoginForm);
