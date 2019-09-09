import React from 'react';
import { Image } from '../models/image';
import { RootState } from '../store/reducers/root-reducer';
import { connect } from 'react-redux';

interface Props{
    image: Image | any;
}

interface State{

}

class ImageDetail extends React.Component<Props,State> {
    render() {
        const {image} = this.props;
        return(
            <div>
                {
                    image!=undefined?
                    <div className="my-5 container" style={{color:'white'}}>
                        <img src={image.imgUrl} style={{width:"100%"}}></img>
                        <div className="row px-3">
                            <div className="my-3 col-5 px-4 py-3" style={{backgroundColor:'white',color:'black', opacity:0.8}}>
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
                                        <h5>0</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-7 my-3'>
                                <p>comment section</p>
                            </div>
                        </div>
                    </div>
                    : 'empty'
                }
            </div>
        )
    }
}

function mapStateToProps(state: RootState, props: any){
    const id = Number(props.match.params.id);
    const images = state.images;
    let image;
    if( images!= undefined ){
        if( images.length > 0) {
            image = images[id-1];
        }
    }
    return{
        image: image
    }
}

export default connect(mapStateToProps,null)(ImageDetail)