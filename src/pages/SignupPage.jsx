import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userService } from '../services/userService';
import { getLoggedinUser } from '../store/actions/userActions'


class _SignupPage extends Component {
    state = {
        isSignedUp: false,
        signedUp: {
            username: null,
            coins: 100,
            moves: [],
        },
        loggedIn: {
            username: null
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
        this.setState(prevState => ({ signedUp: { ...prevState.signedUp, [field]: value } }))


    }

    handleChange2 = ({ target }) => {
        // this.props.onChangeFilter(target.value)
        // console.log(target.value);
        // this.setState({ 'signedUp.name': target.value })



        const field = target.name
        const value = target.value
        this.setState(prevState => ({ loggedIn: { ...prevState.loggedIn, [field]: value } }))


    }

    handleSubmit = async (event) => {
        event.preventDefault()
        // this.setState({name:''})
        // console.log(this.state.signedUp);
        await userService.signup(this.state.signedUp)
        await this.props.getLoggedinUser()
        this.props.history.push('/')
    }
    handleLogin = async (event) => {
        event.preventDefault()
        // this.setState({name:''})
        // console.log(this.state.signedUp);
        await userService.login(this.state.loggedIn)
        await this.props.getLoggedinUser()
        this.props.history.push('/')
    }

    toggleSignup = () => {
        const isSignedUp = !this.state.isSignedUp
        this.setState({ isSignedUp })
    }

    render() {
        const { isSignedUp } = this.state
        return (
            <div className="signup-page">
                {!isSignedUp && (<div className="form-container">
                    <h2>Signup</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input id="username" name="username" type="text" placeholder="Enter username" onChange={this.handleChange} autoComplete="off" />
                    </form>
                    <div className="sm-font">Already registered? Please <Link><b><span onClick={this.toggleSignup}>Login</span></b></Link>   </div>
                </div>)}
                {isSignedUp && (<div className="form-container">

                <h2>Login</h2>
                    <form onSubmit={this.handleLogin}>
                        <input id="username" name="username" type="text" placeholder="Enter username" onChange={this.handleChange2} autoComplete="off" />
                    </form>
                    <div className="sm-font">Not registered yet? Please <Link><b><span onClick={this.toggleSignup}>Signup</span></b></Link>   </div>
                </div>)}
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
export const SignupPage = connect(mapStateToProps, mapDispatchToProps)(_SignupPage)