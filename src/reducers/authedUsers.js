import { SET_AUTHED_USER } from '../actions/authedUser'

export default function ( state = [], action ) {
    switch(action.type) {
        case SET_AUTHED_USER:
            return {
                ...state,
                ...action.id
            }
        default:
            return state
    }

}