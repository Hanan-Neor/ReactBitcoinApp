import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contactService2'
import { deleteContact } from '../store/actions/contactActions'
import {updateContactInMoves} from '../store/actions/userActions'


class _ContactEditPage extends Component {

    state = {
        contact: null,
    }

    async componentDidMount() {
        try {
            const id = this.props.match.params.id
            const contact = id ? await contactService.getById(id) : contactService.getEmptyContact()
            this.setState({ contact })
        } catch (err) {

        }
    }
    onSaveRobot = async () => {
        const { contact } = this.state
        await this.props.updateContactInMoves(contact)
        await contactService.save(contact)
        this.props.history.push('/contact/' + contact._id)
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    goBack = () => {
        const { contact } = this.state
        contact._id ? this.props.history.push('/contact/' + contact._id) : this.props.history.push('/contact')
    }

    deleteContact = async (e) => {
        e.preventDefault()
        if (!this.state.contact._id) return
        await this.props.deleteContact(this.state.contact._id)
        this.props.history.push('/contact')
    }



    render() {
        if (!this.state.contact) return <div>{'Lodaing...'}</div>
        const { name, email, phone } = this.state.contact
        return (
            <div className="secondary-layout ">

                <div className="back-buttons-bar flex space-between">
                    <Link>
                        <div onClick={this.goBack}>Back</div>
                    </Link>

                </div>

                <form className="content-layout contact-edit">
                    <label htmlFor="name">Name</label>
                    <input ref={this.inputRef} value={name} name="name" type="text" id="name" onChange={this.handleChange} />

                    <label htmlFor="email">Email</label>
                    <input value={email} name="email" type="text" id="email" onChange={this.handleChange} />

                    <label htmlFor="phone">Phone number</label>
                    <input value={phone} name="phone" type="text" id="phone" onChange={this.handleChange} />

                    <div className="buttons">
                        <button className="nice-button" onClick={this.onSaveRobot}>Save</button>
                        {this.state.contact._id && <button className="simple-button" onClick={this.deleteContact}>Delete Contact</button>}
                    </div>

                    {/* <p>{this.state.errMsg}</p> */}
                </form>
            </div>



        )
    }
}




const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = {
    deleteContact,
    updateContactInMoves,
}

export const ContactEditPage = connect(mapStateToProps, mapDispatchToProps)(_ContactEditPage)