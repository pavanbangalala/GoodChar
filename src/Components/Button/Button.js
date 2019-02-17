import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({ label, onPress }) => {
	return (
		<View style={Styles.container}>
			<LinearGradient colors={['#000', '#8F55A3']}>
				<TouchableOpacity style={Styles.touchable} onPress={onPress}>
					<Text style={Styles.label}>{label}</Text>
				</TouchableOpacity>
			</LinearGradient>
		</View>
	);
};

export default Button;
