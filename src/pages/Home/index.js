import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      
      <div style={{background:'https://storage.pixteller.com/designs/designs-images/2019-03-27/05/simple-background-backgrounds-passion-simple-1-5c9b95c3a34f9.png'}}>
        <body>

          

          <div class="jumbotron text-center">
            <h1>Movies</h1>
            <h3>Please send Money</h3>
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
                <img src="https://pbs.twimg.com/media/Dsdlbj3U4AAJoO7.jpg" class="img-thumbnail" alt="Cinque Terre" width="200" height="200" />
                <h3>Aquaman</h3>
                <p>genre: Action, Romance</p>
              </div>
              <div class="col-sm-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kylEqLF9BAOq_sT_250hBUBbA0X-OEMuBcy4mPfK1Rn6sDSq" class="img-thumbnail" alt="Cinque Terre" width="200" height="200" />
                <h3>How to train your dragon</h3>
                <p>genre: Action, Romance</p>
              </div>
              <div class="col-sm-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSIszS_hZ5XBSNnQamt1MUJTmpgD4ZHGzkJvoM8owuQg6xWDS" class="img-thumbnail" alt="Cinque Terre" width="200" height="200" />
                <h3>Bleach</h3>
                <p>genre: Action, Romance</p>
              </div>
              <div class="col-sm-2">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS148VQcCwjB4BgkrjdLPF7ln5At6Z6xvLMdS8YSUXoksYExx4R" class="img-thumbnail" alt="Cinque Terre" width="200" height="200" />
                <h3>Uncharted</h3>
                <p>genre: Action, Romance</p>
              </div>
              <div class="col-sm-2">
                <img src="https://movies.universalpictures.com/media/sing2-560x880-6183d65431022-1.jpg" class="img-thumbnail" alt="Cinque Terre" width="200" height="200" />
                <h3>Sing2</h3>
                <p>genre: Action, Romance</p>
              </div>
              <div class="col-sm-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJApnr9b8RCQjrOr0YpzqMTY1xXWNrfWHgq0VvNxVNUaG9XyrV" class="img-thumbnail" alt="Cinque Terre" width="200" height="200" />
                <h3>Batman</h3>
                <p>genre: Action, Romance</p>
              </div>
            </div>
          </div>

        </body>

      </div>
    )
  }
}
