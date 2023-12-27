import React, { Component, Fragment, View,} from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

class Examplemovie extends Component{
  state = {searchAnime: '', Chapter: [], Manga: []};

  /*  getManga = {
    method: 'GET',
    url: 'https://mangaverse-api.p.rapidapi.com/manga',
    params: {
      title: 'Fullmetal Alchemist'
    },
    headers: {
      'X-RapidAPI-Key': '148729e9c3mshefd0bed8597c91ep15bbcdjsnc774119cf556',
      'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
      }
  }  */
  handleSearch = e => {
    if(e.key === "Enter"){
        //API, data, header        
        axios.get("https://manga-scrapper.p.rapidapi.com/webtoons/" + this.state.searchAnime,{
               
                params:{
                  provider: 'asura'
                },
                headers: {
                  'X-RapidAPI-Key': '148729e9c3mshefd0bed8597c91ep15bbcdjsnc774119cf556',
                  'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
                }
        }      
        ).then(response =>{
          console.log(response.data)
       this.setState({
          Manga: response.data
       })
   }) 
   axios.get("https://manga-scrapper.p.rapidapi.com/chapters",{
               
      params:{
        provider: 'asura',
        webtoon: this.state.searchAnime,
        page: '1',
        limit: '20'
      },
      headers: {
        'X-RapidAPI-Key': '148729e9c3mshefd0bed8597c91ep15bbcdjsnc774119cf556',
        'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
      }
       }      
          ).then(response =>{
           console.log(response.data)
          this.setState({
          Chapter: response.data
          })
       })     
    }
}
handleChangeInput = e =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}
  //   const response = await axios.request(getManga);  
 //  this.setState({
  //   Manga: response.data.results
  // });
     //getChapter(this.state.ID);
   
   render () {

 /* const getChapter = {
    method: 'GET',
    url: 'https://mangaverse-api.p.rapidapi.com/manga/chapter',
    params: {
      id: this.state.ID
    },
    headers: {
      'X-RapidAPI-Key': '148729e9c3mshefd0bed8597c91ep15bbcdjsnc774119cf556',
      'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
      }
  };
   try{
     const response = await axios.request(getChapter);
    
     
     this.setState({
     Chapters: response?.data
     
     });
     
      } catch (error) {
      console.error('error',error);
   } */
    //var Lists = Manga.length !== 0 ? Manga.map((data, index) => {
    const {Manga} = this.state; 

   /* const getChapter = () =>{
      axios.get("https://manga-scrapper.p.rapidapi.com/chapters",{
               
      params:{
        provider: 'asura',
        webtoon: this.state.searchAnime,
        page: '1',
        limit: '20'
      },
      headers: {
        'X-RapidAPI-Key': '148729e9c3mshefd0bed8597c91ep15bbcdjsnc774119cf556',
        'X-RapidAPI-Host': 'manga-scrapper.p.rapidapi.com'
      }
       }      
          ).then(response =>{
           console.log(response.data)
          this.setState({
          Chapter: response.data
          })
       })   
    };     */
    
    
    const {Chapter} = this.state;
    var Lists = Chapter.length !== 0 ? Chapter.map((data, index) =>{
      return (
          
          <Fragment>

          <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
  
            <span class="fs-7">{data.slug}</span>
          </a>

          </Fragment>
      )
  }) : 'chapters';


    return(
       <fragment>
      <div class="album py-5 bg-light">

   
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
                
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Genre</a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown04">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Romance</a></li>
                    <li><a class="dropdown-item" href="#">Fantasy</a></li>
                    <li><a class="dropdown-item" href="#">Horror</a></li>
                    <li><a class="dropdown-item" href="#">Sci fi</a></li>
                  </ul>
                </li>
           </ul>
            
           <input name="searchAnime" value={this.state.searchAnime} onKeyDown={this.handleSearch} 
                            onChange={this.handleChangeInput} type="email" class="form-control" 
                            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search"/>
              <button class="btn btn-outline-primary" type="button" >Search</button>
            
          </div>
        </div>
      </nav>
      
              <div class = "row">
               <div class="col">
               <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
           <img class="card-img-top" src = {Manga.coverURL} alt="Card image"/>
            <div class="card-body">
             
              <div class="d-flex justify-content-between align-items-center">
                                   
              
                
              </div>
              
            </div>
          </div>
        </div>
        
        <div class="col">
        
           <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
  
             <span class="fs-2">{Manga.title}</span>

           </a>
           <small class="text-muted">updated: {Manga.updatedAt}</small>
           <br></br>
           
           <br></br>
           <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
  
             <span class="fs-7">{Manga.synopsis}</span>
           </a>
        </div>          
        
      </div>
    </div>
               
               </div>
               </div>
      
      </div>

      <header class="pb-3 mb-4 border-bottom">   </header>
      <div>
         {Lists}
      </div>
               </fragment> 
        
                 
              );   
    
}
}

export default Examplemovie;