// import configureStore from './configureStore';

// const store = configureStore();;

// export default store;

import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;