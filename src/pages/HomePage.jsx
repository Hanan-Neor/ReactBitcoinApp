import { Component } from 'react'
import { connect } from 'react-redux'
import { bitcoinService } from '../services/bitcoinService'
import { getLoggedinUser } from '../store/actions/userActions'
import { userService } from '../services/userService'
import { MoveList } from '../cmps/MoveList'
import { Link } from 'react-router-dom'


class _HomePage extends Component {
    state = {
        // user: {
        //     name: 'haha'
        // },
        bitcoinRate: null,
        // moves: null
    }

    componentDidMount() {
        this.loadUser()
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

    getBitcoinRate = async () => {
        const bitcoinRate = await bitcoinService.getRate()
        this.setState({ bitcoinRate })
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



    render() {
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

                    <div>Coins: {user.coins}</div>
                    <div>BTC: {bitcoinRate ? bitcoinRate : 'loading'}</div>

                    {/* {moves? <MoveList moves={moves} title={'Last 5 moves'} withContactName={true}></MoveList> : 'loading'} */}
                    <MoveList moves={user.moves} title={'Last 5 moves'} withContactName={true}></MoveList>


                </div>
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