import {
    WEB3_LOADED,
    WEB3_ACCOUNT_LOADED,
    TRACKER_LOADED,
    ENLISTED_SOLDIERS_LOADED,
    ENLISTING_SOLDIER,
    DELISTING_SOLDIER,
    ASSIGN_TRAINING_ESTABLISHMENT,
    HAS_CDN_WINGS,
    ISSUE_WINGS,
    IS_ENLISTED,
    IS_TE
} from '../actionTypes'

const initialState = {}

export default function appReduceer(state = initialState, action) {
    switch (action.type) {
        case WEB3_LOADED:
            return {...state, connection: action.payload}
        case WEB3_ACCOUNT_LOADED:
            return {...state, account: action.payload}
        case TRACKER_LOADED:
            return {...state, loaded: true, contract: action.payload}
        case ENLISTED_SOLDIERS_LOADED:
            return {...state, enlisted: action.payload}
        case ENLISTING_SOLDIER:
            return {...state, soldierAccount: action.payload}
        case DELISTING_SOLDIER:
            return {...state, soldierAccount: action.payload}
        case ASSIGN_TRAINING_ESTABLISHMENT:
            return {...state, teAccount: action.payload}
        case ISSUE_WINGS:
            return {...state, wingsAccount: action.payload}
        case HAS_CDN_WINGS:
            return {...state, wings: action.payload}
        case IS_ENLISTED:
            return {...state, enlisted: action.payload}
        case IS_TE:
            return {...state, te: action.payload}
        default:
            return state;
    }
}