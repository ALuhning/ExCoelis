import { get, reject } from 'lodash'
import { createSelector } from 'reselect'
import moment from 'moment'
import { ETHER_ADDRESS, tokens, ether, GREEN, RED } from '../../helpers'
import { create } from 'domain'

const account = state => get(state, 'appReducer.account')
export const accountSelector = createSelector(account, a => a)

const enlisted = state => get(state, 'appReducer.enlisted')
export const enlistedSelector = createSelector(enlisted, e => e)

const teAccount = state => get(state, 'appReducer.teAccount')
export const teAccountSelector = createSelector(teAccount, n => n)

const jmAccount = state => get(state, 'appReducer.jmAccount')
export const jmAccountSelector = createSelector(jmAccount, j => j)

const wingsAccount = state => get(state, 'appReducer.wingsAccount')
export const wingsAccountSelector = createSelector(wingsAccount, j => j)

const trackerLoaded = state => get(state, 'appReducer.tracker.loaded', false)
export const trackerLoadedSelector = createSelector(trackerLoaded, t => t)

const filestorageLoaded = state => get(state, 'appReducer.filestorage.loaded', false)
export const filestorageLoadedSelector = createSelector(filestorageLoaded, f => f)

const allWings = state => get(state, 'appReducer.allWings')
export const issuedWingsSelector = createSelector(allWings, iw => iw)

const allSoldierEnlistedLoaded = state => get(state, 'appReducer.soldiers.loaded', false)
export const soldierEnlistedLoaded = createSelector(allSoldierEnlistedLoaded, so => so)

const allSoldierDelistedLoaded = state => get(state, 'appReducer.soldiers.loaded', false)
export const soldierDelistedLoaded = createSelector(allSoldierDelistedLoaded, sol => sol)

const allJumpMastersAuthorizedLoaded = state => get(state, 'appReducer.jumpmasters.loaded', false)
export const jumpMasterLoaded = createSelector(allJumpMastersAuthorizedLoaded, jms => jms)

const allTEIdentifiedLoaded = state => get(state, 'appReducer.tes.loaded', false)
export const TEIdentifiedLoaded = createSelector(allTEIdentifiedLoaded, te => te)

const allWingsIssued = state => get(state, 'wingsData.wings')
export const allWingsIssuedSelector = createSelector(allWingsIssued, wi => wi)

const allWingsRevokedLoaded = state => get(state, 'appReducer.wings.loaded', false)
export const wingsRevokedLoaded = createSelector(allWingsRevokedLoaded, wr => wr)

const tracker = state => get(state, 'appReducer.tracker.contract')
export const trackerSelector = createSelector(tracker, tr => tr)