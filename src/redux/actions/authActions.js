import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import * as authActions from './action';

 const registerReq = () => {
    return {
        type : authActions.SIGN_UP_REQUEST
    } 
}

 const registerFail = (err) => {
    return {
        type : authActions.SIGN_UP_FAILED,
        payload : err.message
    }
}

 const registerSuc = () => {
    return {
        type : authActions.SIGN_UP_SUCCESS
    }
}

const removeError = () => {
    return {
        type : authActions.REMOVE_ERROR
    }
}

export const register = (userData) => {  // userdata will contain email & password
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        dispatch(registerReq()) // request chl rhi hai wait (loading = true)

        const firebase = getFirebase();  // thunk mei firebase aagaya
        const firestore = getFirebase(); 

        firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password).then(async(data)=> {
            const res = firestore.collection('users').doc(data.user.uid).set({
                email : userData.email,
                resumeIds : []
            });
            //success =>

            dispatch(registerSuc());

        }).catch((err)=> {
            dispatch(registerFail(err));

            setTimeout(() => {
                dispatch(removeError());
            }, 2000);
        })

    }
}