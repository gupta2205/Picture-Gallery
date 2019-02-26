import React from 'react'
import Photo from './Photo'
import {Link} from 'react-router-dom'

function PhotoWall(props) {
    return (
        <div>
            <Link className="addIcon" to="/AddPhoto"></Link>
            <div className="photoGrid">
                {props.posts
                .map((post,index) => 
                    <Photo key= {post.id} post={post} {...props} index = {post.id}/>
                )}
            </div>
        </div>
    )
    
}

export default PhotoWall