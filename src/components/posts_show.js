import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { fetchPost } from '../actions/index';

class PostsShow extends Component{

  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }

  render(){
    if(!this.props.post){
      return <div>Loading...</div>
    }
    console.log(this.props.post);

    return(
      <div>
        <h3>{this.props.post.title}</h3>
        <h6>Categories: {this.props.post.categories}</h6>
        <p>
          {this.props.post.content}
        </p>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {post: state.posts.post }
}

function mapDispatchToProps(dispatch ){
  return bindActionCreators({ fetchPost : fetchPost }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
