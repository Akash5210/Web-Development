import React from 'react';
import PropTypes from 'prop-types'

function Photo(props){
    const post = props.post;
    return <figure className="figure">
                <img className="photo" src={post.imageLink} alt={post.description} />
                <p className="description">{post.description}</p>
                <div className="remove-image">
                    <button type="button" onClick = {() => {
                        props.onRemovePhoto(post)
                    }}>Remove</button>
                </div>
            </figure>
};

//It is use to remove the headache and pain of debugging in props
//checking the type of props if they are object and function types
Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}


export default Photo