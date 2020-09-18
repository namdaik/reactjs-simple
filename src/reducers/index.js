import {combineReducers} from 'redux';
import noteReducers from './noteReducers';
import postReducer from './postReducer';
import mySmReducer from './mySmReducer';


const settingReducer = (state = [], action) => {
	console.log(state, action,224);
    switch (action.type) {
        case 'GET_SETTING':
            return [action.settings, state];
        default: return state;
    }
};
 
//Ở đay chúng ta có thể gộp nhiều reducers
// Ở ví dụ này mình chỉ có 1 reducers là noteReducers
export default combineReducers({
    note: noteReducers,
    post: postReducer,
    mysm: mySmReducer,
    settings: settingReducer
});