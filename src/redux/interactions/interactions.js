import Portis from '@portis/web3';
import Web3 from 'web3'
import Filestorage from '@skalenetwork/filestorage.js'
import appActions from '../actions/appActions'
import {
    allWingsIssued
} from '../actions/actions'
import WingsTracker from './../../abis/WingsTracker.json'

export const loadWeb3 = (dispatch) => {
    //const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')
    const mySKALEChain = {
        nodeUrl: "https://waterloo0.skalenodes.com:10117",
        chainId: 777,
        nodeProtocol: 'rpc',
      }
    const portis = new Portis('ec255233-3fb7-46b7-851f-e61dec1b7ee6', mySKALEChain);
    let web3 = new Web3(portis.provider);
    dispatch(appActions.web3Loaded(web3))
    return web3
}

export const initiateFileStorage = (dispatch) => {
    const filestorage = new Filestorage("https://waterloo0.skalenodes.com:10117")
    dispatch(appActions.filestorageInitiated(filestorage))
    return filestorage
}

export const loadAccount = async (web3, dispatch) => {
    try {
        //const accounts = await ethereum.enable()
        // You now have an array of accounts!
        // Currently only ever one:
        // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']
        const accounts = await web3.eth.getAccounts()
        const account = accounts[0]
        console.log(account)
        dispatch(appActions.web3AccountLoaded(account))
        return account
      } catch (error) {
        // Handle error. Likely the user rejected the login
        console.error(error)
      }
}

export const isEnlisted = async (dispatch, web3, networkId, account) => {
    const contractInstance = await new web3.eth.Contract(WingsTracker.abi, WingsTracker.networks[networkId].address)
    const enlisted = contractInstance.methods.enlisted(account).call()
    dispatch(appActions.isEnlisted(enlisted))
    return enlisted
}

export const isTE = async (dispatch, web3, networkId, account) => {
    const contractInstance = await new web3.eth.Contract(WingsTracker.abi, WingsTracker.networks[networkId].address)
    const te = contractInstance.methods.trainingEstablishment(account).call()
    dispatch(appActions.isTE(te))
    return te
}

export const isJM = async (dispatch, web3, networkId, account) => {
    const contractInstance = await new web3.eth.Contract(WingsTracker.abi, WingsTracker.networks[networkId].address)
    const jm = contractInstance.methods.jumpMaster(account).call()
    dispatch(appActions.isJM(jm))
    return jm
}

export const hasWings = async (dispatch, web3, networkId, account) => {
    const contractInstance = await new web3.eth.Contract(WingsTracker.abi, WingsTracker.networks[networkId].address)
    const cdnWings = contractInstance.methods.wings(account).call()
    dispatch(appActions.hasCdnWings(cdnWings))
    return cdnWings
}

export const enlistSoldier = async(dispatch, web3, networkId, account) => {
    const contractInstance = await new web3.eth.Contract(WingsTracker.abi, WingsTracker.networks[networkId].address)
    await contractInstance.methods.enlistSoldier(account).send({ from: account, gasPrice: '200000000', gas: 8000000})
    dispatch(appActions.enlistingSoldier(account))
}

export const delistSoldier = async(dispatch, web3, networkId, account) => {
    const contractInstance = await new web3.eth.Contract(WingsTracker.abi, WingsTracker.networks[networkId].address)
    await contractInstance.methods.delistSoldier(account).send({ from: account, gasPrice: '200000000', gas: 8000000})
    dispatch(appActions.delistingSoldier(account))
}

export const assignTE = async(dispatch, web3, networkId, account, establishmentAccount) => {
    const contractInstance = await new web3.eth.Contract(WingsTracker.abi, WingsTracker.networks[networkId].address)
    await contractInstance.methods.identifyTrainingEstablishment(establishmentAccount).send({ from: account, gasPrice: '200000000', gas: 8000000})
    dispatch(appActions.assignTrainingEstablishment(establishmentAccount))
}

export const assignJumpMaster = async(dispatch, web3, networkId, account, jmAccount) => {
    const contractInstance = await new web3.eth.Contract(WingsTracker.abi, WingsTracker.networks[networkId].address)
    await contractInstance.methods.assignJumpMaster(jmAccount).send({ from: account, gasPrice: '200000000', gas: 8000000})
    dispatch(appActions.assignJumpMaster(jmAccount))
}

export const issueWings = async(dispatch, web3, networkId, account, wingsAccount) => {
    const contractInstance = await new web3.eth.Contract(WingsTracker.abi, WingsTracker.networks[networkId].address)
    await contractInstance.methods.issueWings(wingsAccount).send({ from: account, gasPrice: '200000000', gas: 8000000})
    dispatch(appActions.issueWings(wingsAccount))
}

export const loadTracker = async (web3, networkId, dispatch) => {
    try {
        const tracker = await new web3.eth.Contract(WingsTracker.abi, WingsTracker.networks[networkId].address)
        dispatch(appActions.trackerLoaded(tracker))
        return tracker
    } catch(error) {
        console.log('WingsTracker contract not deployed to current network. Please select another network.')
        return null
    }
}

export const loadAllEvents = async (tracker, dispatch) => {
    //Fetch all SoldierEnlisted events
    const issuedWingsStream = await tracker.getPastEvents('WingsIssued', { fromBlock: 0, toBlock: 'latest'})
    const allIssuedWings = issuedWingsStream.map((event) => event.returnValues)
    dispatch(allWingsIssued(allIssuedWings))

    const enlistedSoldiersStream = await tracker.getPastEvents('SoldierEnlisted', { fromBlock: 0, toBlock: 'latest'})
    const allEnlistedSoldiers = enlistedSoldiersStream.map((event) => event.returnValues)
    dispatch(appActions.allSoldierEnlistedLoaded(allEnlistedSoldiers))

    const delistedSoldiersStream = await tracker.getPastEvents('SoldierDelisted', { fromBlock: 0, toBlock: 'latest'})
    const allDelistedSoldiers = delistedSoldiersStream.map((event) => event.returnValues)
    dispatch(appActions.allSoldierDelisted(allDelistedSoldiers))

    const jumpMasterAuthorizedStream = await tracker.getPastEvents('JumpMasterAuthorized', { fromBlock: 0, toBlock: 'latest'})
    const allJumpMastersAuthorized = jumpMasterAuthorizedStream.map((event) => event.returnValues)
    dispatch(appActions.allJumpMasterAuthorized(allJumpMastersAuthorized))

    const teIdentifiedStream = await tracker.getPastEvents('TrainingEstablishmentIdentified', { fromBlock: 0, toBlock: 'latest'})
    const allTEs = teIdentifiedStream.map((event) => event.returnValues)
    dispatch(appActions.allTEIdentified(allTEs))

    const wingsRevokedStream = await tracker.getPastEvents('WingsRevoked', { fromBlock: 0, toBlock: 'latest'})
    const allWingsRevoked = wingsRevokedStream.map((event) => event.returnValues)
    dispatch(appActions.allWingsRevoked(allWingsRevoked))
}

export const subscribeToEvents = async (tracker, dispatch) => {
    tracker.events.SoldierEnlisted({}, (error, event) => {
        dispatch(appActions.allSoldierEnlistedLoaded(event.returnValues))
    })

    tracker.events.SoldierDelisted({}, (error, event) => {
        dispatch(appActions.allSoldierDelisted(event.returnValues))
    })

    tracker.events.JumpMasterAuthorized({}, (error, event) => {
        dispatch(appActions.allJumpMasterAuthorized(event.returnValues))
    })

    tracker.events.TrainingEstablishmentIdentified({}, (error, event) => {
        dispatch(appActions.allTEIdentified(event.returnValues))
    })

    tracker.events.WingsIssued({}, (error, event) => {
        dispatch(appActions.allWingsIssued(event.returnValues))
    })

    tracker.events.WingsRevoked({}, (error, event) => {
        dispatch(appActions.allWingsRevoked(event.returnValues))
    })
}
