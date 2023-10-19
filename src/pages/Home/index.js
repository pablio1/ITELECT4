import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (

        <div style={{setbackground:'https://previews.123rf.com/images/krekdm/krekdm1607/krekdm160700083/59591882-seamless-cinema-pattern-can-be-used-for-wallpaper-website-background-wrapping-paper-cinema-vector.jpg'}}>
        <body>

          

          <div class="jumbotron text-center">
            <h1>Hollywood Movies</h1>
            <h3>Free Access Action Movies</h3>
          </div>

          <div class="container">
            <form action="/action_page.php">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search" name="search" />
                <div class="input-group-btn">
                  <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                </div>
              </div>
            </form>
          </div>
          <br></br>

          

          <hr></hr>


          <div class="container">
            <div class="row">
              <div class="col-sm-2">

                <h2>Movie 1</h2>
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS33DWHodvlDR_SOCQyYyqrb9Td8hvufc3zYCnnAD4PkBX4W7dF" class="img-thumbnail" alt="Cinque Terre" width="200" height="200" />
                <h4><b>JOHN4WICK</b></h4>
                <p><b>Genre:</b> Action, Neo-noir, Thriller, Crime film</p>
                <p><b>Overview:</b> With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin.</p>
              </div>

              <div class="col-sm-2">
                <h2>Movie 2</h2>
                <img src="https://www.themoviedb.org/t/p/original/hXmIGAWRqHstKNOyfb85oh2zb0Q.jpg" class="img-thumbnail" alt="Cinque Terre" width="200" height="200" />
                <h4><b>EXTRACTION 2</b></h4>
                <p><b>Genre:</b> Action, Thriller</p>
                <p><b>Overview:</b> Back from the brink of death, commando Tyler Rake embarks on a dangerous mission to save a ruthless gangster's imprisoned family.</p>
              </div>

              <div class="col-sm-2">
                <h2>Movie 3</h2>
                <img src="https://m.media-amazon.com/images/M/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" class="img-thumbnail" alt="Cinque Terre" width="200" height="200" />
                <h4><b>6 UNDERGROUND</b></h4>
                <p><b>Genre:</b> Action, Vigilante, Thriller</p>
                <p><b>Overview:</b> Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future.</p>
              </div>

              <div class="col-sm-2">
                <h2>Movie 4</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlN9nGvDTMSJfh5YlcJOGKJ1iR73lEmupervMutFslxSUdjiq2MAqCLeL-Od1zHtz83S8&usqp=CAU" class="img-thumbnail" alt="Cinque Terre" width="200" height="200" />
                <h4><b>KATE</b></h4>
                <p><b>Genre:</b> Action, Thriller</p>
                <p><b>Overview:</b> Slipped a fatal poison on her final job, a ruthless Tokyo assassin has less than 24 hours to find out who ordered the hit and exact revenge.</p>
              </div>

              <div class="col-sm-2">
                <h2>Movie 5</h2>
                <img src="https://m.media-amazon.com/images/M/MV5BMzZiY2JhNmMtYjA2MS00NTQ4LWI4MDctZmQ1NTY3OWI4YTc0XkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_.jpg" class="img-thumbnail" alt="Cinque Terre" width="200" height="200" />
                <h4><b>ACCIDENT MAN</b></h4>
                <p><b>Genre:</b> Action </p>
                <p><b>Overview:</b> Mike Fallon is a seasoned hit man who is known for making his target's death look like an accident. When Fallon's girlfriend turns up dead, he goes after his old colleagues to find the one responsible.</p>

              </div>
              <div class="col-sm-2">
                <h2>Movie 6</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSROIKcbRRxWe4Ahi8rhMFZwUG4RHdIepsEHS5zHsiFsXvLaItxISG0vmbV6gt9qS8c9h0&usqp=CAU" class="img-thumbnail" alt="Cinque Terre" width="200" height="200" />
                <h4><b>FAST X</b></h4>
                <p><b>Genre:</b> Action, Adventure, Crime film, Thriller, Action Thriller, Mystery, Road </p>
                <p><b>Overview:</b> Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path. Now, they must confront the most lethal opponent they've ever faced. Fueled by revenge, a terrifying threat emerges from the shadows of the past to shatter Dom's world and destroy everything -- and everyone -- he loves.</p>
              </div>
            </div>
          </div>

        </body>

      </div>
    )
  }
}