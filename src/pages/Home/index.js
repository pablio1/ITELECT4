import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './home.css';
import Read from '../Read';

class Home extends Component {
    state = {title: '', results:[], image: null}
    componentDidMount(){
        this.fetchLightNovels();
    }
    handleChangeInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
        }
        
    handleImageChange = (e) => {
        this.setState({ image: e.target.files[0] });
        };    

    handleSearchButton = (e) => {
        if(e.key === "Enter"){
            // var header = {"Access-Control-Allow-Origin" : "*"}
            axios.get(`https://api.jikan.moe/v4/manga?q=${this.state.title}`)
            .then((response) => {
                this.setState({
                    results: response.data.data
                })
            })
            .catch((e) => {
                console.log(e);
                return {status: 401, message: 'Unauthorized'}
            })
        }
       
    }

    fetchLightNovels = () => {
        // const headers = {'Access-Control-Allow-Origin' : '*'}
        
        axios.get('https://api.jikan.moe/v4/manga')
        
        .catch((e) => {
            console.log(e);
            return {status: 401, message: 'Unauthorized'}
        })
        .then((response) => {
            this.setState({
                results: response.data.data
            })
            // console.log('API response:', response)
        })
       
    }
    
    render() {
        const { results } = this.state;
        // console.log('API response3:', results)
    const mangaLists = Array.isArray(results) && results.length !== 0 ? (
      results.map((data, index) => (
        <div key={index} className="col-md-3">
          <div className="card mb-3" style={{ height: '100%' }}>
            <img src={data.images.jpg.image_url} alt={data.title} className="card-img-top" style={{ objectFit: 'cover', height: '300px' }}/>
            <div className="card-body">
              <h5 className="card-title" title={data.title}>{data.title}</h5>
              <Link to={`/read/${data.mal_id}`} className="btn btn-primary">Read</Link>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="col-12">Manga not found!</div>
    );
    // console.log('API response2:', results)
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-2">
            <div className="form-group">
              <input
                type="text" 
                name="title"
                className="form-control"
                value={this.state.title}
                onKeyPress={this.handleSearchButton}
                onChange={this.handleChangeInput}
                aria-label="Search"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="row">{mangaLists}</div>
      </div>
          );
          
    }
    
    
}


export default Home;