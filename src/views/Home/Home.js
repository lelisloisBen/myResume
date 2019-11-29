import React from 'react';
import styles from './Home.module.css';
// https://demo.w3layouts.com/demos_new/template_demo/07-01-2019/conjoint-demo_Free/1039895216/web/index.html#home
import me from '../../img/samir.jpg';

const Home = () => {
    return (
        <>
        <div className="row">
            <div className={["col-9", styles.content].join(' ')} >
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? A true inspiration for the children. Hey, what kinda party is this? There's no booze and only one hooker.
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        Perhaps, but perhaps your civilization is merely the sewer of an even greater society above you! You guys realize you live in a sewer, right? My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.
                    </div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    The alien mothership is in orbit here. If we can hit that bullseye, the rest of the dominoes will fall like a house of cards. Checkmate.
                    </div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    Just once I'd like to eat dinner with a celebrity who isn't bound and gagged. I haven't felt much of anything since my guinea pig died. And so we say goodbye to our beloved pet, Nibbler, who's gone to a place where I, too, hope one day to go. The toilet.
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="p-5">
                    <img src={me} className="rounded-circle" alt="me" width="100%" />
                </div>
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Projects</a>
                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Experience</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;
