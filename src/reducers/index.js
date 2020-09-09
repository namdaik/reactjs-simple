import {combineReducers} from 'redux';
import noteReducers from './noteReducers';
import postReducer from './postReducer';


const settingReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SETTING':
            return action.settings;
        default: return [...state];
    }
};
 
//Ở đay chúng ta có thể gộp nhiều reducers
// Ở ví dụ này mình chỉ có 1 reducers là noteReducers
export default combineReducers({
    note: noteReducers,
    post: postReducer,
    settings: settingReducer
});