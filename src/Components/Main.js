import React, {Component} from 'react'
import PhotoWall from './PhotoWall'
import Title from './Title'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'


const posts = [{
    id: "0",
    description: "beautiful landscape",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    "3919321_1443393332_n.jpg"
    }, {
    id: "1",
    description: "Maldives",
    imageLink: "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__480.jpg" 
    }, {
    id: "2",
    description: "On a vacation!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]
   

class Main extends Component {
    constructor(){
        super();
        this.state = {
            posts: posts
        };
        this.removePosts = this.removePosts.bind(this)
        this.addPhoto = this.addPhoto.bind(this)
    }
       
    removePosts(postRemoved) {
       //setstate will invlve a function which returs a filters state object
       this.setState(() => ({    
        posts: this.state.posts.filter(post => (post !== postRemoved))
       })
       )
    }

    addPhoto(newPost) {
        this.setState(state => ({
            posts: state.posts.concat(newPost)
        })
        )
    }

    render(){
        return (
            <div> 
                <Route exact path="/" render = {() => (
                    <div>
                        <Title/>
                        <PhotoWall posts ={this.state.posts} onRemovePhoto={this.removePosts}/> 
                    </div>   
                )}/>
                <Route path="/AddPhoto" render = {({history}) => (
                    <div>
                        <AddPhoto  onAddPhoto = {(newPost) => {
                            //console.log(newPost)
                            this.addPhoto(newPost)
                            history.push('/')
                        }}/>
                    </div>
                )}/>
            </div>
        )   
    }
        
}

export default Main