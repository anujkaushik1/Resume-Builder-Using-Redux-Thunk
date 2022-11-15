import * as contactActions from '../actions/action';
import initalState from './initialState.json'

export default contactReducer = (state = initalState.contact, action) => {

    switch (action.type) {

        case contactActions.SET_CONTACT:
            return {
                ...action.payload

            }

        case contactActions.UPDATE_CONTACT:
            return {
                ...action.payload
            }


        default:
            return state;

    }
}