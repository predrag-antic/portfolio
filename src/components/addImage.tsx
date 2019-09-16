import React, { Dispatch } from 'react';
import { Image } from '../models/image';
import { Action } from 'redux';
import { addImage } from '../store/actions/images-actions';
import { RootState } from '../store/reducers/root-reducer';
import { connect } from 'react-redux';
import { History } from 'history';

interface Props {
    addImage: Function,
    image: Image,
    lastId: number,
    history: History
}

interface State {
    imgUrl: string,
    type: string,
    info: string,
    likes: number,
    errors: boolean
}

class AddImage extends React.Component<Props,State> {

    constructor(props:Props) {
        super(props);
        this.state = {
            imgUrl: '',
            type: 'Illustration',
            info: '',
            likes: 0,
            errors: false
        }
    }

    goback = () => {
        this.props.history.goBack();
    }

    handleInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({info:event.target.value})
    }

    handleImgUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({imgUrl:event.target.value})
    }

    handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({type: event.target.value})
    }

    isFormEmpty = () => {
        return !this.state.imgUrl.length || 
               !this.state.type.length || !this.state.info.length;
    }

    handleSubmit = (event: { preventDefault: () => void;}) => {
        event.preventDefault();
        if(!this.isFormEmpty()){
            var image : Image = {
                id: this.props.lastId+1,
                imgUrl: this.state.imgUrl,
                type: this.state.type,
                info: this.state.info,
                likes: this.state.likes
            }
            this.props.addImage(image);
            this.setState({errors:false});
            this.props.history.goBack();
        }
        else {
            this.setState({errors:true})
        }
    }

    render(){

        const {imgUrl,type,info} = this.state;

        return(
           <div className="container" style={{opacity:0.8}}>
                <div className="card py-3 px-5 my-5 text-center">
                    <h1 className='mb-4 mt-3'>Add image</h1>
                    {this.state.errors===true && (
                        <h3 className="mb-4" style={{color:"red", border:"1px solid red", padding:"5px 5px 10px 10px", textAlign:"center"}}>Error! Fill all fields!</h3>
                    )}
                    <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group ">
                            <label>TITLE: </label>
                            <input type="text" name="info" value={info} className="form-control my-2" placeholder="Please enter image title" onChange={this.handleInfoChange}></input>
                        </div>
                        <div className="form-group mt-4">
                            <label >PICTURE URL: </label>
                            <input type="text" name="imgUrl" value={imgUrl} className="form-control my-2" placeholder="Please enter image url" onChange={this.handleImgUrlChange}></input>
                        </div>
                        <div className="form-group mt-4">
                            <label >TYPE OF IMAGE: </label>
                            <select className="form-control my-2" name="type" value={type} onChange={this.handleTypeChange}>
                                <option value="Illustration">Illustration</option>
                                <option value="Photography">Photography</option>
                                <option value="Logo Design">Logo Design</option>
                                <option value="UI/UX">UI/UX</option>
                            </select>
                        </div>
                        <div className="text-center mt-5 mb-3" >
                            <button type="submit" value="Submit" className="btn btn-success mt-3" style={{width:"150px",height:"50px"}}>SUBMIT</button>
                            <button className="btn btn-danger mt-3 ml-4" style={{width:"150px",height:"50px"}} onClick={this.goback}>CANCEL</button>
                        </div>
                    </form>
                    </div>
                </div>
           </div> 
        )


    }
}

function mapDispatchToProps(dispatch: Dispatch<Action>){
    return {
        addImage:(image: Image) => dispatch(addImage(image))
    }
}

function mapStateToProps(state: RootState) {
    return {
        lastId: state.images.length
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddImage)