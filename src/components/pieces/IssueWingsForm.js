import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    accountSelector,
    wingsAccountSelector
} from '../../redux/selectors/selectors'
import {
    loadWeb3,
    loadAccount,
    issueWings
} from '../../redux/interactions/interactions'


class IssueWingsForm extends Component {
    constructor(props) {
        super(props)
        this.issueWings = this.issueWings.bind(this)
    }

    async loadBlockchainData(dispatch, wingsAccount) {
          const web3 = loadWeb3(dispatch)
          const networkType = await web3.eth.net.getNetworkType()
          console.log(networkType)
          const networkId = await web3.eth.net.getId()
          console.log(networkId)
          const account = await loadAccount(web3, dispatch)
          await issueWings(dispatch, web3, networkId, account, wingsAccount)
    }

    async issueWings(wingsAccount) {
        await this.loadBlockchainData(this.props.dispatch, wingsAccount)   
    }

    render() {
        return(
            <div>
            <h3>Issue Parachute Wings</h3>
            <form onSubmit={(event) => {
                event.preventDefault()
                const wingsAccount = this.wingsAddress.value
                this.issueWings(wingsAccount)
                }}>
                <div className="form-group mr-sm-2">
                    <input
                        id="wingsAccount"
                        type="text"
                        ref={(input) => { this.wingsAddress = input }}
                        className="form-control"
                        placeholder="Issue Wings"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Issue Wings</button>
            </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        account: accountSelector(state),
        wingsAccount: wingsAccountSelector(state)
    }
}

export default connect(mapStateToProps)(IssueWingsForm)