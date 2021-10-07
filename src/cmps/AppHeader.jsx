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
    toggleMenu = () =>{
            document.querySelector(".right-side .nav").classList.toggle('menu-open')
            document.querySelector(".screen").classList.toggle('menu-open')
    }

    closeMenu = () =>{
        if(!document.querySelector(".right-side .nav").classList.contains('menu-open')) return
        this.toggleMenu()
    }

    render() {
        const { user } = this.props
        // if (!user) return (<div>lodaing</div>)
        return (
            <div className="app-header flex align-center space-between">
                <div>
                    <h1>Mr.Bitcoin</h1>
                </div>

                <div className="right-side flex align-center">
                    {user?

                    <>
                    {/* <div>
                        Hello {user.username}!
                    </div> */}

                    <div className="hamburger-button" onClick={this.toggleMenu}>
                        ≣
                    </div>

                    <nav className="nav flex">
                        {/* Hello <NavLink activeClassName="active-nav" exact to="/"><div>{user.username}!</div></NavLink> */}
                        <NavLink onClick={this.closeMenu} activeClassName="active-nav" exact to="/"><div>Home</div></NavLink>
                        <NavLink onClick={this.closeMenu} activeClassName="active-nav" to="/contact"><div>Contacts</div></NavLink>
                        <NavLink onClick={this.closeMenu} activeClassName="active-nav" to="/stats"><div>Stats</div></NavLink>

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