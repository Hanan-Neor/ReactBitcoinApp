import { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { MoveList } from '../cmps/MoveList'
import { TransferFund } from '../cmps/TransferFund'
// import contactService, {ContactService} from '../services/contactService' 
import { contactService } from '../services/contactService2'
import { deleteContact,loadContacts } from '../store/actions/contactActions'
import { addMove } from '../store/actions/userActions'



class _ContactDetailsPage extends Component {
    state = {
        contact: null,
        moves:null
    }

    componentDidMount() {
    // this.props.getLoggedinUser()

        this.loadContact()
    // console.log(this.props);

    }

    loadContact = async () => {
        const { id } = this.props.match.params
        const contact = await contactService.getById(id)
        this.getMovesToContact()
        this.setState({ contact })
    }

     getMovesToContact = async () => {
        const userMoves = await this.props.loggedInUser.moves
        const movesToContact = userMoves.filter(move => {return move.toId === this.state.contact._id})
        this.setState({ moves: movesToContact})
    }
    
    deleteContact = async () => {
         await this.props.deleteContact(this.state.contact._id)
            this.props.history.push('/contact')
    }

    goBack = () =>{
        this.props.history.push('/contact/')
    }

  

    onTransferCoins = (transferAmount) => {
        // console.log(transferAmount);
        const {contact} = this.state
        const moveToSave = {
            toId : contact._id,
            to : contact.name,
            at: Date.now(),
            amount: transferAmount
        }

         this.props.addMove(moveToSave)
        // //  const movesToSave = this.state.moves.push(moveToSave)
        // this.setState({moves:  movesToSave})
        this.loadContact()


    }

    render() {
        // const { contact } = this.state
        const { contact, moves } = this.state
        // const {loggedInUser} = this.props
        // if (!contact) return <div>wow I am loading</div>
        // if (!contact|| !loggedInUser.moves) return <div>wow I am loading</div>
        if (!contact|| !moves) return <div>wow I am loading</div>
        return (
            <div className="flex column ">

                <div className="contact-details flex column" >
                    <button onClick={this.goBack}>Back</button>
                    <img src={'https://robohash.org/' + contact._id} alt="" width="200" height="200" />
                    <div className="details">
                    <p><b>Name: </b>{contact.name}</p>
                    <p><b>Phone: </b>{contact.phone}</p>
                    <p><b>Email: </b>{contact.email}</p>
                    </div>
                    <div className="buttons">
                    <Link to={'/contact/edit/' + contact._id} >
                        <button>Edit</button>
                    </Link>
                    <button onClick={this.deleteContact}>Delete</button>
                    </div>
                </div>
                <TransferFund  className="contact-details"  onTransferCoins={ this.onTransferCoins } maxCoins={this.props.loggedInUser.coins}></TransferFund>
                {/* {JSON.stringify(loggedInUser.moves)} */}
                {/* <MoveList moves={loggedInUser.moves}></MoveList> */}
                <MoveList moves={moves} title={`Moves History`}></MoveList>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // moves:state.userModule.loggedInUser.moves
        loggedInUser:state.userModule.loggedInUser
    }
}

const mapDispatchToProps = {
    deleteContact,
    loadContacts,
    addMove


    // getLoggedinUser

    }

export const ContactDetailsPage = connect(mapStateToProps,mapDispatchToProps)(_ContactDetailsPage)