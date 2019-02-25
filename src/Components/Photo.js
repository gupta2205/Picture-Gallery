import React from 'react'

function Photo(props){
    return <figure className="figure"> 
        <img className="photo" src={props.post.imageLink} alt={props.post.description}/>
        <figcaption><p>{props.post.description}</p></figcaption>
        <div className="button-container">
        <button className="remove-button" onClick = {() => {
            props.onRemovePhoto(props.post)
        }}>Remove</button>
        </div> 
    </figure>    
}

export default Photo 