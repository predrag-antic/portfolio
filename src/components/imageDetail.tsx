import React, { Dispatch } from 'react';
import { Image } from '../models/image';
import { RootState } from '../store/reducers/root-reducer';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { deleteImage, updateImage } from '../store/actions/images-actions';
import { History } from 'history';
import { Comment } from '../models/comment';
import { addComment } from '../store/actions/comments-actions';
import ListOfComments from './listOfComments';

interface Props{
    image: Image | any;
    deleteImage: Function;
    lastId: number;
    id: number;
    history: History;
    updateImage: Function;
    addComment: Function;
    comments: Comment[]
    numOfCom: number
}

interface State{
    liked: boolean
    likes: number
    imageId: number
    email: string
    name: string
    text: string
    date: string
    errors: boolean
}

class ImageDetail extends React.Component<Props,State> {
    constructor(props: Props){
        super(props);
        this.state = {
            liked: false,
            likes: 0,
            imageId: 0,
            email: '',
            name:'',
            text:'',
            date:'',
            errors: false
        };
    }

    
    componentDidMount(){
        const liked = localStorage.getItem(JSON.stringify(this.props.id)) === 'true';
        this.setState({liked: liked});
    }

    goback = () => {
        this.props.history.goBack();
    }

    onClickDelete = (e:Image) => {
        if(window.confirm('Are you sure you wish to delete this image?')){
            this.props.deleteImage(e.id);
            this.props.history.goBack();
        }
    }

    likeImage = (e:Image) => {
        if(!this.state.liked){
            let like = e.likes += 1;
            this.setState({likes:like,liked: true})
        }
        else {
            let like = e.likes -= 1;
            this.setState({likes:like,liked: false})
        }
        localStorage.setItem(JSON.stringify(e.id),JSON.stringify(!this.state.liked));
        this.props.updateImage(e);
    }

    isFormEmpty = () => {
        return !this.state.email.length || 
               !this.state.name.length || !this.state.text.length;
    }

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({email:event.target.value})
    }

    handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({name:event.target.value})
    }

    handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({text:event.target.value})
    }

    handleSubmit = (event: { preventDefault: () => void;}) => {
        event.preventDefault();
        if(!this.isFormEmpty()){
            var comment : Comment = {
                id: this.props.lastId+1,
                imageId: this.props.id,
                email: this.state.email,
                name: this.state.name,
                text: this.state.text,
                date: new Date().toLocaleString()
            }
            this.props.addComment(comment);
            this.setState({errors:false});
            this.setState({
                email: '',
                name:'',
                text:''})
        }
        else {
            this.setState({errors:true})
        }
    }

    render() {
        const {email,name,text} = this.state;
        const {image,comments} = this.props;
        return(
            <div>
                {
                    image!==undefined?
                    <div className="my-5 container" style={{color:'white'}}>
                        <img src={image.imgUrl} style={{width:"100%"}} alt=''></img>
                        <button className="btn btn-outline-light" onClick={()=>this.onClickDelete(image)} style={{zIndex:1,position:'absolute'}}><img src={require(`../assets/trash-2-xxl.png`)} style={{width:'25px'}}></img></button>
                        <div className="row px-3 text-center">
                            <div className="my-4 col-12 px-4 py-3" style={{backgroundColor:'white',color:'black', opacity:0.8}}>
                                {
                                this.state.liked===false?
                                <button onClick={()=>this.likeImage(image)} className="btn btn-primary my-3" style={{borderRadius:'50%', width:"100px",height:'100px',opacity:1}}>
                                    <img src={require(`../assets/facebook-like-xxl.png`)} style={{width:'30px'}}></img>
                                </button>:
                                <button onClick={()=>this.likeImage(image)} className="btn btn-dark my-3" style={{borderRadius:'50%', width:"100px",height:'100px',opacity:1}}>
                                    <img src={require(`../assets/facebook-unlike-xxl.png`)} style={{width:'30px'}}></img>
                                </button>
                                }
                                <h3>{image.info}</h3>
                            </div>
                        </div>
                        <div className="row pl-3">
                            <div className="my-3 col-5 px-4 py-3" style={{backgroundColor:'white',height:'fit-content',color:'black', opacity:0.8}}>
                                <label>Title:</label>
                                <h4>{image.info}</h4>
                                <hr/>
                                <p>Type:</p>
                                <h5>{image.type}</h5>
                                <hr/>
                                <div className="row">
                                    <div className="col-6">
                                        <label>Likes:</label>
                                        <h5>{image.likes}</h5>
                                    </div>
                                    <div className="col-6">
                                        <label>Comments:</label>
                                        {this.props.numOfCom!==undefined?
                                        <h5>{this.props.numOfCom}</h5>
                                        :''
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='col-7 my-3'>
                                <div className="px-4 py-3" style={{backgroundColor:'white',color:'black', opacity:0.8}}>
                                    {this.state.errors===true && (
                                        <h3 style={{color:"red", border:"1px solid red", padding:"5px 5px 10px 10px", textAlign:"center"}}>Error! Fill all fields!</h3>
                                    )}
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label>Email: </label>
                                            <input type="email" name="email" value={email} className="form-control" onChange={this.handleEmailChange} placeholder="Please insert email"></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Name: </label>
                                            <input type="text" name="name" value={name} className="form-control" onChange={this.handleNameChange}  placeholder="Please insert your name"></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Comment: </label>
                                            <textarea className="form-control" name="text" value={text} onChange={this.handleTextChange} rows={3} ></textarea>     
                                        </div>
                                        <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <ListOfComments comments={comments}/>
                            
                        </div>
                    </div>
                    : 'empty'
                }
            </div>
        )
    }
}

function mapDispatchToProps(dispatch: Dispatch<Action>){
    return {
        deleteImage:(imageId: number) => dispatch(deleteImage(imageId)),
        updateImage:(changedPost: Image) => dispatch(updateImage(changedPost)),
        addComment:(comment: Comment) => dispatch(addComment(comment))
    }
}

function mapStateToProps(state: RootState, props: any){
    const id = Number(props.match.params.id);
    const images = state.images;
    const comments = state.comments;
    let numOfCom;
    let cm : any;
    if(comments!==undefined) {
        cm = comments.filter(comment => comment.imageId === id);
        numOfCom = cm.length;
    }

    let image;
    if( images!==undefined ){
        if( images.length > 0) {
            image = images[id-1];
        }
    }
    return{
        image: image,
        id: id,
        lastId: state.comments.length,
        comments: cm,
        numOfCom: numOfCom
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageDetail)