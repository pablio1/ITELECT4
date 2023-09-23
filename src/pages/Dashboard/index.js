import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <title>DASHBOARD PAGE</title>
                    <center><h1>DASHBOARD PAGE</h1></center> 
                    <center><a href='/Login' target='blank'><button className="btn btn-secondary"><h1 className='address'>LOG IN PAGE</h1></button></a> </center> 

                <div>
            <center><h1>HEADER</h1></center>  
            <div className='main'>
                    <div className='left'><h1>left</h1></div> 
                    <div className='right'><h1>RIGHT</h1></div> 
                    <div className='middle'><h1>middle</h1></div>
            </div>
            <center><div className='bottom'><h1>bottom</h1></div></center>   
            
        </div>
            </div>
        );
    }
}

export default Dashboard;