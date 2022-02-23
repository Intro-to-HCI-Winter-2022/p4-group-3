// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import ModalReducer from './modal';

const rootReducer = combineReducers({
  modal: ModalReducer,
});

export default rootReducer;
