import { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { MoveList } from '../cmps/MoveList'
import { TransferFund } from '../cmps/TransferFund'
// import contactService, {ContactService} from '../services/contactService' 
import { contactService } from '../services/contactService2'
import { deleteContact, loadContacts } from '../store/actions/contactActions'
import { addMove } from '../store/actions/userActions'
import { bitcoinService } from '../services/bitcoinService'



const _ContactDetailsPage = ({ match, loggedInUser, history, addMove }) => {
    // class _ContactDetailsPage extends Component {
    const [contact, setContact] = useState(null)
    const [moves, setMoves] = useState(null)
    const [updatedMoves, setUpdatedMoves] = useState(null)

    useEffect(() => {
        loadContact()
    }, [])

    useEffect(() => {
        if (contact)
            getMovesToContact()
    }, [contact,updatedMoves])

    const loadContact = async () => {
        const { id } = match.params
        const contactToState = await contactService.getById(id)
        setContact(contactToState)
    }

    const getMovesToContact = async () => {
        const userMoves = await loggedInUser.moves
        const movesToContact = userMoves.filter(move => { return move.toId === contact._id })
        setMoves(movesToContact)
    }

    // deleteContact = async () => {
    //     await props.deleteContact(state.contact._id)
    //     props.history.push('/contact')
    // }

    const goBack = () => {
        history.push('/contact/')
    }

    const getBitcoinRate = async () => {
        const bitcoinRate = await bitcoinService.getRate()
        // const bitcoinUsdRate = bitcoinRate.USD.last
        return bitcoinRate.USD.last
    }


    const onTransferCoins = async (transferAmount) => {
        // console.log(transferAmount);
        // const { contact } = state
        const moveToSave = {
            toId: contact._id,
            to: contact.name,
            at: Date.now(),
            amount: +transferAmount,
            usdAmount: await getBitcoinRate() * transferAmount
        }
        addMove(moveToSave)

        const movesToSave = moves.push(moveToSave)
        setUpdatedMoves(movesToSave)

        // loadContact()
    }

    // render() {
    // const { contact } = state

    // const { contact, moves } = state

    // const {loggedInUser} = props
    // if (!contact) return <div>wow I am loading</div>
    // if (!contact|| !loggedInUser.moves) return <div>wow I am loading</div>
    if (!contact || !moves) return <div>wow I am loading</div>
    return (
        <div className="secondary-layout flex column ">
            <div className="back-buttons-bar flex space-between">
                <Link>
                    <div onClick={goBack}>Back</div>
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
                        <button  onClick={deleteContact}>Delete</button>
                    </div> */}
                <TransferFund className="contact-details" onTransferCoins={onTransferCoins} maxCoins={loggedInUser.coins}></TransferFund>
            </div>
            {/* {JSON.stringify(loggedInUser.moves)} */}
            {/* <MoveList moves={loggedInUser.moves}></MoveList> */}
            <MoveList moves={moves} title={`Moves History`}></MoveList>
        </div>
    )
}
// }

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