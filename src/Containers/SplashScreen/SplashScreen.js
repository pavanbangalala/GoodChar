import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, Animated } from 'react-native';
import Styles from './Styles';
import * as firebase from 'firebase';
const logo = require('../../../assets/ie.png');

export default class SplashScreen extends Component {
	constructor() {
		super();
		this.spinValue = new Animated.Value(0);
		this.spin = this.spinValue.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg'],
		});
	}
	async componentWillMount() {
		await firebase.auth().onAuthStateChanged(user => {
			console.log('SplashScreen user', user);
			this.props.navigation.navigate(user ? 'signedIn' : 'signedOut');
		});
	}

	componentDidMount() {
		Animated.timing(this.spinValue, {
			toValue: 1,
			duration: 5000,
			useNativeDriver: true,
		}).start();
	}

	render() {
		return (
			<SafeAreaView style={Styles.container}>
				<View style={Styles.logoContainer}>
					<Animated.Image source={logo} style={[Styles.logo, { transform: [{ rotate: this.spin }] }]} />
				</View>
				<Text style={{ color: '#7D4976', fontWeight: '700', fontSize: 40 }}>Good Char</Text>
			</SafeAreaView>
		);
	}
}
