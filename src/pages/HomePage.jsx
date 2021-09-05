import { Component } from 'react'
import { bitcoinService } from '../services/bitcoinService'
import { userService } from '../services/userService'

export class HomePage extends Component {
    state = {
        user: {
            name: 'haha'
        },
        bitcoinRate: null,
    }

    componentDidMount() {
        this.loadUser()
        this.getBitcoinRate()
    }

    loadUser = async () => {
        const user = await userService.getUsers()
        this.setState({user})
    }

    getBitcoinRate = async () => {
        const bitcoinRate = await bitcoinService.getRate()
        this.setState({bitcoinRate})
    }

    render() {
        const { user, bitcoinRate } = this.state
        if (!user) return (<div>lodaing</div>)
        return (
            <div className="home-page flex column justify-center">
                <h1>Hello {user.name} !</h1>
                
                    <div>Coins: {user.coins}</div>
                    <div>BTC: {bitcoinRate?  bitcoinRate : 'loading' }</div> 
                
            </div>
        )
    }
}
