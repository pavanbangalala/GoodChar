import React, { Component } from 'react';
import { View, Image, Text, Alert } from 'react-native';
import Styles from './Styles';
import { UserInput } from '../../Components/UserInput';
import { Button } from '../../Components/Button';
import { TextLink } from '../../Components/TextLink';

const logo = require('../../../assets/ie.png');

export default class Login extends Component {
	constructor() {
		super();
		this.handleLoginButton = this.handleLoginButton.bind(this);
		this.handleSignUpButtoon = this.handleSignUpButtoon.bind(this);
	}

	handleLoginButton = () => {
		Alert.alert('Logged in Succesfully');
	};

	handleSignUpButtoon = () => {
		this.props.navigation.navigate('register');
	};

	render() {
		return (
			<View style={Styles.container}>
				<View style={{ marginVertical: 32 }}>
					<View style={Styles.logoContainer}>
						<Image source={logo} resizeMode="cover" style={Styles.logNormal} />
					</View>

					<Text style={{ color: '#7D4976', fontSize: 40, fontWeight: '700' }}>Good Char</Text>
				</View>
				<UserInput placeHolder="User Name" />
				<UserInput placeHolder="Password" />
				<Button label="Login" onPress={this.handleLoginButton} />
				<TextLink label1="new volunteer? " label2="Sign Up" onPress={this.handleSignUpButtoon} />
			</View>
		);
	}
}
