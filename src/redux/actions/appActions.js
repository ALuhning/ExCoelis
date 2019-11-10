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
    HAS_CDN_WINGS
} from '../actionTypes'

const web3Loaded = (connection) => ({
    type: WEB3_LOADED,
    payload: connection
})

const web3AccountLoaded = (account) => ({
    type: WEB3_ACCOUNT_LOADED,
    payload: account
})

const trackerLoaded = (contract) => ({
    type: TRACKER_LOADED,
    payload: contract
})

const allEnlistedSoldiersLoaded = (enlisted) => ({
    type: ENLISTED_SOLDIERS_LOADED,
    payload: enlisted
})

const enlistingSoldier = (soldierAccount) => ({
    type: ENLISTING_SOLDIER,
    payload: soldierAccount
})

const delistingSoldier = (soldierAccount) => ({
    type: DELISTING_SOLDIER,
    payload: soldierAccount
})

const assignTrainingEstablishment = (teAccount) => ({
    type: ASSIGN_TRAINING_ESTABLISHMENT,
    payload: teAccount
})

const assignJumpMaster = (jmAccount) => ({
    type: ASSIGN_JUMPMASTER,
    payload: jmAccount
})

const isEnlisted = (enlisted) => ({
    type: IS_ENLISTED,
    payload: enlisted
})

const hasCdnWings = (wings) => ({
    type: HAS_CDN_WINGS,
    payload: wings
})

const issueWings = (wingsAddress) => ({
    type: ISSUE_WINGS,
    payload: wingsAddress
})

const isTE = (te) => ({
    type: IS_TE,
    payload: te
})

const isJM = (jm) => ({
    type: IS_JM,
    payload: jm
})

const appActions = {
    web3Loaded,
    web3AccountLoaded,
    trackerLoaded,
    allEnlistedSoldiersLoaded,
    enlistingSoldier,
    delistingSoldier,
    assignTrainingEstablishment,
    assignJumpMaster,
    isEnlisted,
    issueWings,
    hasCdnWings,
    isTE,
    isJM
}

export default appActions