import React from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import { Login } from '../Containers/Login';
import eStyleSheet from 'react-native-extended-stylesheet';
import { Register } from '../Containers/Register';

import { Icon } from 'react-native-elements';
import { SplashScreen } from '../Containers/SplashScreen';
import { LoadingScreen } from '../Containers/LoadingScreen';
import DonorRoute from './DonorRoute';
import DoneeRoute from './DoneeRoute';
import VolunteerRoute from './VolunteerRoute';
import AdminRoute from './AdminRoute';
import AdminStack from './AdminStack';
import { Users } from '../Containers/Users';

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

// const signedIn = createStackNavigator(
// 	{
// 		LoadingScreen: { screen: LoadingScreen },
// 		Users: { screen: Users },
// 		DonorStack: { screen: DonorStack },
// 		DoneeStack: { screen: DoneeStack },
// 		VolunteerStack: { screen: VolunteerStack },
// 		AdminStack: { screen: AdminStack },
// 	},
// 	{
// 		initialRouteName: 'LoadingScreen',
// 	}
// );

export default () =>
	createSwitchNavigator(
		{
			signedOut: { screen: signedOut },
			AdminRoute: { screen: AdminRoute },
			DonorRoute: { screen: DonorRoute },
			DoneeRoute: { screen: DoneeRoute },
			VolunteerRoute: { screen: VolunteerRoute },
			SplashScreen: { screen: SplashScreen },
		},
		{
			initialRouteName: 'SplashScreen',
		}
	);
