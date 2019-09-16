import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/reducers/root-reducer';
import { User } from '../models/user';
import { Button, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

interface Props{
    user: User | any;
}

interface State{

}

class About extends React.Component<Props,State> {
    render() {

        const {user} = this.props;

        return(
            <div className="container" style={{opacity:0.8}}>
               {
                    user!==undefined?
                    <div className="card py-2 my-5 text-center">
                        <img src={user.picture} style={{borderRadius:'50%', width:'200px', alignSelf:'center'}} className="my-4" alt=''></img>
                        <NavLink tag={Link} to="/edit-profile" style={{position:'absolute',alignSelf:'flex-end'}}>
                            <button className="btn"><img src={require(`../assets/edit-xx.png`)} style={{width:'25px'}}></img></button>
                        </NavLink>
                        <h1 style={{fontSize:'50px'}}>{user.name}</h1>
                        <h5 style={{fontStyle:'italic'}}>{user.title}</h5>
                        <hr className="mx-5"/>
                        <label className="mt-3">ABOUT:</label>
                        <h5 style={{margin:'10px 250px'}} className="mb-4">{user.about}</h5>
                        <hr className="mx-5"/>
                        <div className="row text-center my-3">
                            <div className="col-6 pl-5">
                                <label>WEBSITE:</label>
                                <h5 className="mb-4">{user.website}</h5>
                            </div>
                            <div className="col-6 pr-5">
                                <label>EMAIL:</label>
                                <h5 className="mb-4">{user.email}</h5>
                            </div>
                        </div>
                    </div>
                    :
                    'none'
               }
            </div>
        )
    }
}

function mapStateToProps(state: RootState){
    const users = state.users;
    let user;
    if( users!==undefined ){
        if( users.length > 0) {
            user = users[0];
        }
    }
    return{
        user: user
    }
}

export default connect(mapStateToProps,null)(About)