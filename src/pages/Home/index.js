import React, { Component } from 'react';
import axios from 'axios';
import './home.css';


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

    handleSearchButton = () => {
        const searchTitle = this.state.title;
        const headers = {'Access-Control-Allow-Origin' : '*'}
        
        axios.get('https://api.consumet.org/light-novels/readlightnovels/'+searchTitle, headers)
        
        .catch((e) => {
            console.log(e);
            return {status: 401, message: 'Unauthorized'}
        })
        .then((response) => {
            this.setState({
                results: response.data.results
            })
        })
       
    }

    fetchLightNovels = () => {
        const headers = {'Access-Control-Allow-Origin' : '*'}
        
        axios.get('https://api.consumet.org/light-novels/readlightnovels/series'+headers)
        
        .catch((e) => {
            console.log(e);
            return {status: 401, message: 'Unauthorized'}
        })
        .then((response) => {
            this.setState({
                results: response.data.results
            })
        })
       
    }
    
    render() {
        return (
            <div>
              Welcome User ^^!
              <form class="d-flex" role="search">
        
        
      
              <div className='searchbar'>
                <input
                    class="form-control me-2"
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChangeInput}
                    aria-label="Search"
                    placeholder="Search"
                />
                <button class="btn btn-outline-success" type="submit" onClick={this.handleSearchButton}>Search</button>

                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {this.state.results && this.state.results.map((result, index) => (
                        <div key={index} class="card" style={{width: '18rem'}}>
                            <img class="card-img-top" src={result.image} alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">{result.title}</h5>
                                    <button class="btn btn-primary">Read</button>
                                </div>
                        </div>
          ))}
                    </div>
                </div>
                </form>
            </div>
          );
          
    }
    
    
}


export default Home;