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

const filestorageInitiated = (filestorage) => ({
    type: FILESTORAGE_INITIATED,
    payload: filestorage
})

const isJM = (jm) => ({
    type: IS_JM,
    payload: jm
})

const allIssuedWingsLoaded = (allWings) => ({
    type: ISSUED_WINGS_LOADED,
    payload: allWings
})

const allSoldierEnlistedLoaded = (soldiers) => ({
    type: ALL_SOLDIERS_ENLISTED,
    payload: soldiers
})

const allSoldierDelisted = (soldiers) => ({
    type: ALL_SOLDIERS_DELISTED,
    payload: soldiers
})

const allJumpMasterAuthorized = (jumpmasters) => ({
    type: ALL_JUMPMASTERS_AUTHORIZED,
    payload: jumpmasters
})

const allTEIdentified = (tes) => ({
    type: ALL_TES_IDENTIFIED,
    payload: tes
})

const allWingsIssued = (wings) => ({
    type: ALL_WINGS_ISSUED,
    payload: wings
})

const allWingsRevoked = (wings) => ({
    type: ALL_WINGS_REVOKED,
    payload: wings
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
    isJM,
    filestorageInitiated,
    allIssuedWingsLoaded,
    allSoldierEnlistedLoaded,
    allSoldierDelisted,
    allJumpMasterAuthorized,
    allTEIdentified,
    allWingsIssued,
    allWingsRevoked
}

export default appActions