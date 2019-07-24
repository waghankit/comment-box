import React from 'react';
import CommentList from './CommentList';
import uuid from 'uuid';

class App extends React.Component{
  state={ comment:'', firstName:'', lastName:'', comments:[], id:uuid(), error:''}

  handleFirstNameChange = (event) =>{
    this.setState({ firstName : event.target.value })
};

handleLastNameChange = (event) =>{
 this.setState({ lastName : event.target.value })
};

handleCommentChange = (event) =>{
 this.setState({ comment : event.target.value })
};

  handleSubmit = (e) => {
      e.preventDefault();

      if (!this.isFormValid()) {
        this.setState({ error: "All fields are required." });
        return;
      }

      const newComment = {
          id: this.state.id,
          comment: this.state.comment,
          firstName: this.state.firstName,
          lastName: this.state.lastName
      };

      const addedCommments = [...this.state.comments, newComment];

      this.setState({
          comments: addedCommments,
          comment: '',
          firstName:'',
          lastName:'',
          id:uuid()

      });

  };

  isFormValid() {
    return this.state.firstName !== "" && this.state.lastName !== "" && this.state.comment !== "";
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }


    render(){
        return(
         <div className="container">
            <h1>Comment Box</h1>
            <form className="form-group">
              <input 
                type="text" 
                className="form-control" 
                value={this.state.firstName} 
                onChange={this.handleFirstNameChange} 
                placeholder="Enter first name"
              />

              <input 
                type="text" 
                className="form-control" 
                value={this.state.lastName} 
                onChange={this.handleLastNameChange}  
                placeholder="Enter last name"
              />

              <textarea 
                className="form-control" 
                value={this.state.comment} 
                onChange={this.handleCommentChange} 
                rows="3"
              >
              </textarea>

              <button 
                type="submit" 
                className="btn btn-primary" 
                onClick={this.handleSubmit}
              >
                Comment
              </button>
              {this.renderError()}
            </form>
            <CommentList comments={this.state.comments}/>
        </div>
        );
    }
}

export default App;