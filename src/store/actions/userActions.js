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