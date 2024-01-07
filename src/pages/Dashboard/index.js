import React, { Component } from 'react';

const movieData = [
  {
    title: "JOHN WICK",
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS33DWHodvlDR_SOCQyYyqrb9Td8hvufc3zYCnnAD4PkBX4W7dF",
    genre: "Action, Neo-noir, Thriller, Crime film",
    overview: "With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin."
  },
  {
    title: "EXTRACTION",
    imageUrl: "https://www.themoviedb.org/t/p/original/hXmIGAWRqHstKNOyfb85oh2zb0Q.jpg",
    genre: "Action, Drama, Thriller, Adventure, Crime Fiction.",
    overview: "Back from the brink of death, commando Tyler Rake embarks on a dangerous mission to save a ruthless gangster's imprisoned family."
  },
  {
    title: "6 UNDERGROUND",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    genre: "Action, Documentary, Comedy, Vigilante, Mystery.",
    overview: "Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future."
  },
  {
    title: "KATE",
    imageUrl: "https://images.static-bluray.com/products/20/107959_1_large.jpg",
    genre: "Action, Thriller.",
    overview: "Slipped a fatal poison on her final job, a ruthless Tokyo assassin has less than 24 hours to find out who ordered the hit and exact revenge."
  },
  {
    title: "LAST BLOOD",
    imageUrl: "https://www.themoviedb.org/t/p/original/eAuvHuOpvzoTf01eGzBy8Z9pzgt.jpg",
    genre: "Action, Suspense, Drama, Western, Thriller, Crime Fiction.",
    overview: "Vietnam War veteran John Rambo tries to find some semblance of peace by raising horses on a ranch in Arizona. He's also developed a special familial bond with a woman named Maria and her teenage granddaughter Gabriela. But when a vicious Mexican cartel kidnaps Gabriela, Rambo crosses the border on a bloody and personal quest to rescue her and punish those responsible."
  },
  {
    title: "MAD MAX",
    imageUrl: "https://vice-press.com/cdn/shop/files/mad-max-fury-road-poster-matt-ferguson.jpg?v=1689066490&width=1024",
    genre: "Action, Adventure, Comedy, Fantasy, Suspense, Drama, Apocalyptic fiction.",
    overview: "Years after the collapse of civilization, the tyrannical Immortan Joe enslaves apocalypse survivors inside the desert fortress the Citadel. When the warrior Imperator Furiosa (Charlize Theron) leads the despot's five wives in a daring escape, she forges an alliance with Max Rockatansky (Tom Hardy), a loner and former captive. Fortified in the massive, armored truck the War Rig, they try to outrun the ruthless warlord and his henchmen in a deadly high-speed chase through the Wasteland."
  },
  {
    title: "SICARIO",
    imageUrl: "https://myhotposters.com/cdn/shop/products/mL1869_1024x1024.jpg?v=1571445493",
    genre: "Action, Adventure, War, Suspense, Crime film, Thriller, Action Thriller, Mystery, Noir.",
    overview: "After rising through the ranks of her male-dominated profession, idealistic FBI agent Kate Macer (Emily Blunt) receives a top assignment. Recruited by mysterious government official Matt Graver (Josh Brolin), Kate joins a task force for the escalating war against drugs. Led by the intense and shadowy Alejandro (Benicio del Toro), the team travels back-and-forth across the U.S.-Mexican border, using one cartel boss (Bernardo Saracino) to flush out a bigger one (Julio Cesar Cedillo)."
  },
  {
    title: "ANGEL HAS FALLEN",
    imageUrl: "https://i.ebayimg.com/images/g/EdgAAOSw4DJdanQe/s-l1600.jpg",
    genre: "Action, Documentary, Suspense, Thriller, Action Thriller, Mystery, Crime Fiction.",
    overview: "Authorities take Secret Service agent Mike Banning into custody for the failed assassination attempt of U.S. President Allan Trumbull. After escaping from his captors, Banning must evade the FBI and his own agency to find the real threat to the president. Desperate to uncover the truth, he soon turns to unlikely allies to help clear his name and save the country from imminent danger."
  },
];
  
export default class Home extends Component {
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
    const filteredMovies = movieData.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div
        className="image"
        style={{
          backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_4_UXaIO5n7N77mMCcSD_dOFidTHfPo7jw&usqp=CAU")',
        }}
      >
        <div className="text-center" style={{ fontFamily: 'Arbutus, sans-serif' }}>
          <h1 style={{ color: 'white' }}>POPULAR MOVIES</h1>
          
        </div>
        
        <div className="container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={searchQuery}
                onChange={this.handleSearchChange}
              />
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <br></br>

        <hr></hr>

        <div className="container">
          <div className="row">
            {filteredMovies.map((movie, index) => (
              <div className="col-sm-3" key={index}>
                <a href="#your-details-page"> 
                  <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="img-thumbnail"
                  />
                </a>
                <div className="text-center mx-auto">
                  <h4 style={{ color: 'white' }}><b>{movie.title}</b></h4>
                </div>
                <p style={{ color: 'white' }}>
                  <b>Genre:</b> {movie.genre}
                </p>
                <p style={{ color: 'white' }}>
                  <b>Overview:</b> {movie.overview}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}