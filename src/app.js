'use strict';

import { buildTableComponent } from './components/workBenchContainer/jsModules/workBenchLayout'; //import the wrapper page. parallax baby #ForNoGoodReason
import React from 'react';
import ReactDOM from 'react-dom';
import fetchData from './components/locationCard/jsModules/fetchData';
import AllCardsContainer from './components/locationCard/jsModules/AllCardsContainer';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {CardsByDistrict} from './components/locationCard/reducersAndActions/reducers';

import {selectDistrict} from './components/locationCard/reducersAndActions/actions';

const store = createStore(CardsByDistrict);

console.log(store.subscribe);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(selectDistrict(3));
store.dispatch(selectDistrict(5));
store.dispatch(selectDistrict(32));
store.dispatch(selectDistrict(34));
store.dispatch(selectDistrict(47));
unsubscribe();

buildTableComponent(function (result) { //callback function returns the DOM target for your app   
    const targetDiv = result;
    const xHrReqParams = {
        baseURI: 'https://my-json-server.typicode.com/moabs81/fakeJSONServer',
        searchURI: '/officeCards100',
        paramsURI: '?_limit=10',
        method: 'GET'
    };
    fetchData.call(xHrReqParams, (function (result) {
        ReactDOM.render(
            <Provider store={store}>
                <AllCardsContainer cardData={JSON.parse(result.target.responseText)} />
            </Provider>,
            document.getElementById(targetDiv)
        );
    }));
});