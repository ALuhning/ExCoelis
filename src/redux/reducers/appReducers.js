import {
    WEB3_LOADED,
    WEB3_ACCOUNT_LOADED,
    TRACKER_LOADED,
    ENLISTED_SOLDIERS_LOADED,
    ENLISTING_SOLDIER,
    DELISTING_SOLDIER,
    ASSIGN_TRAINING_ESTABLISHMENT,
    ASSIGN_JUMPMASTER,
    ISSUE_WINGS,
    IS_ENLISTED,
    IS_TE,
    IS_JM,
    HAS_CDN_WINGS,
    FILESTORAGE_INITIATED,
    ISSUED_WINGS_LOADED,
    ALL_SOLDIERS_ENLISTED,
    ALL_SOLDIERS_DELISTED,
    ALL_JUMPMASTERS_AUTHORIZED,
    ALL_TES_IDENTIFIED,
    ALL_WINGS_ISSUED,
    ALL_WINGS_REVOKED
} from '../actionTypes'

const initialState = {}

export default function appReducer(state = initialState, action) {
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
        case ASSIGN_JUMPMASTER:
            return {...state, jmAccount: action.payload}
        case ISSUE_WINGS:
            return {...state, wingsAccount: action.payload}
        case HAS_CDN_WINGS:
            return {...state, wings: action.payload}
        case IS_ENLISTED:
            return {...state, enlisted: action.payload}
        case IS_TE:
            return {...state, te: action.payload}
        case IS_JM:
            return {...state, jm: action.payload}
        case FILESTORAGE_INITIATED:
            return {...state, loaded: true, filestorage: action.payload}
        case ISSUED_WINGS_LOADED:
            return {...state, loaded: true, allWings: action.payload}
        case ALL_SOLDIERS_ENLISTED:
            return {...state, loaded: true, soldiers: action.payload}
        case ALL_SOLDIERS_DELISTED:
            return {...state, loaded: true, soldiers: action.payload}
        case ALL_JUMPMASTERS_AUTHORIZED:
            return {...state, loaded: true, jumpmasters: action.payload}
        case ALL_TES_IDENTIFIED:
            return {...state, loaded: true, tes: action.payload}
        case ALL_WINGS_ISSUED:
            return {...state, loaded: true, wings: action.payload}
        case ALL_WINGS_REVOKED:
            return {...state, loaded: true, wings: action.payload}
        default:
            return state;
    }
}