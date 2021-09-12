import { Component } from 'react'
import { connect } from 'react-redux'
import { bitcoinService } from '../services/bitcoinService'
import { getLoggedinUser } from '../store/actions/userActions'
import { userService } from '../services/userService'

class _HomePage extends Component {
    state = {
        // user: {
        //     name: 'haha'
        // },
        bitcoinRate: null,
    }

    componentDidMount() {
        // this.loadUser()
        this.getBitcoinRate()
        console.log(this.props);
    }

    // loadUser = async () => {
    //     // const user = await userService.getUsers()
    //     // this.setState({user})
    //     this.props.getLoggedinUser()
    // }

    getBitcoinRate = async () => {
        const bitcoinRate = await bitcoinService.getRate()
        this.setState({bitcoinRate})
    }

    render() {
        const { bitcoinRate } = this.state
        const {user} = this.props
        if (!user) return (<div>lodaing</div>)
        return (
            <div className="home-page flex column justify-center">
                <h1>Hello {user.username} !</h1>
                
                    <div>Coins: {user.coins}</div>
                    <div>BTC: {bitcoinRate?  bitcoinRate : 'loading' }</div> 
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.userModule.loggedInUser
    }
}

// const mapDispatchToProps = {
//     getLoggedinUser
// }



// export const HomePage = connect(mapStateToProps,mapDispatchToProps)(_HomePage)
export const HomePage = connect(mapStateToProps)(_HomePage)