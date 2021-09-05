import { Component } from 'react'
import { bitcoinService } from '../services/bitcoinService'
import { Sparklines, SparklinesLine } from 'react-sparklines';

export class StatisticPage extends Component {

    state = {
        marketPrice: null,
        confirmedTransactions: null
    }

    componentDidMount() {
        this.loadMarketPrice()
        this.loadConfirmTransactions()
    }

    loadMarketPrice = async () => {
        const marketPrice = await bitcoinService.getMarketPrice()
        this.setState({ marketPrice })
    }

    loadConfirmTransactions = async () => {
        const confirmTransactions = await bitcoinService.getConfirmedTransactions()
        this.setState({ confirmTransactions })
    }


    render() {
        const { marketPrice, confirmTransactions } = this.state
        if (!marketPrice || !confirmTransactions) return <div>loading</div>
        return (
            <div className="flex column" style={{width:'100%'}}>
                <h1>statistics!</h1>
                <div>
                    <h3>Market Price</h3>

                    <Sparklines data={marketPrice.values.map(value => value.y)}
                      margin={10}>
                        <SparklinesLine color="blue"  style={{strokeWidth:".5", fill:"none"}} />
                    </Sparklines>

                </div>
                {/* {JSON.stringify(marketPrice.values)} */}


                <div>
                    <h3>Confirm Transactions</h3>

                    <Sparklines data={confirmTransactions.values.map(value => value.y)}
                        margin={10}>
                        <SparklinesLine color="red" style={{strokeWidth:".5", }}/>
                    </Sparklines>

                </div>
                {/* {JSON.stringify(confirmTransactions.values)} */}
            </div>
        )
    }
}
