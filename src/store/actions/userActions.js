import { contactService } from "../../services/contactService2";
import { userService } from "../../services/userService";

export function getLoggedinUser() {
    return async dispatch => {
        // try{
        const loggedInUser = await userService.getLoggedinUser()
        // console.log(loggedInUser);
        dispatch({ type: 'SET_USER', loggedInUser })
        // } catch(err){
        //     console.log(err);
        // }
    }
}
export function addMove(move) {
    // export function addMove(user){
    return async (dispatch, getState) => {
        // try{
        const { loggedInUser } = getState().userModule
        if (loggedInUser.coins < move.amount) return alert('You dont have enough money!')
        loggedInUser.coins -= move.amount

        loggedInUser.coins = loggedInUser.coins.toFixed(6)

        loggedInUser.moves.unshift(move)
        await userService.update(loggedInUser)
        dispatch({ type: 'SET_USER', loggedInUser })
        // } catch(err){
        //     console.log(err);
        // }

        // await userService.update(user)
        // dispatch({type: 'SET_USER' , user})
    }
}

export function updateContactInMoves(contact) {
    return async (dispatch, getState) => {
        const { loggedInUser } = getState().userModule
        // const movesToContact = loggedInUser.moves.find(move => move.toId === contact._id)
        // movesToContact.map(move => {
        //     move.to === contact.name
        // })
        loggedInUser.moves.map((move) => {
            
            if (move.toId === contact._id) {
                // console.log(move);
               move.to = contact.name
            }
        })
        // loggedInUser.moves = moves2
        console.log(loggedInUser);
        await userService.update(loggedInUser)
        dispatch({ type: 'SET_USER', loggedInUser })
    }

}