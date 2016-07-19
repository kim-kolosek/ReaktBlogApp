import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostNew extends Component{
  render(){
    return(
      <form>
        <h3>Create a new post</h3>

        <div className="from-group">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>

        <div className="from-group">
          <label>Categories</label>
          <input type="text" className="form-control" />
        </div>

        <div className="from-group">
          <label>Content</label>
          <textarea className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    );
  }
}

export default reduxForm({
  form : 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})( PostNew );
