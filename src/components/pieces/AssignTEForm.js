import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    accountSelector,
    teAccountSelector
} from '../../redux/selectors/selectors'
import {
    loadWeb3,
    loadAccount,
    assignTE
} from '../../redux/interactions/interactions'


class AssignTEForm extends Component {
    constructor(props) {
        super(props)
        this.assignTE = this.assignTE.bind(this)
    }

    async loadBlockchainData(dispatch, establishmentAccount) {
          const web3 = loadWeb3(dispatch)
          const networkType = await web3.eth.net.getNetworkType()
          console.log(networkType)
          const networkId = await web3.eth.net.getId()
          console.log(networkId)
          const account = await loadAccount(web3, dispatch)
          await assignTE(dispatch, web3, networkId, account, establishmentAccount)
    }

    async assignTE(establishmentAccount) {
        await this.loadBlockchainData(this.props.dispatch, establishmentAccount)   
    }

    render() {
        return(
            <div>
            <h3>Assign Training Establishment</h3>
            <form onSubmit={(event) => {
                event.preventDefault()
                const establishmentAccount = this.teAddress.value
                this.assignTE(establishmentAccount)
                }}>
                <div className="form-group mr-sm-2">
                    <input
                        id="establishmentAccount"
                        type="text"
                        ref={(input) => { this.teAddress = input }}
                        className="form-control"
                        placeholder="Establishment Account"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Assign TE</button>
            </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        account: accountSelector(state),
        teAccount: teAccountSelector(state)
    }
}

export default connect(mapStateToProps)(AssignTEForm)