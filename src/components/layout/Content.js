import React, { Component } from 'react'
import { connect } from 'react-redux'
import AssignTEForm from '../pieces/AssignTEForm'
import AssignJMForm from '../pieces/AssignJMForm'
import IssueWingsForm from '../pieces/IssueWingsForm'
import { loadAllEvents, subscribeToEvents, loadTracker, loadWeb3, loadAccount } from '../../redux/interactions/interactions'
import { 
    trackerSelector, 
    allWingsIssuedSelector 
} from '../../redux/selectors/selectors'

const showIssuedWings = (props) => {
    const { issuedWings } = props
    return (
    <div className={issuedWings}></div>
    )
}

class Content extends Component {


    componentWillMount() {
        this.loadBlockChainData(this.props.dispatch)
    }

    async loadBlockChainData(dispatch) {
       // const { dispatch, tracker } = props
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
        
        await subscribeToEvents(tracker, dispatch)
        await loadAllEvents(tracker, dispatch) 
    }
    

    render() {
        return (
            <div> {console.log(this.props.issuedWings)}               
                <AssignTEForm />
                <AssignJMForm />
                <IssueWingsForm />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tracker: trackerSelector(state),
        issuedWings: allWingsIssuedSelector(state)
    }
}

export default connect(mapStateToProps)(Content)