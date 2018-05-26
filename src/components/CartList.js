import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	FlatList,
	TouchableOpacity,
	ScrollView,
	ToastAndroid
} from 'react-native';
import axios from 'axios';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { cartChanged, cartDelete } from '../actions/CartActions';
import { Card, CardSection, Button } from '../components/common';

class CartList extends Component {
	render() {
		if (this.props.items.length === 0) {
			return (
				<View style={{ alignItems: 'center', paddingTop: 230 }}>
					<Text style={{ fontSize: 20, color: 'red' }}>Your Cart is empty</Text>
				</View>
			);
		} else if (this.props.items !== []) {
			console.log(this.props.items);
			return (
				<Card
					style={{
						borderLeftWidth: 0,
						borderBottomWidth: 0,
						borderColor: '#007aff'
					}}
				>
					<CardSection
						style={{
							flexDirection: 'row',
							borderWidth: 2,
							borderBottomWidth: 2,
							paddingLeft: 20
						}}
					>
						<Text style={{ fontSize: 16, fontWeight: 'bold', paddingTop: 9 }}>
							ITEM
						</Text>
						<Text
							style={{
								fontSize: 16,
								fontWeight: 'bold',
								paddingLeft: 50,
								paddingTop: 9
							}}
						>
							QUANTITY
						</Text>
						<Text
							style={{
								fontSize: 16,
								fontWeight: 'bold',
								paddingLeft: 20,
								paddingTop: 9
							}}
						>
							PRICE
						</Text>
					</CardSection>
					<ScrollView>
						<Card style={{ marginLeft: 0, marginRight: 0 }}>
							<FlatList
								data={this.props.items}
								renderItem={({ item }) => (
									<CardSection
										style={{
											borderWidth: 2,
											borderBottomWidth: 1,
											height: 150,
											padding: 0,
											justifyContent: 'center'
										}}
									>
										<CardSection
											style={{
												flexDirection: 'column',
												height: 140,
												padding: 2,
												marginTop: 2
											}}
										>
											<Image
												source={{
													uri: item.imageurl
												}}
												style={{
													height: 100,
													width: 110,
													borderRadius: 5,
													borderWidth: 1,
													borderColor: 'black'
												}}
											/>
											<View
												style={{
													width: 110,
													paddingLeft: 3,
													justifyContent: 'space-around'
												}}
											>
												<Text style={{ fontSize: 15, fontWeight: 'bold' }}>
													{item.name}
												</Text>
											</View>
										</CardSection>
										<View
											style={{
												width: 75,
												paddingLeft: 10,
												justifyContent: 'space-around',
												marginBottom: 25
											}}
										>
											<Text style={{ fontSize: 15, fontWeight: 'bold' }}>
												Quantity
											</Text>
										</View>
										<View
											style={{
												width: 75,
												paddingLeft: 15,
												justifyContent: 'space-around',
												marginBottom: 25
											}}
										>
											<Text style={{ fontSize: 15, fontWeight: 'bold' }}>
												Price
											</Text>
										</View>

										<TouchableOpacity
											style={{
												backgroundColor: 'red',
												borderRadius: 5,
												borderWidth: 1,
												borderColor: 'red',
												marginTop: 45,
												marginRight: 5,
												height: 40,
												width: 80,
												alignItems: 'center',
												alignSelf: 'stretch'
											}}
											onPress={() => {
												this.props.cartDelete(item);
												return ToastAndroid.showWithGravity(
													'Item removed',
													ToastAndroid.SHORT,
													ToastAndroid.BOTTOM
												);
											}}
										>
											<Text
												style={{
													color: 'white',
													alignSelf: 'center',
													marginTop: 8
												}}
											>
												Remove
											</Text>
										</TouchableOpacity>
									</CardSection>
								)}
								keyExtractor={item => item._id}
							/>

							<CardSection
								style={{ height: 50, borderBottomWidth: 1, borderWidth: 2 }}
							>
								<Text
									style={{
										fontSize: 17,
										fontWeight: 'bold',
										textDecorationStyle: 'solid'
									}}
								>
									TOTAL AMOUNT:
								</Text>
							</CardSection>
							<CardSection
								style={{
									height: 60,
									borderBottomWidth: 2,
									borderWidth: 1,
									justifyContent: 'space-around'
								}}
							>
								<Button
									onPress={() => {
										axios({
											method: 'POST',
											url: 'http://192.168.43.228:3090/getamount',
											data: {
												amount: this.total
											}
										});
										return Actions.purchase();
									}}
								>
									Buy Now
								</Button>
							</CardSection>
						</Card>
					</ScrollView>
				</Card>
			);
		}
	}
}

const mapStateToProps = state => ({
	items: state.cart.items
});

export default connect(mapStateToProps, { cartChanged, cartDelete })(CartList);
