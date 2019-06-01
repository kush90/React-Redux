import React from "react";
import ReactDOM from "react-dom";
import {createStore,combineReducers} from "redux";
import {Provider} from 'react-redux';

import Products from "./components/products";

import productReducer from "./reducers/productReducers";
import cartReducer from "./reducers/cartReducers";


const store = createStore(combineReducers({
    products:productReducer,
    carts:cartReducer
}));


ReactDOM.render(<Provider store={store}><Products ></Products></Provider>,document.getElementById('app'));

