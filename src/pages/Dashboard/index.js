import React, { Component, Fragment } from 'react';
import axios from 'axios';
import image1 from './picturesmovie/movie.PNG';
import image2 from './picturesmovie/movie2.PNG';
import image3 from './picturesmovie/movie3.PNG';
const bodyStyle = {
    backgroundColor: '#aaffaa',
    // You can add more styles here if needed
  };
  
 
      
    
  

class Dashboard extends Component {
    state = { searchAnime: '', lists: [] };

    handleSearch = e => {
        if (e.key === 'Enter') {
            // API, data, header
            var header = {
                'Access-Control-Allow-Origin': '*'
            };
            axios.get("https://api.consumet.org/movies/viewasian/" + this.state.searchAnime, header)
                .then(response => {
                    this.setState({
                        lists: response.data.results
                    });
                });
        }
    };

    handleChangeInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { lists } = this.state;

        const movieLists = lists.length !== 0 ? lists.map((data, index) => (
            <div style={bodyStyle} key={index} className="col-4">
                <div className="card">
                    <img className="card-img-top" src={data.image} alt="Cardimagecap" />
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <div href="#" className="btn btn-primary" >Watch</div>
                    </div>
                </div>
            </div>
        )) : "";

        return (
            <Fragment>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center"> {/* Use d-flex and justify-content-center for centering */}
                        <div className="form-group">
                            <input
                                name="searchAnime"
                                value={this.state.searchAnime}
                                onKeyDown={this.handleSearch}
                                onChange={this.handleChangeInput}
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Search and press Enter"
                                style={{ width: '500px' }} // Set the desired width
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {movieLists}  
                </div>
                <div className="image-grid">
                    <div className="image-row">
                        <img src={image1} alt="Image1" className="grid-image" />
                        <img src={image2} alt="Image2" className="grid-image" />
                        <img src={image3} alt="Image3" className="grid-image" />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;
