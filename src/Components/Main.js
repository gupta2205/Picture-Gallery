import React, {Component} from 'react'
import PhotoWall from './PhotoWall'
import Title from './Title'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {removePost} from '../redux/actions'

class Main extends Component {
    constructor(){
        super();
    }
    
    render(){
        return (
            <div> 
                <Route exact path="/" render = {() => (
                    <div>
                        <Title/>
                        <PhotoWall {...this.props}/> 
                    </div>   
                )}/>
                {/* <Route path="/AddPhoto" render = {({history}) => (
                    <div>
                        <AddPhoto  onAddPhoto = {(newPost) => {
                            //console.log(newPost)
                            this.addPhoto(newPost)
                            history.push('/')
                        }}/>
                    </div>
                )}/> */}
            </div>
        )   
    }
        
}

export default Main