import { contactService } from "../../services/contactService2"

export function loadContacts(){
    return async (dispatch, getState) => {
        const {filterBy} = getState()
        const contacts = await contactService.query(filterBy)
         dispatch({type:'SET_CONTACTS',contacts})
    }
}

export function deleteContact(contactId){
    return async dispatch => { 
        await contactService.remove(contactId)
        dispatch({type:'DELETE_CONTACT' , contactId})
    }
}

export function setFilterBy(filterBy){
    return dispatch => {
        // console.log(filterBy);
        dispatch({type:'SET_FILTER_BY' , filterBy})
    }
}