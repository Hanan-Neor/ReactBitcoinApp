import { HashRouter as Router, Redirect, Route , Switch } from 'react-router-dom'
import { AppHeader } from '../cmps/AppHeader'
import { Component } from 'react'
import {ContactDetailsPage} from './ContactDetailsPage'
import { ContactPage } from './ContactPage'
import { HomePage } from './HomePage'
import { StatisticPage } from './StatisticPage'
import { ContactEditPage } from './ContactEditPage'
// import { RobotList } from '../cmps/RobotList'
// import { RobotDetails } from './RobotDetails'
// import { robotService } from '../services/robotService'
// import { RobotFilter } from '../cmps/RobotFilter'

export class BitcoinApp extends Component {
  state = {
    robots: null,
    filterBy: null,
    selectedContactId: null,
    page: 'home'
    // selectedContactId: '5a56640269f443a5d64b32ca'
  }

  componentDidMount() {
    // console.log(this.props);
    // this.loadRobots()
  }

  selectContact = (contactId) => {
    this.setState({ selectedContactId: contactId })
  }

  gotoPage = (page) => {
    this.setState({ page: page, selectedContactId:null })
  }


  // async loadRobots() {
  //   const robots = await robotService.query(this.state.filterBy)
  //   this.setState({ robots })
  // }

  // selectRobot = (robotId) => {
  //   this.setState({ selectedRobotId: robotId })
  // }
  // onChangeFilter = (filterBy) => {
  //   this.setState({ filterBy }, this.loadRobots)
  // }

  // deleteRobot = async (robotId) => {
  //   await robotService.remove(robotId)
  //   this.loadRobots()
  // }

  render() {
    const { selectedContactId ,page } = this.state
    // console.log(this.selectContact);

    // if (!robots) return <div className="page-loading-screen">Loading...</div>

    return (
      <Router>
            <AppHeader />
          <main   className="main-layout flex column align-center" >
            <Switch>
              <Route path="/stats" component={StatisticPage}></Route>
              <Route path="/contact/edit/:id?" component={ContactEditPage} />
              <Route path="/contact/:id" component={ContactDetailsPage} />
              <Route path="/contact" component={ContactPage}></Route>
              <Route path="/" component={HomePage}></Route>
            </Switch>

          </main>


     </Router>

      /* <div className="flex column app-container">
        <h1>Mister Bitcoin</h1>
        <nav>
        <a onClick={() => { this.gotoPage('home') }} href="#"> Home</a> |
        <a onClick={() => { this.gotoPage('contactList') }} href="#"> Contacts</a> |
        <a onClick={() => { this.gotoPage('statistics') }} href="#"> Statistics</a> |

        
        </nav>

        <main className="main-layout">
        {page === 'home' && <HomePage />}
        {page === 'contactList' && (selectedContactId ? <ContactDetailsPage contactId={selectedContactId} /> : <ContactPage selectContact={this.selectContact} />)}
        {page === 'statistics' && <StatisticPage />}

        </main>
      </div> */
    )
  }
}
