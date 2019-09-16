import React from 'react';
import { Image } from '../models/image';
import { Link } from 'react-router-dom';
import '../style/imageGrid.css';

interface Props{
    images: Image[]
}

interface State{

}

class ListOfImages extends React.Component<Props,State> {
    render() {

        

        return(
            <div className="mt-5 row" style={{color:'white'}}>
               {
                   this.props.images
                   .map((image:Image) => (
                        <div key={image.id} className="my-4 col-4 hovereffect" style={{maxHeight:"200px",overflow:'hidden'}}>
                            <img src={image.imgUrl} alt="" style={{width:"100%",overflow:'hidden'}} ></img>
                                <div className="overlay">
                                    <h2>{image.info}</h2>
                                    <Link to={`/image/${image.id}`} className="info">
                                        See image
                                    </Link>
                                </div>
                        </div>
                   ))
               }
            </div>
        )
    }
}



export default ListOfImages;