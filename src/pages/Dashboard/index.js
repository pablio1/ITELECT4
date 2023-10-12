import React, { Component } from 'react';
import Avengers from './../../assets/Avengers.jpg'
import TLOU from './../../assets/TLOU.jpg'
import Oppenheimer from './../../assets/Oppenheimer.jpg'
import Joker from './../../assets/Joker.jpg'
import Shrek from './../../assets/Shrek.jpg'
import BlackPanther from './../../assets/BlackPanther.jpg'

class Dashboard extends Component {
    render() {
        return (
            <div>
               
                <div>
                    <div class="d-flex flex-row">
                        <div class="col">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        </div>
                    <div class="col">
                        <button type="button" class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                            Search
                        </button>
                    </div>
                    </div>
                </div>

                
                <div className="row mt-3">
                    <div className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Avengers} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Avengers: Infinity War</h5>
                                <p className="card-text">Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. </p>
                                <a href="#" className="btn btn-primary">Watch Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={TLOU} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">The Last Of Us</h5>
                                <p className="card-text">Joel and Ellie, a pair connected through the harshness of the world they live in, are forced to endure brutal circumstances and ruthless killers on a trek across a post-outbreak America.</p>
                                <a href="#" className="btn btn-primary">Watch Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Oppenheimer} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Oppenheimer</h5>
                                <p className="card-text">During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb.</p>
                                <a href="#" className="btn btn-primary">Watch Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Joker} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Joker</h5>
                                <p className="card-text">Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.</p>
                                <a href="#" className="btn btn-primary">Watch Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Shrek} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Shrek</h5>
                                <p className="card-text">Shrek is the protagonist of the book of the same name, a series of films by DreamWorks Animation, as well as a musical. The name "Shrek" is derived from the German word Schreck, meaning "fright" or "terror".</p>
                                <a href="#" className="btn btn-primary">Watch Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={BlackPanther} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Black Panther: Wakanda Forever</h5>
                                <p className="card-text">Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.</p>
                                <a href="#" className="btn btn-primary">Watch Now</a>
                            </div>
                        </div>
                    </div>



                </div>


            </div>




        );
    }
}
export default Dashboard;