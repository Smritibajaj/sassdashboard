import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import  authReducer from './authenticationReducer';
import leadsReducer from './leadsReducer';
import dashboardReducer from './dashboardReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    auth: authReducer,
    leads: leadsReducer,
    dashboard: dashboardReducer
});

export default reducer;
