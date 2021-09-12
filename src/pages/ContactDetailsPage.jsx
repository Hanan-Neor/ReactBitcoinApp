import { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
// import contactService, {ContactService} from '../services/contactService' 
import { contactService } from '../services/contactService2'
import { deleteContact,loadContacts } from '../store/actions/contactActions'



class _ContactDetailsPage extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    console.log(this.props);

    }

    loadContact = async () => {
        const { id } = this.props.match.params
        const contact = await contactService.getById(id)
        this.setState({ contact })
    }
    
    deleteContact = async () => {
         await this.props.deleteContact(this.state.contact._id)
            this.props.history.push('/contact')
    }

    goBack = () =>{
        this.props.history.push('/contact/')
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>wow I am loading</div>
        return (
            <div className="contact-details flex column ">
                <button onClick={this.goBack}>Back</button>
                <img src={'https://robohash.org/' + contact._id} alt="" width="200" height="200" />
                <div className="details">
                <p><b>Name: </b>{contact.name}</p>
                <p><b>Phone: </b>{contact.phone}</p>
                <p><b>Email: </b>{contact.email}</p>
                </div>
                {/* <p>{contact.name}</p> */}
                <div className="buttons">
                <Link to={'/contact/edit/' + contact._id} >
                    <button>Edit</button>
                </Link>
                <button onClick={this.deleteContact}>Delete</button>


                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // contacts: state.contacts
    }
}

const mapDispatchToProps = {
    deleteContact,
    loadContacts
    }

export const ContactDetailsPage = connect(mapStateToProps,mapDispatchToProps)(_ContactDetailsPage)