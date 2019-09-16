import React, { Dispatch } from 'react';
import { Action } from 'redux';
import { User } from '../models/user';
import { updateUser } from '../store/actions/user-actions';
import { RootState } from '../store/reducers/root-reducer';
import { connect } from 'react-redux';
import { History } from 'history';

interface Props{
    users: User[],
    user: User | any,
    updateUser: Function,
    history: History,
    id: number
}

interface State{
    errors: boolean,
    name: string,
    email: string,
    picture: string,
    website: string,
    title: string,
    about: string
}

class EditProfile extends React.Component<Props,State>{
    
    constructor(props:Props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            picture: '',
            website: '',
            title: '',
            about: '',
            errors: false
        }
    }

    goback = () => {
        this.props.history.goBack();
    }

    handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({name:event.target.value})
    }

    handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({title:event.target.value})
    }

    handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({picture:event.target.value})
    }

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({email:event.target.value})
    }

    handleWebsiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({website:event.target.value})
    }

    handleAboutChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({about:event.target.value})
    }

    isFormEmpty = () => {
        return !this.state.name.length || !this.state.title.length || !this.state.picture.length ||
            !this.state.email.length || !this.state.website.length || !this.state.about.length;
    }

    handleSubmit = (event: { preventDefault: () => void;}) => {
        event.preventDefault();
        if(!this.isFormEmpty()){
            var user : User = {
                id: this.props.id,
                name: this.state.name,
                email: this.state.email,
                picture: this.state.picture,
                website: this.state.website,
                title: this.state.title,
                about: this.state.about
            }
            this.props.updateUser(user);
            this.setState({errors:false});
            this.props.history.goBack();
        }
        else {
            this.setState({errors:true})
        }
    }
    
    render(){

        const {user} = this.props;
        const {name,email,picture,website,title,about} = this.state;
        
        return(
            <div className="container" style={{opacity:0.8}}>
                <div className="card py-3 px-5 my-5 text-center">
                    <h1 className='mb-4 mt-3'>Edit profile</h1>
                    {this.state.errors===true && (
                        <h3 className="mb-4" style={{color:"red", border:"1px solid red", padding:"5px 5px 10px 10px", textAlign:"center"}}>Error! Fill all fields!</h3>
                    )}
                    {user!==undefined?
                    <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group ">
                            <label>Name: </label>
                            <input type="text" name="name" value={name}  placeholder={user.name} onChange={this.handleNameChange} className="form-control my-2" ></input>
                        </div>
                        <div className="form-group ">
                            <label>Title: </label>
                            <input type="text" name="title" value={title}  placeholder={user.title} onChange={this.handleTitleChange} className="form-control my-2" ></input>
                        </div>
                        <div className="form-group mt-4">
                            <label >Picture url: </label>
                            <input type="text" name="picture" value={picture}  placeholder={user.picture} onChange={this.handlePictureChange} className="form-control my-2"></input>
                        </div>
                        <div className="form-group ">
                            <label>Email: </label>
                            <input type="text" name="email" value={email}  placeholder={user.email} onChange={this.handleEmailChange} className="form-control my-2"></input>
                        </div>
                        <div className="form-group ">
                            <label>Webiste: </label>
                            <input type="text" name="webiste" value={website}  placeholder={user.website} onChange={this.handleWebsiteChange} className="form-control my-2" ></input>
                        </div>
                        <div className="form-group ">
                            <label>About you: </label>
                            <textarea name="about" value={about}  placeholder={user.about} className="form-control my-2"  onChange={this.handleAboutChange}></textarea>
                        </div>
                        <div className="text-center mt-5 mb-3" >
                            <button type="submit" value="Submit" className="btn btn-success mt-3" style={{width:"150px",height:"50px"}}>SUBMIT</button>
                            <button className="btn btn-danger mt-3 ml-4" style={{width:"150px",height:"50px"}} onClick={this.goback}>CANCEL</button>
                        </div>
                    </form>
                </div>
                :''}
            </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch: Dispatch<Action>){
    return {
        updateUser:(user: User) => dispatch(updateUser(user))
    }
}

function mapStateToProps(state: RootState){
    const users = state.users;
    let user;
    let id : any;
    if( users!==undefined ){
        if( users.length > 0) {
            user = users[0];
            id = users[0].id;
        }
    }
    console.log(user,id);
    return{
       user:user,
       id: id
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditProfile);