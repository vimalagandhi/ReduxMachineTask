
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import combineReducers from './reducers/index';
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers, compose(
    applyMiddleware(
        sagaMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
)
);

sagaMiddleware.run(rootSaga);

export default store;
