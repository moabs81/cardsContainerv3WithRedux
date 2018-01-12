import React from 'react';
import ReactDOM from 'react-dom';
import fetchData from '../components/locationCard/jsModules/fetchData';
import AllCardsContainer from '../components/locationCard/jsModules/AllCardsContainer';
const generateColor = require('color-generator');

const spRestParams = {
    baseURI: '###replace1###/support-center',
    searchURI: '/_api/web/lists/getbytitle(\'Branch Directory\')/items',
    paramsURI: '?$select=BranchNumber,District,Title,PrimaryNumber&$filter=District eq 47&$top=20&$orderby=BranchNumber asc',
    method: 'GET',
    headers: [{ 'header': 'Accept', 'value': 'application/json' }, { 'header': 'odata', 'value': 'verbose' }]
};

fetchData.call(spRestParams, function (result) {
    const arrBranches = [];
    {
        let tempArr;
        const returnObj = JSON.parse(result.target.responseText);
        Object.keys(returnObj).forEach(el => {
            el == 'value' ? tempArr = returnObj[el] : null;
        });
        tempArr.forEach(el => {
            const location = {
                key: el['odata.id'],
                id: String(el.BranchNumber),
                district: String(el.District),
                name: el.Title,
                primaryPhone: el.PrimaryNumber,
                manager: 'Derek F',
                region: generateColor(0.8).hexString()
            };
            arrBranches.push(location);
        });
    }
    ReactDOM.render(
        <AllCardsContainer cardData={arrBranches} />, document.getElementById('appContainer')
    );
});
