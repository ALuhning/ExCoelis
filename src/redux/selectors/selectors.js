import { get, reject } from 'lodash'
import { createSelector } from 'reselect'
import moment from 'moment'
import { ETHER_ADDRESS, tokens, ether, GREEN, RED } from '../../helpers'

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

const trackerLoaded = state => get(state, 'appReducer.tracker.loaded', true)
export const trackerLoadedSelector = createSelector(trackerLoaded, t => t)