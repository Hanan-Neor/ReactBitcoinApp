import { contactService } from "../../services/contactService2"

export function loadContacts(){
    return async (dispatch, getState) => {
        let {filterBy,contacts} = getState().contactModule
        // console.log(getState());
        // if(!contacts || !contacts.length){

             contacts = await contactService.query(filterBy)
        // }
        dispatch({type:'SET_CONTACTS',contacts})
    }
}

export function deleteContact(contactId){
    return async dispatch => { 
        await contactService.remove(contactId)
        dispatch({type:'DELETE_CONTACT' , contactId})
    }
}
// export function deleteContact(contactId){
//     return async dispatch => { 
//         const contacts = await contactService.remove(contactId)
//         console.log(contacts);
//          dispatch({type:'SET_CONTACTS',contacts})
//     }
// }

export function setFilterBy(filterBy){
    return dispatch => {
        // console.log(filterBy);
        dispatch({type:'SET_FILTER_BY' , filterBy})
    }
}