import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import * as authActions from './action';

// ACTION CREATOR FUNCTIONS 

const registerReq = () => {
    return {
        type: authActions.SIGN_UP_REQUEST
    }
}

const registerFail = (err) => {
    return {
        type: authActions.SIGN_UP_FAILED,
        payload: err.message
    }
}

const registerSuc = () => {
    return {
        type: authActions.SIGN_UP_SUCCESS
    }
}

const removeError = () => {
    return {
        type: authActions.REMOVE_ERROR
    }
}

export const register = (userData) => {  // userdata will contain email & password
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        dispatch(registerReq()) // request chl rhi hai wait (loading = true)

        const firebase = getFirebase();  // thunk mei firebase aagaya
        const firestore = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password).then(async (data) => {
            const res = firestore.collection('users').doc(data.user.uid).set({
                email: userData.email,
                resumeIds: []
            });
            //success =>

            dispatch(registerSuc());

        }).catch((err) => {
            dispatch(registerFail(err));

            setTimeout(() => {
                dispatch(removeError());
            }, 2000);
        })

    }
}

const signInReq = () => {
    return {
        type: authActions.SIGN_IN_REQUEST
    }
}

const signInFail = (err) => {
    return {
        type: authActions.signInFail,
        payload: err.message
    }
}

const signInSuc = () => {
    return {
        type: authActions.SIGN_IN_SUCCESS
    }
}



export const signIn = (userData) => {  // userdata will contain email & password
    return async (dispatch, getState, { getFirebase, getFirestore }) => {

        dispatch(signInReq()) // request chl rhi hai wait (loading = true)

        const firebase = getFirebase();  // thunk mei firebase aagaya 

        try {
            const res = await firebase.auth().signInWithEmailAndPassword(userData.email, userData.password);

            // success =>

            dispatch(signInSuc())

        } catch (error) {
            dispatch(signInFail(error))

            setTimeout(() => {
                dispatch(removeError());
            }, 2000);
        }

    }
}

// direct work for signout

export const signOut = () => {
    return (dispatch, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {  // signout => predefined function
            dispatch({ type: authActions.SIGN_OUT_SUCCESS })
        }).catch((err) => {
            dispatch({type : authActions.SIGN_OUT_FAILED, payload : err});
            setTimeout(() => {
                dispatch(removeError());
            }, 2000);
        })
    }
}