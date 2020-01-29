import React from 'react';
import styles from './Home.module.css';

import bg from '../../img/bg.jpg';
import iwash from '../../img/i.jpg';
import share from '../../img/s.jpg';
import get from '../../img/g.jpg';
import gew from '../../img/gew.png';


const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-sm-12 col-md-3 col-lg-3" >
                    <h4 className="ml-4"><i class="fas fa-code"></i> SAMIR BENZADA</h4>
                    <div className={["nav flex-column nav-pills", styles.leftNav].join(' ')} id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                        <a id="v-pills-project-tab" data-toggle="pill" href="#v-pills-project" role="tab" aria-controls="v-pills-messages" aria-selected="false">Project</a>
                        <a id="v-pills-skills-tab" data-toggle="pill" href="#v-pills-skills" role="tab" aria-controls="v-pills-profile" aria-selected="false">Skills</a>
                        <a id="v-pills-about-tab" data-toggle="pill" href="#v-pills-about" role="tab" aria-controls="v-pills-settings" aria-selected="false">About</a>
                        <a id="v-pills-contact-tab" data-toggle="pill" href="#v-pills-contact" role="tab" aria-controls="v-pills-settings" aria-selected="false">Contact</a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-9 col-lg-9">
                    <div className="tab-content" id="v-pills-tabContent">

                        <div className="tab-pane fade show active text-center" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <img src={bg} alt="bg" width="80%" />
                        </div>

                        <div className="tab-pane fade" id="v-pills-project" role="tabpanel" aria-labelledby="v-pills-project-tab">
                            <div className="row">
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <a href="https://iwash-react.herokuapp.com/">
                                        <img src={iwash} alt="iwash" width="100%" min-height="100%" />
                                        <p className="text-center">iWash</p>
                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <a href="https://sharesensation.herokuapp.com/">
                                        <img src={share} alt="share" width="100%" height="200px" />
                                        <p className="text-center">Sharesensation</p>
                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <a href="https://get-details.herokuapp.com/">
                                        <img src={get} alt="get" width="100%" height="200px" />
                                        <p className="text-center">Get-Details</p>
                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <a href="https://gewjots.herokuapp.com/">
                                        <img src={gew} alt="gew" width="100%" height="200px" />
                                        <p className="text-center">GewJots</p>
                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <img src={bg} alt="test" width="100%" height="200px" />
                                    <p className="text-center">here the title</p>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <img src={bg} alt="test" width="100%" />
                                    <p className="text-center">here the title</p>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <img src={bg} alt="test" width="100%" />
                                    <p className="text-center">here the title</p>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <img src={bg} alt="test" width="100%" />
                                    <p className="text-center">here the title</p>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <img src={bg} alt="test" width="100%" />
                                    <p className="text-center">here the title</p>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <img src={bg} alt="test" width="100%" />
                                    <p className="text-center">here the title</p>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="v-pills-skills" role="tabpanel" aria-labelledby="v-pills-skills-tab">
                            Perhaps, but perhaps your civilization is merely the sewer of an even greater society above you! You guys realize you live in a sewer, right? My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.
                        </div>

                        <div className="tab-pane fade" id="v-pills-about" role="tabpanel" aria-labelledby="v-pills-about-tab">
                        Just once I'd like to eat dinner with a celebrity who isn't bound and gagged. I haven't felt much of anything since my guinea pig died. And so we say goodbye to our beloved pet, Nibbler, who's gone to a place where I, too, hope one day to go. The toilet.
                        </div>

                        <div className="tab-pane fade" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab">
                       bla vla lcdlsca  Just once I'd like to eat dinner with a celebrity who isn't bound and gagged. I haven't felt much of anything since my guinea pig died. And so we say goodbye to our beloved pet, Nibbler, who's gone to a place where I, too, hope one day to go. The toilet.
                        </div>
                    </div>



                    
                </div>
            </div>
        </div>
    );
};

export default Home;
