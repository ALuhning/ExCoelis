import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    accountSelector,
    enlistedSelector
} from '../../redux/selectors/selectors'
import {
    loadWeb3,
    loadAccount,
    enlistSoldier
} from '../../redux/interactions/interactions'


class EnlistButton extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    async loadBlockchainData(dispatch) {
          const web3 = loadWeb3(dispatch)
          const networkType = await web3.eth.net.getNetworkType()
          console.log(networkType)
          const networkId = await web3.eth.net.getId()
          console.log(networkId)
          const account = await loadAccount(web3, dispatch)
          await enlistSoldier(dispatch, web3, networkId, account)
    }

    async handleClick() {
        console.log('Click happened')
        this.loadBlockchainData(this.props.dispatch)
    }

    render() {
        return <button onClick={this.handleClick}>Enlist</button>
    }
}

function mapStateToProps(state) {
    return {
        enlisted: enlistedSelector(state),
        account: accountSelector(state)
    }
}

export default connect(mapStateToProps)(EnlistButton)