import React, { Component, Fragment, View,} from 'react';

import axios from 'axios';


class Examplemovie extends Component {
    state = {searchAnime: '', lists: []};
    handleSearch = e => {
        if(e.key === "Enter"){
            //API, data, header
            var header  = {
                "Access-Control-Allow-Origin": "*"
            }
            axios.get("https://api.consumet.org/movies/viewasian/"+this.state.searchAnime,header)
            .then(response =>{
                this.setState({
                    lists: response.data.results
                })
            })
        }
    }
    handleChangeInput = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        //?:
        


        const getInfo = (about) => {
        var answer = "";
        //const Tempstate = {Templists: []};
        var Tempheader  = {
            "Access-Control-Allow-Origin": "*"
        }
        axios.get("https://api.consumet.org/movies/viewasian/info?id="+about,Tempheader)
            .then(response =>{
                answer = response.data.description
                alert(answer);
            })
        
        // const { Templists } = this.Tempstate;
         //alert(answer);
        };
        

        // Using the example query "tv/watch-vincenzo-67955", and looking at the 2nd page of results.
        const url = "https://api.consumet.org/movies/viewasian/info?id=drama/vincenzo";
        const data = async () => {
            try {
                const { data } = await axios.get(url);
                return data;
            } catch (err) {
                throw new Error(err.message);
            }
        };
         
       
        const { lists } = this.state;
        
        const measure = Math.round(lists.length / 3);
        const secondList = lists.slice(0,measure);
        const thirdList = lists.slice(measure, measure * 2);
        const fourthList = lists.slice(measure * 2);
        var movieLists = secondList.length !== 0 ? secondList.map((data, index) => {
            return (
                
                <Fragment>

<div class="album py-2 bg-light"  style = {{display:"flex",  flexDirection:"row"}}>    
              
<div class="container">

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-1">

  <div class="col" style = {{flexDirection:'row'}}>
    <div class="card shadow-sm">
    
    <img class="card-img-top" src={data.image} alt="Card image" />
    <div class="card-body" style = {{flexDirection:'row'}}>
      
        <p class="card-text">{data.title}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => {getInfo(data.id)}}>Play Trailer</button>
            <button type="button" class="btn btn-sm btn-primary">Watch</button>
          </div>
          
        </div>
      </div>
      </div>
      
    </div>
          
  
</div>
</div>

</div>

                </Fragment>
            )
        }) : "Movie Not Found!";

        var movieLists2 = thirdList.length !== 0 ? thirdList.map((data, index) => {
            return (
                <Fragment>

<div class="album py-2 bg-light"  style = {{display:"flex",  flexDirection:"row"}}>    
              
<div class="container">

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-1">

  <div class="col" style = {{flexDirection:'row'}}>
    <div class="card shadow-sm">
    
    <img class="card-img-top" src={data.image} alt="Card image" />
    <div class="card-body" style = {{flexDirection:'row'}}>
      
        <p class="card-text">{data.title}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => {getInfo(data.id)}}>Play Trailer</button>
            <button type="button" class="btn btn-sm btn-primary">Watch</button>
          </div>
          
        </div>
      </div>
      </div>
      
    </div>
          
  
</div>
</div>

</div>

                </Fragment>
            )
        }) : "Movie Not Found!";
 
     var movieLists3 = fourthList.length !== 0 ? fourthList.map((data, index) => {
            return (
                <Fragment>

<div class="album py-2 bg-light"  style = {{display:"flex",  flexDirection:"row"}}>    
              
<div class="container">

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-1">

  <div class="col" style = {{flexDirection:'row'}}>
    <div class="card shadow-sm">
    
    <img class="card-img-top" src={data.image} alt="Card image" />
    <div class="card-body" style = {{flexDirection:'row'}}>
      
        <p class="card-text">{data.title}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => {getInfo(data.id)}}>Play Trailer</button>
            <button type="button" class="btn btn-sm btn-primary">Watch</button>
          </div>
          
        </div>
      </div>
      </div>
      
    </div>
          
  
</div>
</div>

</div>

                </Fragment>
            )
        }) : "Movie Not Found!";    
        return (
            <Fragment>
                <div className="row">
                    <div className='col-12'>
                        <div class="form-group">
                            <input name="searchAnime" value={this.state.searchAnime} onKeyDown={this.handleSearch} 
                            onChange={this.handleChangeInput} type="email" class="form-control" 
                            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search"/>
                        </div>
                    </div>
                </div>
               
               <div class = "row">
               <div class="col">
               {movieLists}
               </div>
               <div class="col">
               {movieLists2}
               </div>
               <div class="col">
               {movieLists3}
               </div>
               </div>
            </Fragment>
        );
    }
}

export default Examplemovie;