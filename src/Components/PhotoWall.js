import React from 'react'
import Photo from './Photo'
import {Link} from 'react-router-dom'

function PhotoWall(props) {
    return (
        <div>
            <Link className="addIcon" to="/AddPhoto"></Link>
            <div className="photoGrid">
                {props.posts
                .sort(function(a,b) {
                    return b.id - a.id
                })
                .map((post) => 
                    <Photo key= {post.id} post={post} onRemovePhoto = {props.onRemovePhoto}/>
                )}
            </div>
        </div>
    )
    
}

export default PhotoWall