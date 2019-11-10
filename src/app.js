import React, { Component } from 'react'
import './App.cs'
import { connect } from 'react-redux'
import {
  loadWeb3,
  loadAccount,
  loadTracker,
  isEnlisted,
  hasWings,
  isTE,
  isJM,  
  initiateFileStorage
} from './redux/interactions/interactions'
import Navbar from './components/layout/Navbar'
import Content from './components/layout/Content'
import { 
  trackerLoadedSelector,
  filestorageLoadedSelector
 } from './redux/selectors/selectors'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {
      const web3 = loadWeb3(dispatch)
      const networkType = await web3.eth.net.getNetworkType()
      console.log(networkType)
      const networkId = await web3.eth.net.getId()
      console.log(networkId)
      const account = await loadAccount(web3, dispatch)
      const tracker = await loadTracker(web3, networkId, dispatch)
      if(!tracker) {
        window.alert('Tracker contract not detected on the current network, please select another.')
      }
      const enlisted = await isEnlisted(dispatch, web3, networkId, account)
      console.log("Soldier: " + enlisted)
      const te = await isTE(dispatch, web3, networkId, account)
      console.log("TE: " + te)
      const jm = await isJM(dispatch, web3, networkId, account)
      console.log("JM: " + jm)
      const ownsWings = await hasWings(dispatch, web3, networkId, account)
      console.log("Cdn Wings: " + ownsWings)
      const filestorage = await initiateFileStorage(dispatch)
      console.log(filestorage)
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <Content />
        { this.props.trackerLoaded ? <Content /> : <div className="content"></div>}
        
      </div>
    )};
}

function mapStateToProps(state) {
  return {
    trackerLoaded: trackerLoadedSelector(state),
    filestorageLoaded: filestorageLoadedSelector(state)
  }
}

export default connect(mapStateToProps)(App)
