import { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { ContactFilter } from '../cmps/ContactFilter'
import {ContactList} from '../cmps/ContactList'
// import contactService from '../services/contactService'
// import {contactService} from '../services/contactService2'
import { loadContacts,deleteContact,setFilterBy } from '../store/actions/contactActions'

class _ContactPage extends Component {
    state={
        contacts:[],
        filterBy:null
    }

    componentDidMount(){
    // console.log(this.props);
        // this.loadContacts()
        this.props.setFilterBy('')
        // if(!this.props.contacts){

            this.props.loadContacts()
        // }
        console.log(this.props);
    }

    // async loadContacts(){
    //     const contacts = await contactService.query(this.state.filterBy)
    //     // const contacts = await contactService.getContacts(this.state.filterBy)
    //     this.props.dispatch({type: 'SET_CONTACTS' , contacts})
    //     // this.setState({contacts})
    // }

   onChangeFilter = (filterBy) => {
    //    console.log('filterBy',filterBy);
    //    this.setState({filterBy}, this.loadContacts)
    this.props.setFilterBy(filterBy)
    this.props.loadContacts()

   }


    render() {
    //   const  {contacts} = this.state
      const  {contacts} = this.props
      const {selectContact} = this.props
      if(!contacts) return <div>Loading Contacts...</div>
        return (
            <div className="contact-page">
                <ContactFilter onChangeFilter={this.onChangeFilter} />
                <Link to={'/contact/edit'}>
                <button>Add Contact</button>
                </Link> 
                <ContactList contacts={contacts} selectContact={selectContact}/>
                {/* {JSON.stringify(contacts, null, 2)} */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contactModule.contacts,
        // filterBy: state.contactModule.filterBy
    }
}
const mapDispatchToProps = {
// loadContacts : loadContacts
loadContacts,
deleteContact,
setFilterBy
}
export const ContactPage = connect(mapStateToProps,mapDispatchToProps)(_ContactPage)
