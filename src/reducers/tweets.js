import { RECEIVE_TWEETS } from '../actions/tweets'

export default function tweets ( state = null, action) {
    switch(action.type) {
        case RECEIVE_TWEETS:
            return action.id
        default:
            return state
    }
}