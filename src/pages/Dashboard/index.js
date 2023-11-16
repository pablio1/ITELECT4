import React, { Component } from 'react';
import op8 from './../images/op8.jpg'
import op9 from './../images/op9.jpg'
import op10 from './../images/op10.jpg'
import op11 from './../images/op11.jpg'
import op12 from './../images/op12.jpg'
import op13 from './../images/op13.jpg'
import op14 from './../images/op14.jpg'
import op15 from './../images/op15.jpg'
import op16 from './../images/op16.jpg'
import op17 from './../images/op17.jpg'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  render() {
    const { searchQuery } = this.state;

    // Movie data array
    const movies = [
      { title: 'Episode of Chopper Plus: Bloom in Winter, Miracle Sakura', image: op8 },
      { title: 'One Piece Film: Strong World', image: op9 },
      // ... (other movies)
    ];

    // Filter movies based on search query
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="row">
        <div className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a movie..."
              aria-label="Search for a movie..."
              value={searchQuery}
              onChange={this.handleSearchChange}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Search
              </button>
            </div>
          </div>
        </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={op8} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Episode of Chopper Plus: Bloom in Winter, Miracle Sakura</h5></center> 
                            <div className="d-flex justify-content-center">
                             <a href="#" className="btn btn-primary me-2">Watch</a>
                             <a href="#" className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={op9} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">One Piece Film: Strong World</h5></center> 
                            <div className="d-flex justify-content-center">
                             <a href="#" className="btn btn-primary me-2">Watch</a>
                             <a href="#" className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={op10} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">One Piece 3D: Straw Hat Chase</h5></center> 
                            <div className="d-flex justify-content-center">
                             <a href="#" className="btn btn-primary me-2">Watch</a>
                             <a href="#" className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={op11} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Episode of Nami</h5></center> 
                            <div className="d-flex justify-content-center">
                             <a href="#" className="btn btn-primary me-2">Watch</a>
                             <a href="#" className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={op12} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">One Piece Film: Z</h5></center> 
                            <div className="d-flex justify-content-center">
                             <a href="#" className="btn btn-primary me-2">Watch</a>
                             <a href="#" className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={op13} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">Episode of Luffy</h5></center> 
                            <div className="d-flex justify-content-center">
                             <a href="#" className="btn btn-primary me-2">Watch</a>
                             <a href="#" className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={op14} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">3D2Y</h5></center> 
                            <div className="d-flex justify-content-center">
                             <a href="#" className="btn btn-primary me-2">Watch</a>
                             <a href="#" className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={op15} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">One Piece Film: Gold</h5></center> 
                            <div className="d-flex justify-content-center">
                             <a href="#" className="btn btn-primary me-2">Watch</a>
                             <a href="#" className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={op16} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">One Piece: Stampede</h5></center> 
                            <div className="d-flex justify-content-center">
                             <a href="#" className="btn btn-primary me-2">Watch</a>
                             <a href="#" className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={op17} alt="Card cap" />
                        <div className="card-body">
                            <center><h5 className="card-title">One Piece Film: Red</h5></center> 
                            <div className="d-flex justify-content-center">
                             <a href="#" className="btn btn-primary me-2">Watch</a>
                             <a href="#" className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;