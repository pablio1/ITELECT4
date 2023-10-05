import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            
                <div>
                  <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Dashboard</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
         
        </div>
        <h2>My Movies</h2>
        <p>Watch movies.</p>
        <button type="button" class="btn btn-lr btn-primary">Go</button>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          
        </div>
        <h2>My Profile</h2>
        <p>See your profile.</p>
        <button type="button" class="btn btn-lr btn-primary">Go</button>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          
        </div>
        <h2>Settings</h2>
        <p>Change settings.</p>
        <button type="button" class="btn btn-lr btn-primary">Go</button>
      </div>
    </div>
  </div>  
                </div>

           
        );
    }
}

export default Dashboard;