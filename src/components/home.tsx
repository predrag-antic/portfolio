import React from 'react';
import { Button, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            <div>
                <div className="text-center" style={{color:"white", marginTop:"200px", padding:"0 200px"}}>
                    <h1 className="mb-4">Hi, welcome to my portfolio!</h1>
                    <h6>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Eaque nobis optio assumenda eos, corrupti, ducimus neque voluptatum debitis nisi ea nulla voluptates. 
                         Quisquam et consequuntur voluptas at optio eveniet quas.
                    </h6>
                </div>
            </div>
        )
    }
}

export default Home