import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { bindActionCreators } from 'redux';

class PostNew extends Component{
  render(){

    const { fields: {title, categories, content}, handleSubmit} = this.props;


    return(
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new post</h3>

        <div className="from-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>

        <div className="from-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>

        <div className="from-group">
          <label>Content</label>
          <textarea className="form-control" {...content}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    );
  }
}

//connect: 1st arguement is mapStateToProps, 2nd mapDispatchToProps
//reduxForm 1st is form config, 2nd mapStateToProps, 3rd mapDispatchToProps

// function mapDispatchToProps(dispatch ){
//   return bindActionCreators({ createPost : createPost }, dispatch);
// }

export default reduxForm({
  form : 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, {createPost})( PostNew );
