import { firebaseReducer} from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import contactReducer from "./contactReducer";
import documentReducer from "./documentReducer";
import educationReducer from "./educationReducer";



const rootReducer = combineReducers({
    document : documentReducer,
    contact : contactReducer,
    education : educationReducer,
    firebase : firebaseReducer,
    firestore : firestoreReducer
})

export default rootReducer;