import React, {Component} from 'react'
import PhotoWall from './PhotoWall'
import Title from './Title'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

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

    render(){
        console.log(this.props.posts)
        return (
            <div> 
                <Route exact path="/" render = {() => (
                    <div>
                        <Title/>
                        {/* <PhotoWall posts ={this.state.posts} onRemovePhoto={this.removePosts}/>  */}
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