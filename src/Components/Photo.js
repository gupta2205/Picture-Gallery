import React from 'react'

function Photo(props){
    return <figure className="figure"> 
    <img class="photo" src={props.post.imageLink} alt={props.post.description}></img>
    <figcaption className=""><p>{props.post.description}</p></figcaption>
    <div className="button-container">
    <button className="remove-button">Remove</button>
    </div> 
</figure>    
}

export default Photo 