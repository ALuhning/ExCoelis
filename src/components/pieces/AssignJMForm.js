import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    accountSelector,
    jmAccountSelector
} from '../../redux/selectors/selectors'
import {
    loadWeb3,
    loadAccount,
    assignJumpMaster
} from '../../redux/interactions/interactions'


class AssignJMForm extends Component {
    constructor(props) {
        super(props)
        this.assignJM = this.assignJM.bind(this)
    }

    async loadBlockchainData(dispatch, jmAccount) {
          const web3 = loadWeb3(dispatch)
          const networkType = await web3.eth.net.getNetworkType()
          console.log(networkType)
          const networkId = await web3.eth.net.getId()
          console.log(networkId)
          const account = await loadAccount(web3, dispatch)
          await assignJumpMaster(dispatch, web3, networkId, account, jmAccount)
    }

    async assignJM(jmAccount) {
        await this.loadBlockchainData(this.props.dispatch, jmAccount)   
    }

    render() {
        return(
            <div>
            <h3>Assign JumpMaster</h3>
            <form onSubmit={(event) => {
                event.preventDefault()
                const jmAccount = this.jmAddress.value
                this.assignJM(jmAccount)
                }}>
                <div className="form-group mr-sm-2">
                    <input
                        id="jmAccount"
                        type="text"
                        ref={(input) => { this.jmAddress = input }}
                        className="form-control"
                        placeholder="JumpMaster Account"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Assign JumpMaster</button>
            </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        account: accountSelector(state),
        jmAccount: jmAccountSelector(state)
    }
}

export default connect(mapStateToProps)(AssignJMForm)