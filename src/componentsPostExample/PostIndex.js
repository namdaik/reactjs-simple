import React, { Component } from 'react';
import NewPost from './NewPost';
import PostList from './PostList';

export default class PostIndex extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <NewPost />
          </div>
          <div className="col-md-6">
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}