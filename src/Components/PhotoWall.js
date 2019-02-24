import React, {Component} from 'react'
import Photo from './Photo'

class PhotoWall extends Component {
    render() {
        return <div className="photoGrid">
            {this.props.posts.map((post,index) => 
                <Photo key= {index} post={post}/>
            )}

            
            </div>
    }
}

export default PhotoWall