import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userService } from '../services/userService';
import { getLoggedinUser } from '../store/actions/userActions'


class _SignupPage extends Component {
    state = {
        signedUp: {
            username: null,
            coins: 100,
            moves: [],
        },
        loggedIn:{
            username:null
        }
    }

    componentDidMount() {
        console.log(this.props);
    }

    handleChange = ({ target }) => {
        // this.props.onChangeFilter(target.value)
        // console.log(target.value);
        // this.setState({ 'signedUp.name': target.value })



        const field = target.name
        const value = target.value
        this.setState(prevState => ({signedUp: { ...prevState.signedUp, [field]:value}}))
    

    }

    handleChange2 = ({ target }) => {
        // this.props.onChangeFilter(target.value)
        // console.log(target.value);
        // this.setState({ 'signedUp.name': target.value })



        const field = target.name
        const value = target.value
        this.setState(prevState => ({loggedIn: { ...prevState.loggedIn, [field]:value}}))
    

    }

    handleSubmit =async (event) => {
        event.preventDefault()
        // this.setState({name:''})
        // console.log(this.state.signedUp);
        await userService.signup(this.state.signedUp)
        await this.props.getLoggedinUser()
        this.props.history.push('/')
    }
    handleLogin =async (event) => {
        event.preventDefault()
        // this.setState({name:''})
        // console.log(this.state.signedUp);
        await userService.login(this.state.loggedIn)
        await this.props.getLoggedinUser()
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div>
                signup
                <form onSubmit={this.handleSubmit}>
                <input  id="username" name="username" type="text" onChange={this.handleChange} autoComplete="off"/>
                </form>
                </div>
                <div>

                login
                <form onSubmit={this.handleLogin}>
                <input  id="username" name="username" type="text" onChange={this.handleChange2} autoComplete="off"/>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // user: state.userModule.loggedInUser
    }
}


const mapDispatchToProps = {
    getLoggedinUser
}



// export const HomePage = connect(mapStateToProps,mapDispatchToProps)(_HomePage)
export const SignupPage = connect(mapStateToProps,mapDispatchToProps)(_SignupPage)