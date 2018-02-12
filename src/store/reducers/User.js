import { combineReducers } from 'redux';


const data = (state={},action) => {
    return state
}

const isFetching = (state=false,action) => 
    (action.type === "USER_FETCHING") ?
        action.payload :
        state

const isAuthenticated = (state=false,action) => 
    (action.type === "USER_AUTHENTICATED") ?
        action.payload :
        state

const isFetchingError = (state=false,action) => 
    (action.type === "USER_FETCHING_ERROR") ?
        action.payload :
        state

const fetchingErrorDetail = (state={},action) => 
    (action.type === "USER_FETCHING_ERROR_DETAIL") ?
        action.payload :
        state

export default combineReducers({
    isFetching,
    isFetchingError,
    fetchingErrorDetail,
    isAuthenticated,
    data
})

