import React from 'react'
import {Link} from 'react-router-dom'
//import {connect} from 'react-redux'

function Photo(props){
    return <figure className="figure"> 
    <Link to={`/single/${props.post.id}`}><img className="photo" src={props.post.imageLink} alt={props.post.description}></img></Link>
    <figcaption className=""><p>{props.post.description}</p></figcaption>
    <div className="button-container">
    <button className="remove-button" onClick= {() => {
        props.removePost(props.index)
        props.history.push("/")
        }}>Remove</button>
    </div> 
</figure>    
}

export default Photo 

//to directly access state in store you can inject 
//in any component using connect then ou can have this.props in photo component

// function mapStateToProps(state){
//     return {
//         posts: state
//     }
// }

// const App = connect(mapStateToProps)(Photo)

