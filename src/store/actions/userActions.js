import { userService } from "../../services/userService";

export function getLoggedinUser(){
    return async dispatch => {
        // try{
            const loggedInUser = await userService.getLoggedinUser()
            // console.log(loggedInUser);
            dispatch({type: 'SET_USER' , loggedInUser})
        // } catch(err){
        //     console.log(err);
        // }
    } 
}
export function addMove(move){
// export function addMove(user){
    return async (dispatch , getState) => {
        // try{
            const {loggedInUser} = getState().userModule
            if (loggedInUser.coins < move.amount)return alert('You dont have enough money!')
            loggedInUser.coins -= move.amount

            loggedInUser.coins =loggedInUser.coins.toFixed(6) 

            loggedInUser.moves.unshift(move)
            await userService.update(loggedInUser)
            dispatch({type: 'SET_USER' , loggedInUser})
        // } catch(err){
        //     console.log(err);
        // }

            // await userService.update(user)
            // dispatch({type: 'SET_USER' , user})
    } 
}