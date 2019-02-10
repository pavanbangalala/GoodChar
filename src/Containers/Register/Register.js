import React, { Component } from 'react';
import { View, Image, Text, Alert } from 'react-native';
import Styles from './Styles';
import { UserInput } from '../../Components/UserInput';
import { Button } from '../../Components/Button';
import { TextLink } from '../../Components/TextLink';

const logo = require('../../../assets/ie.png');

export default class Register extends Component {
	constructor() {
		super();
		this.handleRegisterButton = this.handleRegisterButton.bind(this);
		this.handleLoginButtoon = this.handleLoginButtoon.bind(this);
	}

	handleRegisterButton = () => {
		Alert.alert('Registered in Succesfully');
	};

	handleLoginButtoon = () => {
		this.props.navigation.navigate('Login');
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
				<UserInput placeHolder="E-maiil" />
				<UserInput placeHolder="Password" />
				<UserInput placeHolder="Confirm Password" />
				<Button label="Register" onPress={this.handleLoginButton} />
				<TextLink label1="already a volunteer? " label2="Login" onPress={this.handleLoginButtoon} />
			</View>
		);
	}
}
