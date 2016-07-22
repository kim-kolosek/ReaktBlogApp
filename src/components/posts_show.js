import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';

class PostsShow extends Component{

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick(){
    this.props.deletePost(this.props.params.id)
    .then(()=> {
      //blog post has been created, navigate the user to index page
      //by calling this.context.router.push with the new path to navigate to
      this.context.router.push("/")
     });
  }

  render(){
    if(!this.props.post){
      return <div>Loading...</div>
    }
    console.log(this.props.post);

    return(
      <div>
        <Link to="/" className="">Back to Index</Link>
        <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">
          Delete Post
        </button>
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

// function mapDispatchToProps(dispatch ){
//   return bindActionCreators({ fetchPost : fetchPost }, dispatch);
// }


export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
