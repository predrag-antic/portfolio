import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux'
import { Comment } from '../models/comment'
import { addComment } from '../store/actions/comments-actions'
import { RootState } from '../store/reducers/root-reducer'

interface Props{
    comments: Comment[];
    addComment: Function;
}

interface State{
}


class CommentForm extends React.Component<Props,State>{
    
    render(){
        
        return(
            <div className=" px-4 py-3" style={{backgroundColor:'white',color:'black', opacity:0.8}}>
                <form>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email" className="form-control" placeholder="Please insert email"></input>
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" className="form-control"  placeholder="Please insert your name"></input>
                    </div>
                    <div className="form-group">
                        <label>Comment: </label>
                        <textarea className="form-control" rows={3} ></textarea>     
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch: Dispatch<Action>){
    return {
        addComment:(comment: Comment) => dispatch(addComment(comment))
    }
}

function mapStateToProps(state: RootState,props: any) {
    console.log(props.match.params)
    return {
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CommentForm);