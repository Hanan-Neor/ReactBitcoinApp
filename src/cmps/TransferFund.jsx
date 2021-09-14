import React, { Component } from 'react'

export class TransferFund extends Component {

    state = {
        amount: null
    }

    onTransferCoins = ({ target }) => {
        // console.log(target.value);
        this.props.onTransferCoins(target.value)
    }

    handleChange = ({ target }) => {
        // this.props.onChangeFilter(target.value)
        // console.log(target.value);
        this.setState({ amount: target.value })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.amount) return
        this.props.onTransferCoins(this.state.amount)
        this.setState({ amount: '' })
    }

    render() {
        return (
            <div className="transfer-fund">
                <form className="transfer-form flex" onSubmit={this.handleSubmit} autoComplete="off" >
                    <div>
                        <label htmlFor="amount"></label>
                        <input id="amount" name="amount" type="number" placeholder="How much?" value={this.state.amount} onChange={this.handleChange} name="" min="1" max={this.props.maxCoins}
                            autoComplete="off" />
                    </div>
                    <div>
                        <button className="nice-button">Transfer</button>
                    </div>
                </form>
                {/* {this.state.amount} */}
            </div>
        )
    }
}
