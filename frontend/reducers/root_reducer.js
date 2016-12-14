import { combineReducers } from 'redux';
import HomeBarReducer from './home-bar-reducer';

const RootReducer = combineReducers({
   homebar: HomeBarReducer
});

export default RootReducer;
