import React from 'react';
import { Image } from '../models/image';
import { RootState } from '../store/reducers/root-reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style/imageGrid.css';
import { Comment } from '../models/comment';

interface Props{
    comments: Comment[]
}

interface State{

}

class ListOfComments extends React.Component<Props,State> {
    render() {

        return(
            <div className="mt-3 pr-3" style={{color:'white', width:'100%'}}>
               {
                   this.props.comments!==undefined?
                   this.props.comments
                   .map((comment:Comment) => (
                        <div key={comment.id} className="px-5 py-4"  style={{borderBottom:'1px solid grey',backgroundColor:'white',color:'black', opacity:0.8}}>
                            <div style={{display:'flex'}}><h5 className="mr-3">{comment.name}</h5><p className="mr-3">o</p><p>{comment.date}</p></div>
                            <p style={{fontSize:'18px', margin:'0px'}}>{comment.text}</p>
                        </div>
                   ))
                   :
                   'none'
               }
               {
                   this.props.comments.length === 0?
                   <div  className="px-4 py-3 text-center" style={{backgroundColor:'white',color:'black', opacity:0.8}}>
                        <h4>There are no comments for this image.</h4>
                    </div>
                    :
                    ''
               }
            </div>
        )
    }
}


export default ListOfComments;