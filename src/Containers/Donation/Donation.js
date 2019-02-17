import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';

export default class Donation extends Component {
	render() {
		return (
			<View style={Styles.container}>
				<Text>Donations Screen</Text>
			</View>
		);
	}
}
