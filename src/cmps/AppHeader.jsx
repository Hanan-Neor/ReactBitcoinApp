import { NavLink , withRouter } from "react-router-dom"

export function AppHeader() {
    return (
        <div className="app-header flex align-center space-between">
            <div>
                <h1>Mister Bitcoin</h1>
            </div>
            <nav className="flex">
                <NavLink activeClassName="active-nav" exact to="/"><div>Home</div></NavLink>
                <NavLink activeClassName="active-nav" to="/contact"><div>Contacts</div></NavLink>
                <NavLink activeClassName="active-nav" to="/stats"><div>Stats</div></NavLink>

            </nav>
            
        </div>
    )
}
