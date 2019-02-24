import React, {Component} from 'react'

class Photo extends Component {
    render () {
        return <div>
            <figure className="figure"> 
            <img src={this.props.post.imageLink}></img>
            </figure>
        </div>
    }
}

export default Photo