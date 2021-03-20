import { combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';
import { reducer as formReducer } from 'redux-form';
import { streamReducer } from './streamReducer';

export default combineReducers({
        AuthReducer:AuthReducer,
        form:formReducer,
        streamReducer:streamReducer
});