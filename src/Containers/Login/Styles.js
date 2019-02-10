import eStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const logoNormalWidth = Dimensions.get('window').width / 2;
const logoMinWidth = logoNormalWidth / 2;

export default eStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '$containerBkColor',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	logoContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 16,
	},
	logNormal: {
		width: logoNormalWidth,
		height: logoNormalWidth,
	},
	logoMin: {
		width: logoMinWidth,
		height: logoMinWidth,
	},
});
