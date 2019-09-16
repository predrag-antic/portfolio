import React from 'react';
import { Image } from '../models/image';
import { RootState } from '../store/reducers/root-reducer';
import { connect } from 'react-redux';
import ListOfImages from './listOfImages';
import { Link } from 'react-router-dom';

interface Props{
    images: Image[]
}

interface State{
    type: string
}

class Works extends React.Component<Props,State> {

    constructor(props: Props){
        super(props)
        this.state = {
            type: 'All'
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({type: event.target.value})
    }

    

    render() {

        const {images} = this.props;
        const filteredImages = this.state.type!==('All'||null)?
        images.filter(image=>image.type === this.state.type)
        :
        images;

        if(!images){
            return(
                <div className='text-center mt-5'>
                    <h3>There is no images currently.</h3>
                </div>
            )
        }
        return(
            <div className="container mt-5" style={{color:'white'}}>
                <div className="row">
                    <div className="col-5">
                    <select className="custom-select custom-select-md" style={{width:'300px'}} onChange={this.handleChange}>
                        <option value="All">All</option>
                        <option value="Illustration">Illustration</option>
                        <option value="Photography">Photography</option>
                        <option value="Logo Design">Logo Design</option>
                        <option value="UI/UX">UI/UX</option>
                    </select>
                    </div>
                    <div className="ml-auto mx-3">
                    <Link to="/add-image" className="info">
                        <div className="btn btn-outline-light" style={{width:'200px'}}>
                            NEW IMAGE
                        </div>
                    </Link>
                    </div>
                </div>
               <ListOfImages images={filteredImages===null?images:filteredImages}/>
            </div>
        )
    }
}

function mapStateToProps(state: RootState){
    return {
        images: state.images
    }
}

export default connect(mapStateToProps,null)(Works)