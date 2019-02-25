import React, {Component} from 'react'
import Title from './Title'

class AddPhoto extends Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const newPost = { 
            id: 0,
            description: description,
            imageLink :imageLink
        }
        if(description && imageLink){
            this.props.onAddPhoto(newPost)
        }}
    
    render() {
        return (
            <div>
                <Title></Title>
                <div className="form">
                <form onSubmit={this.handleSubmit}> 
                    <input type ="text" placeholder="Link" name="link"/>
                    <input type ="text" placeholder="Desciption" name="description"/>
                    <button> Post </button>
                </form>
                </div>
            </div>
        )
    }
}


export default AddPhoto