import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import GroceryFetch from './components/GroceryFetch';
import PersonalCareFetch from './components/PersonalCareFetch';
import StationeryFetch from './components/StationeryFetch';
import VegetablesFetch from './components/VegetablesFetch';
import CartList from './components/CartList';
import PurchaseForm from './components/PurchaseForm';
import ToolBar from './components/ToolBar';
import ForgotPassword from './components/ForgetPassword';

const groceryIcon = () => (
  <Image
    style={{
      height: 30,
      width: 30,
    }}
    source={require('../icons/b.png')}
  />
);
const vegetablesIcon = () => (
  <Image
    style={{
      height: 30,
      width: 30,
    }}
    source={require('../icons/a.png')}
  />
);
const personalCareIcon = () => (
  <Image
    style={{
      height: 30,
      width: 30,
    }}
    source={require('../icons/c.png')}
  />
);
const stationeryIcon = () => (
  <Image
    style={{
      height: 30,
      width: 30,
    }}
    source={require('../icons/d.png')}
  />
);

class RouterComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {(() => {
          if (this.props.loggedin) {
            return <ToolBar />;
          }
        })()}

        <Router>
          <Scene key="auth">
            <Scene
              key="login"
              component={LoginForm}
              title="Login/Signin"
              rightTitle="Signup"
              onRight={() => Actions.signup()}
              hideNavBar
            />
            <Scene
              key="signup"
              component={SignupForm}
              navTransparent
              navBarButtonColor="white"
            />

            <Scene
              hideNavBar
              tabs
              tabBarPosition="bottom"
              swipeEnabled
              key="menu"
              labelStyle={{ fontWeight: 'bold' }}
              activeTintColor="#8583f0"
            >
              <Scene
                key="grocery"
                icon={groceryIcon}
                tabBarLabel="Grocery"
                component={GroceryFetch}
              />
              <Scene
                key="vegetables"
                icon={vegetablesIcon}
                tabBarLabel="Vegetables"
                component={VegetablesFetch}
              />
              <Scene
                key="personalcare"
                icon={personalCareIcon}
                tabBarLabel="Personal Care"
                component={PersonalCareFetch}
              />
              <Scene
                key="stationery"
                icon={stationeryIcon}
                tabBarLabel="Stationery"
                component={StationeryFetch}
              />
            </Scene>

            <Scene
              key="cart"
              title="Cart List"
              titleStyle={{ alignSelf: 'center', paddingRight: 75 }}
              component={CartList}
            />
            <Scene
              key="purchase"
              title="Purchase Form"
              component={PurchaseForm}
            />
            <Scene
              navTransparent
              navBarButtonColor="white"
              key="resetpassword"
              component={ForgotPassword}
            />
          </Scene>
        </Router>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loggedin: state.auth.loggedin,
});

export default connect(mapStateToProps, null)(RouterComponent);
