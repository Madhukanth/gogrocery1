import React, { Component } from 'react';
import {
	BackHandler,
	ScrollView,
	ImageBackground,
	Image,
	Text,
	StatusBar,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { Card, CardSection, Button, Input } from './common';
import {
	nameChanged,
	emailChanged,
	passwordChanged,
	addressChanged,
	phonenumberChanged,
	signupSuccess
} from '../actions';

class SignupForm extends Component {
	state = {
		signedup: '',
		password: '',
		change: true,
		showColor: 'white'
	};
	componentWillMount() {
		BackHandler.addEventListener('hardwareBackPress', () => {
			Actions.login();
			return true;
		});
	}

	signup = () => {
		if (this.props.password === this.state.password) {
			axios({
				method: 'POST',
				url: 'http://192.168.43.228:3090/signup',
				data: {
					email: this.props.email,
					password: this.props.password,
					name: this.props.name,
					doorno: this.props.address,
					street: this.props.street,
					city: this.props.city,
					state: this.props.state,
					phonenumber: this.props.phonenumber
				}
			})
				.then(res => {
					console.log(res.data.success);
					if (res.data.success === 'true') {
						this.props.signupSuccess();
						Actions.menu();
					} else {
						this.setState({ signedup: 'signupfail' });
					}
				})

				.catch(err => {
					console.log(err);
				});
		} else {
			this.setState({ signedup: 'failed' });
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
					flex: 1
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
						marginTop: 20
					}}
				/>
				<CardSection style={{ alignSelf: 'center' }}>
					<Text
						style={{
							color: '#8cc546',
							fontSize: 50,
							fontWeight: 'bold',
							alignSelf: 'center'
						}}
					>
						Go
					</Text>
					<Text
						style={{
							color: '#58585a',
							fontSize: 50,
							fontWeight: 'bold',
							alignSelf: 'center'
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
						opacity: 0.5
					}}
				>
					Grocery in your pocket
				</Text>

				<ScrollView>
					<Card style={{ flexGrow: 1 }}>
						<CardSection style={style.InputStyle}>
							<Image
								source={require('../../icons/user.png')}
								style={{
									height: 20,
									width: 20,
									tintColor: 'white',
									marginTop: 32,
									marginRight: 10
								}}
							/>
							<Input
								labelStyle={{ flex: 0, paddingLeft: 0, paddingBottom: 10 }}
								placeholder="Username"
								placeholderColor="white"
								value={this.props.name}
								onChangeText={text => this.props.nameChanged(text)}
							/>
						</CardSection>
						<CardSection style={style.InputStyle}>
							<Image
								source={require('../../icons/mail.png')}
								style={{
									height: 20,
									width: 20,
									tintColor: 'white',
									marginTop: 35,
									marginRight: 10
								}}
							/>
							<Input
								labelStyle={{ flex: 0, paddingLeft: 0, paddingBottom: 15 }}
								placeholder="Email"
								placeholderColor="white"
								value={this.props.email}
								onChangeText={text => this.props.emailChanged(text)}
							/>
						</CardSection>
						<CardSection style={style.InputStyle}>
							<Image
								source={require('../../icons/password.png')}
								style={{
									height: 22,
									width: 18,
									tintColor: 'white',
									marginTop: 32,
									marginRight: 10
								}}
							/>
							<Input
								secureTextEntry={this.state.change}
								labelStyle={{ flex: 0, paddingLeft: 0, paddingBottom: 15 }}
								placeholder="Password"
								placeholderColor="white"
								value={this.props.password}
								onChangeText={text => {
									this.props.passwordChanged(text);
									this.setState({ signedup: '' });
								}}
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
										marginRight: 10
									}}
								/>
							</TouchableOpacity>
						</CardSection>
						<CardSection style={style.InputStyle}>
							<Image
								source={require('../../icons/confpass.png')}
								style={{
									height: 20,
									width: 20,
									tintColor: 'white',
									marginTop: 32,
									marginRight: 10
								}}
							/>
							<Input
								secureTextEntry={this.state.change}
								labelStyle={{ flex: 0, paddingLeft: 0, paddingBottom: 15 }}
								placeholder="Confirm Password"
								placeholderColor="white"
								value={this.state.password}
								onChangeText={text => {
									this.setState({ signedup: '' });
									this.setState({ password: text });
								}}
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
										marginRight: 10
									}}
								/>
							</TouchableOpacity>
						</CardSection>
						<CardSection style={style.InputStyle}>
							<Image
								source={require('../../icons/door1.png')}
								style={{
									height: 20,
									width: 20,
									tintColor: 'white',
									marginTop: 32,
									marginRight: 10
								}}
							/>
							<Input
								labelStyle={{ flex: 0, paddingLeft: 0, paddingBottom: 15 }}
								placeholder="Door No"
								placeholderColor="white"
								value={this.props.address}
								onChangeText={text => this.props.addressChanged(text)}
							/>
						</CardSection>
						<CardSection style={style.InputStyle}>
							<Image
								source={require('../../icons/street.png')}
								style={{
									height: 20,
									width: 20,
									tintColor: 'white',
									marginTop: 32,
									marginRight: 10
								}}
							/>
							<Input
								labelStyle={{ flex: 0, paddingLeft: 0, paddingBottom: 15 }}
								placeholder="Street"
								placeholderColor="white"
								value={this.props.address}
								onChangeText={text => this.props.addressChanged(text)}
							/>
						</CardSection>
						<CardSection style={style.InputStyle}>
							<Image
								source={require('../../icons/city.png')}
								style={{
									height: 20,
									width: 20,
									tintColor: 'white',
									marginTop: 32,
									marginRight: 10
								}}
							/>
							<Input
								labelStyle={{ flex: 0, paddingLeft: 0, paddingBottom: 15 }}
								placeholder="City"
								placeholderColor="white"
								value={this.props.address}
								onChangeText={text => this.props.addressChanged(text)}
							/>
						</CardSection>
						<CardSection style={style.InputStyle}>
							<Image
								source={require('../../icons/state.png')}
								style={{
									height: 20,
									width: 20,
									tintColor: 'white',
									marginTop: 32,
									marginRight: 10
								}}
							/>
							<Input
								labelStyle={{ flex: 0, paddingLeft: 0, paddingBottom: 15 }}
								placeholder="State"
								placeholderColor="white"
								value={this.props.address}
								onChangeText={text => this.props.addressChanged(text)}
							/>
						</CardSection>
						<CardSection style={style.InputStyle}>
							<Image
								source={require('../../icons/india.png')}
								style={{
									height: 20,
									width: 20,
									tintColor: 'white',
									marginTop: 32,
									marginRight: 10
								}}
							/>
							<Input
								labelStyle={{ flex: 0, paddingLeft: 0 }}
								placeholderColor="white"
								editable="false"
								value="India"
							/>
						</CardSection>
						<CardSection style={style.InputStyle}>
							<Image
								source={require('../../icons/phone.png')}
								style={{
									height: 20,
									width: 20,
									tintColor: 'white',
									marginTop: 32,
									marginRight: 10
								}}
							/>
							<Input
								labelStyle={{ flex: 0, paddingLeft: 0, paddingBottom: 15 }}
								placeholder="Phone Number"
								placeholderColor="white"
								value={this.props.phonenumber}
								onChangeText={text => this.props.phonenumberChanged(text)}
							/>
						</CardSection>
						<CardSection style={{ paddingTop: 15 }}>
							<Button
								style={{
									backgroundColor: '#4256af',
									borderColor: '#4256af'
								}}
								onPress={() => {
									this.signup();
								}}
							>
								Signup
							</Button>
						</CardSection>
						{(() => {
							if (this.state.signedup === 'failed') {
								return (
									<CardSection
										style={{
											borderColor: 'red',
											backgroundColor: '#fb4e5150',
											borderRadius: 30,
											height: 30,
											justifyContent: 'center'
										}}
									>
										<Text
											style={{
												color: 'red',
												fontSize: 15,
												alignSelf: 'center'
											}}
										>
											Confirm password didnt match
										</Text>
									</CardSection>
								);
							}
							if (this.state.signedup === 'signupfail') {
								return (
									<CardSection
										style={{
											borderColor: 'red',
											backgroundColor: '#fb4e5150',
											borderRadius: 30,
											height: 30,
											justifyContent: 'center'
										}}
									>
										<Text
											style={{
												color: 'red',
												fontSize: 15,
												alignSelf: 'center'
											}}
										>
											Signup failed.Check your netconnetion
										</Text>
									</CardSection>
								);
							}
						})()}
					</Card>
				</ScrollView>
			</ImageBackground>
		);
	}
}

const style = StyleSheet.create({
	InputStyle: {
		borderBottomWidth: 1,
		borderColor: 'white',
		padding: 0,
		alignItems: 'baseline',
		marginLeft: 15,
		marginRight: 15
	}
});

const mapStateToProps = state => ({
	name: state.auth.name,
	email: state.auth.email,
	password: state.auth.password,
	address: state.auth.address,
	phonenumber: state.auth.phonenumber
});

export default connect(mapStateToProps, {
	nameChanged,
	emailChanged,
	passwordChanged,
	addressChanged,
	phonenumberChanged,
	signupSuccess
})(SignupForm);
