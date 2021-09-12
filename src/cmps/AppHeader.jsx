import { connect } from "react-redux"
import { NavLink, withRouter } from "react-router-dom"

function _AppHeader({user}) {
    // const {user} = this.props
    if (!user) return (<div>lodaing</div>)
    return (
        <div className="app-header flex align-center space-between">
            <div>
                <h1>Mister Bitcoin</h1>
            </div>
            <div className="right-side flex">

                <div>
                    Hello {user.username}!

                </div>
                <nav className="flex">
                    <NavLink activeClassName="active-nav" exact to="/"><div>Home</div></NavLink>
                    <NavLink activeClassName="active-nav" to="/contact"><div>Contacts</div></NavLink>
                    <NavLink activeClassName="active-nav" to="/stats"><div>Stats</div></NavLink>

                </nav>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return{
        user: state.userModule.loggedInUser
    }
}


export const AppHeader = connect(mapStateToProps)(_AppHeader)