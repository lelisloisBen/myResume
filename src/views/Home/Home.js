import React from 'react';
import bg from '../../img/bg.jpg';


const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-3" >
                    <h4> <i class="fas fa-code"></i> SAMIR BENZADA</h4>
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                        <a id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-portfolio" role="tab" aria-controls="v-pills-profile" aria-selected="false">Portfolio</a>
                        <a id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-project" role="tab" aria-controls="v-pills-messages" aria-selected="false">Project</a>
                        <a id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-about" role="tab" aria-controls="v-pills-settings" aria-selected="false">About</a>
                        <a id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-contact" role="tab" aria-controls="v-pills-settings" aria-selected="false">Contact</a>
                    </div>
                </div>
                <div className="col-9">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <img src={bg} alt="bg" width="80%" />
                        </div>
                        <div className="tab-pane fade" id="v-pills-portfolio" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            Perhaps, but perhaps your civilization is merely the sewer of an even greater society above you! You guys realize you live in a sewer, right? My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.
                        </div>
                        <div className="tab-pane fade" id="v-pills-project" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        The alien mothership is in orbit here. If we can hit that bullseye, the rest of the dominoes will fall like a house of cards. Checkmate.
                        </div>
                        <div className="tab-pane fade" id="v-pills-about" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        Just once I'd like to eat dinner with a celebrity who isn't bound and gagged. I haven't felt much of anything since my guinea pig died. And so we say goodbye to our beloved pet, Nibbler, who's gone to a place where I, too, hope one day to go. The toilet.
                        </div>
                        <div className="tab-pane fade" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                       bla vla lcdlsca  Just once I'd like to eat dinner with a celebrity who isn't bound and gagged. I haven't felt much of anything since my guinea pig died. And so we say goodbye to our beloved pet, Nibbler, who's gone to a place where I, too, hope one day to go. The toilet.
                        </div>
                    </div>



                    
                </div>
            </div>
        </div>
    );
};

export default Home;
