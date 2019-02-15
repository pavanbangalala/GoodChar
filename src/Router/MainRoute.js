import React from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import { Login } from '../Containers/Login';
import eStyleSheet from 'react-native-extended-stylesheet';
import { Register } from '../Containers/Register';
import { Donor } from '../Containers/Donor';
import { Donee } from '../Containers/Donee';
import { Reports } from '../Containers/Reports';
import { Assets } from '../Containers/Assets';
import { Volunteer } from '../Containers/Volunteer';
import { Icon } from 'react-native-elements';
import { SplashScreen } from '../Containers/SplashScreen';

const Styles = eStyleSheet.create({
	headerTitleStyle: {
		color: '#F9A602',
		fontSize: 24,
		fontWeight: '600',
	},
	headerStyle: {
		backgroundColor: '#000',
	},
});

const signedOut = createStackNavigator(
	{
		Login: {
			screen: Login,
			navigationOptions: {
				header: null,
			},
		},
		register: {
			screen: Register,
			navigationOptions: {
				header: null,
			},
		},
	},
	{
		initialRouteName: 'Login',
	}
);

const signedIn = createBottomTabNavigator(
	{
		Donor: {
			screen: Donor,
			navigationOptions: {
				tabBarLabel: 'Donor',
				tabBarIcon: ({ tintColor }) => <Icon name="user" type="font-awesome" color={tintColor} size={24} />,
			},
		},
		Donee: {
			screen: Donee,
			navigationOptions: {
				tabBarLabel: 'Donee',
				tabBarIcon: ({ tintColor }) => <Icon name="child" type="font-awesome" color={tintColor} size={24} />,
			},
		},
		Volunteer: {
			screen: Volunteer,
			navigationOptions: {
				tabBarLabel: 'Volunteer',
				tabBarIcon: ({ tintColor }) => (
					<Icon name="odnoklassniki" type="font-awesome" color={tintColor} size={24} />
				),
			},
		},
		Assets: {
			screen: Assets,
			navigationOptions: {
				tabBarLabel: 'Assets',
				tabBarIcon: ({ tintColor }) => <Icon name="dollar" type="font-awesome" color={tintColor} size={24} />,
			},
		},
		Reports: {
			screen: Reports,
			navigationOptions: {
				tabBarLabel: 'Reports',
				tabBarIcon: ({ tintColor }) => <Icon name="file-o" type="font-awesome" color={tintColor} size={24} />,
			},
		},
	},
	{
		initialRouteName: 'Donor',
		activeTintColor: '#7D4976',
		lazy: false,
		tabBarOptions: {
			activeTintColor: '#FFF',
			style: {
				backgroundColor: '#7D4976',
			},
		},
		navigationOptions: {
			header: null,
		},
	}
);

export default () =>
	createSwitchNavigator(
		{
			signedIn: { screen: signedIn },
			signedOut: { screen: signedOut },
			SplashScreen: { screen: SplashScreen },
		},
		{
			initialRouteName: 'SplashScreen',
		}
	);
