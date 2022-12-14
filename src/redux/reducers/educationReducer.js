import * as educationActions from '../actions/action';
import initalState from './initialState.json'

const educationReducer = (state = initalState.education, action) => {

    switch (action.type) {

        case educationActions.SET_EDUCATION:
            return {
                ...action.payload

            }

        case educationActions.UPDATE_EDUCATION:
            return {
                ...action.payload
            }


        default:
            return state;

    }
}


export default educationReducer;