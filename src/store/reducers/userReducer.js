const INITIAL_STATE = {
    loggedInUser: null
    // loggedInUser: {
    //     name:"Avi Berger",
    //     coins:100,
    //     moves:[],
    // }
}

export function userReducer(state = INITIAL_STATE , action){
    switch (action.type) {
        // case 'SPEND_BALANCE':
        //     return{
        //         ...state,
        //         loggedInUser:{
        //             ...state.loggedInUser,
        //             balance: state.loggedInUser.balance - action.amount

        //         }
        //     }
        case 'SET_USER' :
            return{
                ...state,
                loggedInUser: action.loggedInUser
            }            
           
    
        default:
           return state
    }
}