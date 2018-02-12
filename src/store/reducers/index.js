import { combineReducers } from 'redux'

import user from './User'
import ideas from './Ideas'


export default combineReducers({
    user,
    ideas
})
