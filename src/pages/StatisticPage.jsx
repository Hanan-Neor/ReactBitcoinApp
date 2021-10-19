import { Component } from 'react'
import { bitcoinService } from '../services/bitcoinService'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from 'chart.js/auto';
import { Bar, Line } from 'react-chartjs-2'
// import { getRelativePosition } from 'chart.js/helpers';

export class StatisticPage extends Component {

    state = {
        marketPrice: null,
        confirmedTransactions: null,
        chartData: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data: [0, 10, 5, 2, 20, 30, 45],
                // data: this.state.marketPrice.values.map(value => value.y),
            }]

        }
    }

    componentDidMount() {
        this.loadMarketPrice()
        this.loadConfirmTransactions()

    }

    loadMarketPrice = async () => {
        const marketPrice = await bitcoinService.getMarketPrice()
        this.setState({ marketPrice })
        console.log(marketPrice);
    }

    loadConfirmTransactions = async () => {
        const confirmTransactions = await bitcoinService.getConfirmedTransactions()
        this.setState({ confirmTransactions })
    }





    render() {


        const { marketPrice, confirmTransactions } = this.state
        if (!marketPrice || !confirmTransactions) return <div>loading</div>
        return (
            <div className="statistic-page flex column" style={{ width: '100%' }}>
                {/* <div>
                    <h3>Market Price</h3>
                    <Sparklines data={marketPrice.values.map(value => value.y)}
                        margin={10}>
                        <SparklinesLine color="blue" style={{ strokeWidth: ".5", fill: "none" }} />
                    </Sparklines>
                </div>

                <div>
                    <h3>Confirm Transactions</h3>
                    <Sparklines data={confirmTransactions.values.map(value => value.y)}
                        margin={10}>
                        <SparklinesLine color="red" style={{ strokeWidth: ".5", }} />
                    </Sparklines>
                </div> */}

                {/* {JSON.stringify(marketPrice.values)} */}
                {/* {JSON.stringify(confirmTransactions.values)} */}

                < Line
                    // data={this.state.chartData}
                    data={{
                        // labels: ["January", "February", "March", "April", "May", "June", "July"],
                        labels: this.state.marketPrice.values.map(value => new Date(value.x * 1000).toLocaleDateString()),
                        datasets: [{
                            radius: 2,
                            hoverRadius: 3,
                            borderWidth: 1,
                            label: "Market Price",
                            // backgroundColor: 'rgba(255, 99, 132,0.5)',
                            // borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(71, 138, 189,0.5)',
                            borderColor: 'rgb(71, 138, 189)',
                            // data: [0, 10, 5, 2, 20, 30, 45],
                            fill:true,
                            data: this.state.marketPrice.values.map(value => value.y),
                        }]
                    }}

                    // options={chartOptions}
                    height={500}
                    width={700}
                />
                {/* <div className="bottom-divider"></div> */}
                <div className="" style={{marginBottom:'2rem'}}></div>

                < Line
                    // data={this.state.chartData}
                    data={{
                        // labels: ["January", "February", "March", "April", "May", "June", "July"],
                        labels: this.state.confirmTransactions.values.map(value => new Date(value.x * 1000).toLocaleDateString()),
                        datasets: [{
                            radius: 2,
                            hoverRadius: 3,
                            borderWidth: 1,
                            label: "Confirm Transactions",
                            backgroundColor: 'rgba(243,147,28,0.5)',
                            borderColor: 'rgb(243,147,28)',
                            fill: true,
                            data: this.state.confirmTransactions.values.map(value => value.y),

                        }]
                    }}
                // options={chartOptions}
                // height={400}
                // width={700}
                />
            </div>
        )
    }
}
