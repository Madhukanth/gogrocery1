import React, { Component } from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import IconBadge from 'react-native-icon-badge';
import { connect } from 'react-redux';
import { CardSection } from '../components/common';
import { search } from '../actions/CartActions';

class ToolBar extends Component {
  render() {
    return (
      <CardSection
        style={{
          backgroundColor: '#f5f5f5',
          height: 50,
          paddingTop: 5,
          borderWidth: 1,
          borderRadius: 1,
          borderColor: '#F8F8F8',
          borderBottomWidth: 0,
          shadowColor: '#000',
          shadowOffset: { Width: 1, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 1,
          flexDirection: 'row',
          alignItems: 'stretch',
          elevation: 3,
          justifyContent: 'space-around',
        }}
      >
        <Image
          style={{
            height: 35,
            width: 40,
          }}
          source={require('../../icons/logo.png')}
        />
        <Text
          style={{
            alignSelf: 'center',
            color: 'green',
            fontSize: 20,
            fontStyle: 'italic',
            fontWeight: 'bold',
            paddingLeft: 60,
          }}
        >
          Gogrocery
        </Text>
        <TouchableOpacity
          style={{
            paddingLeft: 30,
            width: 60,
            paddingTop: 3,
            height: 50,
          }}
          onPress={() => {
            this.props.search();
          }}
        >
          <Image
            style={{
              height: 35,
              width: 30,
              tintColor: '#007aff',
            }}
            source={require('../../icons/search1.png')}
          />
        </TouchableOpacity>
        <IconBadge
          MainElement={
            <TouchableOpacity
              style={{
                paddingLeft: 15,
                width: 50,
                height: 50,
                paddingTop: 3,
              }}
              onPress={() => {
                Actions.cart();
              }}
            >
              <Image
                style={{ height: 35, width: 35, tintColor: '#007aff' }}
                source={require('../../icons/cart.png')}
              />
            </TouchableOpacity>
          }
          BadgeElement={
            <Text style={{ color: '#FFFFFF' }}>{this.props.items.length}</Text>
          }
          IconBadgeStyle={{
            width: 2,
            height: 15,
            backgroundColor: 'red',
          }}
          Hidden={this.props.items == 0}
        />
      </CardSection>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cart.items,
});

export default connect(mapStateToProps, { search })(ToolBar);
