import _posts from '../data/posts'

//reducers are pure functions 
const postReducer = function posts(state = _posts , action) {
    
    switch(action.type){
        case 'REMOVE_POST' : return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST' : return [...state, action.post]
        default: return state
    }
    //return state
}

export default postReducer