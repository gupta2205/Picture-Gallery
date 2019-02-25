import _posts from '../data/posts'

const postReducer = function posts(state = _posts , action) {
    console.log(action.index)
    return state
}

export default postReducer