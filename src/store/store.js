import {createStore} from 'redux'
import initialState from './store.json'
import reducer from './reducers'

const store  = createStore(reducer, initialState)

store.subscribe(() => {
    console.log("store changed", store.getState())
})

export default store