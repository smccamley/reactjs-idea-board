import { combineReducers } from 'redux';


const data = (state=[],action) => {
    if(action.type === "IDEAS_CREATE"){
        return [...state.map(idea => ({...idea})), action.payload]
    }else if(action.type === "IDEAS_DELETE"){
        return state.map(idea => ({...idea})).filter(idea => idea.id !== action.payload.id)
    }else if(action.type === "IDEAS_EDIT"){
        return [...state.map(idea => {
            if(idea.id !== action.payload.id){
                return {...idea}
            }else{
                return action.payload
            }
        })]
    }else{
        return state
    }
}

const isFetching = (state=false,action) => 
    (action.type === "IDEAS_FETCHING") ?
        action.payload :
        state


const isFetchingError = (state=false,action) => 
    (action.type === "IDEAS_FETCHING_ERROR") ?
        action.payload :
        state

const fetchingErrorDetail = (state={},action) => 
    (action.type === "IDEAS_FETCHING_ERROR_DETAIL") ?
        action.payload :
        state

// "ideas":{
//     "data":[
//         {
//             "id": "asdfghj2345", 
//             "created_date": "new Date()", 
//             "title": "Idea 1", 
//             "body": "This is the description of the idea in all of it's glory we know that it is awesome for many reasons."
//         },
//         {"id": "asdf2345", "created_date": "new Date()", "title": "Idea 2", "body": "This is the description of the idea in all of it's glory we know that it is awesome for many reasons."},
//         {"id": "asdfqweghj2345", "created_date": "new Date()", "title": "Idea 3", "body": "This is the description of the idea in all of it's glory we know that it is awesome for many reasons."},
//         {"id": "asdf232345", "created_date": "new Date()", "title": "Idea 4", "body": "This is the description of the idea in all of it's glory we know that it is awesome for many reasons."},
//         {"id": "asdf1111j2345", "created_date": "new Date()", "title": "Idea 5", "body": "This is the description of the idea in all of it's glory we know that it is awesome for many reasons."}
//     ],
//     "isFetching":false,
//     "isFetchingError":false,
//     "fetchingErrorDetail":false
// }


export default combineReducers({
    isFetching,
    isFetchingError,
    fetchingErrorDetail,
    data
})

