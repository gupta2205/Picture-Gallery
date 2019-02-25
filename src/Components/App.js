// connect store to Main component 
// it's a container component - 
//it provide data to prentatational component which gets data through props

import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {removePost} from '../redux/actions'

function mapStateToProps(state){
    return {
        posts: state
    }
}

function mapDispatchToProps(dispatch){
    return (
        bindActionCreators({removePost}, dispatch)
        )
    
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App