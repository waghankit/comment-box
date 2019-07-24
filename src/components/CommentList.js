import React from 'react';
import faker from 'faker';
import './style.css'

class CommentList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            like: false,
            dislike: false
        };
      }

      handleLikeButton=(e)=> {
        e.preventDefault();

        this.setState(prevState =>({
          like: !prevState.like,
          dislike: prevState.dislike
        }));
      }

      
      handleDisLikeButton=(e)=> {
        e.preventDefault();

        this.setState(prevState =>({
          dislike: !prevState.dislike,
          like: prevState.like
        }));
      }

    
    render(){
        const { comments } = this.props;

        return(
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">Comments</h3>
            {
              comments.map(item => {
              return (
                
                <div className="container comment-list" key={item.id}>
                    <div className="col-md-8">
                        <div className="image">  
                            <img  alt="avatar" className="user-image" src={faker.image.avatar()}/>
                        </div>
                        <div className="content">
                            <div className="full-name">
                                <h2>{item.firstName} {item.lastName}</h2>
                            </div>
                            <div className="user-comment">
                                <h4>{item.comment}</h4>
                            </div>
                            <span className="date">{this.state.date.toLocaleTimeString()}</span>
                        </div>
                        <div className="buttons">
                            <button 
                               id="button1" 
                               onClick={this.handleLikeButton} 
                               className={this.state.like ? "btn btn-success" : "btn btn-primary"}
                            >
                                LIKE
                            </button>

                            <button 
                                id="button2" 
                                onClick={this.handleDisLikeButton} 
                                className={this.state.dislike ? "btn btn-danger" : "btn btn-primary"}
                            >
                                DISLIKE
                            </button>
                        </div>
                    </div>
                </div>
                )
             })
            }
                </ul>
        );
    }
}

export default CommentList;