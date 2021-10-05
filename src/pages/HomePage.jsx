import { Component } from 'react'
import { connect } from 'react-redux'
import { bitcoinService } from '../services/bitcoinService'
import { getLoggedinUser } from '../store/actions/userActions'
import { userService } from '../services/userService'
import { MoveList } from '../cmps/MoveList'
import { Link } from 'react-router-dom'
import { Sparklines, SparklinesLine } from 'react-sparklines';



class _HomePage extends Component {
    state = {
        marketPrice: null,

        // user: {
        //     name: 'haha'
        // },
        bitcoinRate: null,
        // moves: null
    }

    componentDidMount() {
        this.loadUser()
        this.loadMarketPrice()
        this.getBitcoinRate()
        console.log(this.props);
        // this.movesToShow()

    }

    loadUser = async () => {
        // const user = await userService.getUsers()
        // this.setState({user})
        await this.props.getLoggedinUser()
        if (!this.props.user) this.props.history.push('/signup')
    }
    loadMarketPrice = async () => {
        const marketPrice = await bitcoinService.getMarketPrice()
        this.setState({ marketPrice })
        console.log(marketPrice);
    }
    getBitcoinRate = async () => {
        const bitcoinRate = await bitcoinService.getRate()
        // const bitconToUsd = JSON.parse(bitcoinRate)
        console.log(bitcoinRate.USD.last);
        // this.setState({ bitcoinRate })
        this.setState({ bitcoinRate: bitcoinRate.USD.last })
    }

    // movesToShow = async () => {
    //     const moves = await this.props.user.moves.slice(0,5)
    //     this.setState({ moves })

    // }
    logout = async () => {
        userService.logout()
        await this.props.getLoggedinUser()
        this.props.history.push('/signup')
        console.log(this.props);

    }

    bitcoinRateToShow = (amount) => {
        // return this.state.bitcoinRate.toLocaleString('en-US', {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            // useGrouping:true,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    }



    render() {
        const { marketPrice } = this.state
        const { bitcoinRate } = this.state
        const { user } = this.props
        if (!user) return (<div>lodaing</div>)
        // if (!user ) return this.loadUser()

        return (
            <div className=" home-page secondary-layout flex column ">

                <div className="back-buttons-bar flex">

                    <Link onClick={this.logout}> Logout</Link>

                </div>
                <div className="content-layout flex column justify-center">

                    <h1>Hello {user.username} !</h1>

                    <div className="flex space-between bottom-divider">
                        <div className="left-side">
                            <div className="sm-font">Current Balance</div>
                            <div>BIT: <span className="bitcoin md-font">₿ {user.coins}</span></div>
                            <div>USD: <span className="usd">{this.bitcoinRateToShow(user.coins * bitcoinRate)}</span></div>
                        </div>
                        <div className="right-side">
                            <div className="sm-font">Current BTC to USD</div>
                            <div className="md-font">{bitcoinRate ? this.bitcoinRateToShow(bitcoinRate) : 'loading'}</div>
                        </div>
                    </div>



                    {marketPrice && (<div>
                        <h5 className="text-center">Market Price (last 5 months)</h5>
                        <Sparklines data={marketPrice.values.map(value => value.y)}>
                            <SparklinesLine color="orange" style={{ strokeWidth: ".5", fill: "orange" }} />
                        </Sparklines>
                    </div>)}

                    {/* <div>{bitcoinRate ? JSON.stringify(bitcoinRate) : 'loading'}</div> */}

                    {/* {moves? <MoveList moves={moves} title={'Last 5 moves'} withContactName={true}></MoveList> : 'loading'} */}


                </div>

                {/* {marketPrice && (<div>
                        <h4>Market Price (last 5 months)</h4>
                        <Sparklines data={marketPrice.values.map(value => value.y)}>
                            <SparklinesLine color="orange" style={{ strokeWidth: ".5", fill: "orange" }} />
                        </Sparklines>
                    </div>)} */}

                <MoveList moves={user.moves.slice(0, 5)} title={'Last 5 moves'} withContactName={true}></MoveList>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userModule.loggedInUser
    }
}

const mapDispatchToProps = {
    getLoggedinUser
}



// export const HomePage = connect(mapStateToProps,mapDispatchToProps)(_HomePage)
export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)