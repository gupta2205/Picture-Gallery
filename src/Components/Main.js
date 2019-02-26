import React, {Component} from 'react'
import PhotoWall from './PhotoWall'
import Title from './Title'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {removePost} from '../redux/actions'
import {Link} from 'react-router-dom'
import Single from './Single'

class Main extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div> 

                <h1>
                    <Link to= "/"><Title/></Link>
                </h1>
                <Route exact path="/" render = {() => (
                    <div>
                        <PhotoWall {...this.props}/> 
                    </div>   
                )}/>
                <Route path="/AddPhoto" render = {({history}) => (
                    <div>
                        <AddPhoto {...this.props}/>
                        {/* <AddPhoto  onAddPhoto = {(newPost) => {
                            this.addPhoto(newPost)
                            history.push('/')
                        }}/> */}
                    </div>
                )}/>
                {/* in args it will have location, history and match object in call back within Route */}
                <Route path="/single/:id"  render ={(args) => 
                    <Single  {...this.props} {...args}/>

                }/>

            </div>
        )   
    }
        
}

export default Main