import {createStore} from 'redux'
import initialState from './store.json'
import reducer from './reducers'

let initialSavedState = localStorage.getItem('initialState')
initialSavedState = JSON.parse(initialSavedState) || initialState

console.log(initialSavedState)


const store  = createStore(reducer, initialSavedState)

store.subscribe(() => {
    console.log("store changed", store.getState())
    localStorage.setItem('initialState', JSON.stringify(store.getState()))

})

export default store