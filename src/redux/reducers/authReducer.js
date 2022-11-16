import * as authActions from '../actions/action';
import initalState from './initialState.json';

const authReducer = (state = initalState.auth, action) => {

    switch (action.type) {

        // signup

        case authActions.SIGN_OUT_REQUEST:
            return {
                ...state,
                loading : true,   // yeh bs initastate.json mei auth vale ke true kr rha hai
            }

        case authActions.SIGN_UP_SUCCESS :
            return {
                ...state,
                loading : false
            }

        case authActions.SIGN_IN_FAILED :
            return {
                ...state,
                loading : false,
                error : action.payload
            }

        // signin

        case authActions.SIGN_IN_REQUEST :
            return {
                ...state,
                loading : true
            }

        case authActions.SIGN_IN_SUCCESS :
            return {
                ...state,
                loading : false,  
            }

        case authActions.SIGN_IN_FAILED :
            return {
                ...state,
                loading : false,
                error : action.payload
            }

        case authActions.REMOVE_ERROR :
            return {
                loading : false,
                error : ''
            }

        default:
            return state;
    }

}

export default authReducer;