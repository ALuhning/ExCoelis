import { combineReducers } from 'redux'

function wingsData(state={}, action) {
    switch (action.type) {
        case 'ALL_WINGS_ISSUED1':
            return {...state, wings: action.wings}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    wingsData
})

export default rootReducer