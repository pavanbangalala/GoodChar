import createRootNavigator from './MainRoute';
import { createAppContainer } from 'react-navigation';

export default isSignedIn => createAppContainer(createRootNavigator());
