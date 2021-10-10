import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { MoveList } from '../cmps/MoveList'
import { TransferFund } from '../cmps/TransferFund'
// import contactService, {ContactService} from '../services/contactService' 
import { contactService } from '../services/contactService2'
import { deleteContact, loadContacts } from '../store/actions/contactActions'
import { addMove } from '../store/actions/userActions'
import { bitcoinService } from '../services/bitcoinService'



class _ContactDetailsPage extends Component {
    state = {
        contact: null,
        moves: null
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
        const movesToContact = userMoves.filter(move => { return move.toId === this.state.contact._id })
        this.setState({ moves: movesToContact })
    }

    // deleteContact = async () => {
    //     await this.props.deleteContact(this.state.contact._id)
    //     this.props.history.push('/contact')
    // }

    goBack = () => {
        this.props.history.push('/contact/')
    }

    getBitcoinRate = async () => {
        const bitcoinRate = await bitcoinService.getRate()
        // const bitcoinUsdRate = bitcoinRate.USD.last
        return bitcoinRate.USD.last
    }


    onTransferCoins = async (transferAmount) => {
        // console.log(transferAmount);
        const { contact } = this.state
        const moveToSave = {
            toId: contact._id,
            to: contact.name,
            at: Date.now(),
            amount: +transferAmount,
            usdAmount : await this.getBitcoinRate()*transferAmount
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
        if (!contact || !moves) return <div>wow I am loading</div>
        return (
            <div className="secondary-layout flex column ">
                <div className="back-buttons-bar flex space-between">
                    <Link>
                        <div onClick={this.goBack}>Back</div>
                    </Link>
                    <Link to={'/contact/edit/' + contact._id} >
                        <div>Edit</div>
                    </Link>

                </div>
                <div className="content-layout contact-details flex column" >
                    <img className="avatar" src={'https://robohash.org/' + contact._id} alt="" width="200" height="200" />
                    <div className="details">
                        <p className="name"><h1>{contact.name}</h1></p>
                        <p className="phone"><h3>{contact.phone}</h3></p>
                        <p className="email">{contact.email}</p>
                        {/* <p><b>Name: </b>{contact.name}</p>
                        <p><b>Phone: </b>{contact.phone}</p>
                        <p><b>Email: </b>{contact.email}</p> */}
                    </div>
                    {/* <div className="buttons">
                        <button  onClick={this.deleteContact}>Delete</button>
                    </div> */}
                <TransferFund className="contact-details" onTransferCoins={this.onTransferCoins} maxCoins={this.props.loggedInUser.coins}></TransferFund>
                </div>
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
        loggedInUser: state.userModule.loggedInUser
    }
}

const mapDispatchToProps = {
    deleteContact,
    loadContacts,
    addMove


    // getLoggedinUser

}

export const ContactDetailsPage = connect(mapStateToProps, mapDispatchToProps)(_ContactDetailsPage)