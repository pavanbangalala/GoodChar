import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './Styles';

export default class UserInput extends Component {
	constructor() {
		super();
		this.state = {
			text: '',
		};
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	handleTextChange = value => {
		this.setState({ text: value });
	};

	render() {
		const { placeHolder } = this.props;
		return (
			<View style={Styles.container}>
				<TextInput
					onChangeText={this.handleTextChange}
					style={Styles.input}
					placeholder={placeHolder}
					value={this.state.text}
					numberOfLines={1}
				/>
			</View>
		);
	}
}

UserInput.propTypes = {
	placeHolder: PropTypes.string,
};
