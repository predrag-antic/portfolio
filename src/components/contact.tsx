import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <div className="container" style={{color:'white'}}>
                <div style={{backgroundColor:'white',color:'black', opacity:0.8}} className="my-5 py-3">
                        <h3 className="text-center my-4">Contact us</h3>
                        <p className="text-center w-75 m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum purus at sem ornare sodales. Morbi leo nulla, pharetra vel felis nec, ullamcorper condimentum quam.</p>
                        <div className="row">
                            <div className="col-4 my-5">
                            <div className="card border-0">
                                <div className="card-body text-center">
                                    <img src={require(`../assets/phone.png`)} style={{width:'60px'}}></img>
                                    <h4 className="text-uppercase my-3">phone</h4>
                                    <p>+8801683615582</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-4 my-5">
                            <div className="card border-0">
                                <div className="card-body text-center">
                                    <img src={require(`../assets/location.png`)} style={{width:'60px'}}></img>
                                    <h4 className="text-uppercase my-3">loaction</h4>
                                <address>Aleksandra Medvedeva 14, 2nd floor</address>
                                </div>
                                </div>
                            </div>
                            
                            <div className="col-4 my-5">
                            <div className="card border-0">
                                <div className="card-body text-center">
                                    <img src={require(`../assets/email.png`)} style={{width:'60px'}}></img>
                                    <h4 className="text-uppercase my-3">email</h4>
                                    <p>pedja@gmail.com</p>
                                </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Contact