export const decrement = function(){
    return {type: 'DECREMENT'};
};

export const increment =  function(){
    return {type: 'INCREMENT'};
};

export const selectDistrict = function(districtNum){
    return {type: 'SELECT_DISTRICT', districtNum};
};

export const getData = function(loading){
    return {type: 'GET_DATA', loading};
};

export const getDataSuccessful = function(data){
    return {type: 'GET_DATA_SUCCESS', data};
};

export const getDataError = function(err){
    return {type:'GET_DATA_ERR',err};
};