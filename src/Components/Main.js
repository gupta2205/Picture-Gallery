import React, {Component} from 'react'
import PhotoWall from './PhotoWall'
import Title from './Title'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {removePost} from '../redux/actions'

class Main extends Component {
    constructor(){
        super();
        // this.state = {
        //     posts: posts
        // };
        // this.removePosts = this.removePosts.bind(this)
        // this.addPhoto = this.addPhoto.bind(this)
    }
       
    // removePosts(postRemoved) {
    //    //setstate will invlve a function which returs a filters state object
    //    this.setState(() => ({    
    //     posts: this.state.posts.filter(post => (post !== postRemoved))
    //    })
    //    )
    // }

    // addPhoto(newPost) {
    //     this.setState(state => ({
    //         posts: state.posts.concat(newPost)
    //     })
    //     )
    // }

    componentDidMount(){
        // this.props.dispatch(removePost(1))
        this.props.removePost(1)    
    }

    render(){
        console.log(this.props)
        return (
            <div> 
                <Route exact path="/" render = {() => (
                    <div>
                        <Title/>
                        <PhotoWall posts ={this.props.posts} onRemovePhoto={this.removePosts}/> 
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