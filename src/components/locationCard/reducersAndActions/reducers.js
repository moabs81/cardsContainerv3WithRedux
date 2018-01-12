const initialState = {
    districtSelected: 1 
};

export const CardsByDistrict = function(state = initialState, action){
    switch(action.type){
        case 'SELECT_DISTRICT':
            return Object.assign(
                {},
                state,
                {districtSelected: action.districtNum}
            );
            case 'GET_DATA':
            
        default:
            return state;
    };
    return state;
};