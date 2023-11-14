import React, { Component } from 'react';
import axios from 'axios';
import '../Read/read.css';
class Read extends Component {
  state = {
    mangaDetails: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    // Retrieve manga ID from the route params
    const mangaId = this.props.match.params.id;

    // Fetch manga details using the manga ID
    axios.get(`https://api.jikan.moe/v4/manga/${mangaId}`)
      .then((response) => {
        this.setState({
          mangaDetails: response.data.data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          loading: false,
        });
      });
  }

  render() {
    const { mangaDetails, loading, error } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    const bannerStyle = {
      backgroundImage: `url(${mangaDetails.images.jpg.image_url})`,
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            {/* Blurred banner area at the top */}
            <div className="banner" style={bannerStyle} />
            {/* Single card containing clear image */}
            <div className="card">
              <img
                src={mangaDetails.images.jpg.image_url}
                alt={mangaDetails.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{mangaDetails.title}</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card card-synopsis">
              <div className="card-body">
                <h5 className="card-title">Synopsis</h5>
                <p className="card-text">{mangaDetails.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      // <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
      //   <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
      //       <img
      //       src={mangaDetails.images.jpg.image_url}
      //       alt={mangaDetails.title}
      //       style={{ height: `180px` }}
      //     />
      //       <div className="e-card e-card-horizontal">
      //           <div className="e-card-header">
      //               <div className="e-card-header-caption">
      //                   <div className="e-card-header-title">{mangaDetails.title}</div>
      //               </div>
      //           </div>
      //           <div className="e-card-content">
      //           {mangaDetails.synopsis}
      //           </div>
      //       </div>
      //   </div>
      //   </div>
      /* </div>
      <div className="read-container">
        //  Single card containing clear image 
        <div className="card">
          <img
            src={mangaDetails.images.jpg.image_url}
            alt={mangaDetails.title}
            className="card-image"
          />
          <div className="read-content">
            <h2 className="read-title">{mangaDetails.title}</h2>
          </div>
        </div>
         Card containing synopsis 
        <div className="card">
          <div className="read-content">
            <h2>Synopsis</h2>
            <p className="read-synopsis">{mangaDetails.synopsis}</p>
             Add more details based on the mangaDetails object 
          </div>
        </div>
      </div> */
    );
  }
}

export default Read;
