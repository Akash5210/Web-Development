import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import AddPhoto from './AddPhoto'
import {Link} from 'react-router-dom'           //Link is property of react-router-dom

//PhotoWall is a child component and it will be a container function component
function Photowall(props){
    return (
        <div>
            <Link to="/AddPhoto" className="add-icon">+</Link>
            <div className="photo-grid">
                {props.posts
                .sort((a,b) => b.id - a.id)
                .map((post, index) => <Photo key={index} post = {post}  onRemovePhoto = {props.onRemovePhoto} />)}
            </div>
        </div>
    );
}

//checking the type of props if they are array and function types
Photowall.propTypes = {             //If they are not of the given type then it will throw an error for the required props
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}




export default Photowall