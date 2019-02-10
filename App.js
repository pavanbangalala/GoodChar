/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import eStyleSheet from 'react-native-extended-stylesheet';
import createAppContainer from './src/Router';

eStyleSheet.build({
	$containerBkColor: '#ffffff',
	$blackColor: '#000',
	$textGoldYellow: '#F9A602',
	$textCharcoalGrey: '#333333',
	$purple: '#8F55A3',
	$dark_purple: '#7D4976',
});

export default class App extends Component {
	render() {
		const AppContainer = createAppContainer(true);
		return <AppContainer />;
	}
}
