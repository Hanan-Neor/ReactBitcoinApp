import { connect } from "react-redux"
import { NavLink, withRouter } from "react-router-dom"
import { userService } from "../services/userService"
import { getLoggedinUser } from '../store/actions/userActions'


import React, { Component } from 'react'

export class _AppHeader extends Component {
    logout = async () => {
        userService.logout()
        await this.props.getLoggedinUser()
        //    this.props.history.push('/')
        // console.log(this.props);

    }

    render() {
        const { user } = this.props
        // if (!user) return (<div>lodaing</div>)
        return (
            <div className="app-header flex align-center space-between">
                <div>
                    <h1>Mister Bitcoin</h1>
                </div>

                <div className="right-side flex">
                    {user?

                    <><div>
                        Hello {user.username}!
                        {/* <button onClick={this.logout}> Logout</button> */}

                    </div>
                    <nav className="flex">
                        <NavLink activeClassName="active-nav" exact to="/"><div>Home</div></NavLink>
                        <NavLink activeClassName="active-nav" to="/contact"><div>Contacts</div></NavLink>
                        <NavLink activeClassName="active-nav" to="/stats"><div>Stats</div></NavLink>

                    </nav></>
                    :
                    <div>Hello User!</div>
                    }
                </div>

            </div>
        )
    }
}




// function _AppHeader({user}) {



//     logout = ()=>{
//         userService.logout()
//     }
//     // const {user} = this.props
//     if (!user) return (<div>lodaing</div>)
//     return (
//         <div className="app-header flex align-center space-between">
//             <div>
//                 <h1>Mister Bitcoin</h1>
//             </div>
//             <div className="right-side flex">

//                 <div>
//                     Hello {user.username}!
//                     <button onClick={this.logout}> Logout</button>

//                 </div>
//                 <nav className="flex">
//                     <NavLink activeClassName="active-nav" exact to="/"><div>Home</div></NavLink>
//                     <NavLink activeClassName="active-nav" to="/contact"><div>Contacts</div></NavLink>
//                     <NavLink activeClassName="active-nav" to="/stats"><div>Stats</div></NavLink>

//                 </nav>
//             </div>

//         </div>
//     )
// }

const mapStateToProps = state => {
    return {
        user: state.userModule.loggedInUser
    }
}

const mapDispatchToProps = {
    getLoggedinUser
}

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader)