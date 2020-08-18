import {combineReducers} from 'redux';
import noteReducers from './noteReducers';
import postReducer from './postReducer';
 
//Ở đay chúng ta có thể gộp nhiều reducers
// Ở ví dụ này mình chỉ có 1 reducers là noteReducers
export default combineReducers({
    note: noteReducers,
    post: postReducer
})