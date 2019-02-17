import * as firebase from 'firebase';
export const signOutUser = async () => {
	return await firebase
		.auth()
		.signOut()
		.then(() => 200)
		.catch(error => 201);
};
