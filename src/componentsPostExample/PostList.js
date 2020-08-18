import React from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';

function PostList({newPosts}) {
	console.log(newPosts);
    return (
        <div>
     {newPosts.map(post => {
       return (
         <Posts post={ post } key={ post.id } />
       );
     })}
   </div>
    );
}

function mapStateToProps(state) {
    return {
        newPosts: state.post
    };
};

export default connect(
    mapStateToProps,
    null,
)(PostList);