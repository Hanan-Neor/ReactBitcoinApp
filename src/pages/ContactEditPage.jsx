import { Component } from 'react'
import { contactService } from '../services/contactService2'

export class ContactEditPage extends Component {

    state = {
        contact : null,
    }

async componentDidMount() {
    try{
        const id = this.props.match.params.id
        const contact = id ? await contactService.getById(id) : contactService.getEmptyContact()
        this.setState({contact})
    } catch (err) {
        
    }
}
onSaveRobot = async() => {
    const {contact} = this.state
    await contactService.save(contact)
    this.props.history.push('/contact/'+contact._id)
}

handleChange = ({target}) => {
    const field = target.name
    const value = target.value
    this.setState(prevState => ({contact: { ...prevState.contact, [field]:value}}))
}

    render() {
    if (!this.state.contact) return <div>{  'Lodaing...' }</div>
        const {name,email,phone} = this.state.contact
        return (
            <form className="contact-edit">
                <label htmlFor="name">Name</label>
                <input ref={this.inputRef} value={name} name="name" type="text" id="name" onChange={this.handleChange} />

                <label htmlFor="email">Email</label>
                <input value={email} name="email" type="text" id="email" onChange={this.handleChange} />

                <label htmlFor="phone">Phone number</label>
                <input value={phone} name="phone" type="text" id="phone" onChange={this.handleChange} />

                <button onClick={this.onSaveRobot}>Save</button>

                {/* <p>{this.state.errMsg}</p> */}
            </form>



        )
    }
}
