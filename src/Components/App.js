// connect store to Main component 
// it's a container component - 
//it provide data to prentatational component which gets data through props

import Main from './Main'
import {connect} from 'react-redux'
function mapStateToProps(state){
    return {
        posts: state
    }
}

const App = connect(mapStateToProps)(Main)

export default App