import { userLoginFailure, userLoginRequest, userLoginSuccess } from "../reducers/firebaserReducer";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "../lib/firebase/auth";

export const gmailRegister = () => async (dispatch) => {
    dispatch(userLoginRequest());

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user
    dispatch(userLoginSuccess({
        firebaseInfo: user
    }));

    }).catch((error) => {
        let payload
        switch (error.code) {
            case 'auth/invalid-email':
              payload = 'Invalid email address';
              break;
            case 'auth/user-disabled':
                payload = 'User account has been disabled';
              break;
            case 'auth/user-not-found':
                payload= 'User not found';
              break;
            case 'auth/wrong-password':
                payload = 'Invalid password';
              break;
            default:
                payload =  error.message;
              break;
          }
          dispatch(userLoginFailure({
            error: payload,
          }));
 
})};