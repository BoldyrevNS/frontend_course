import React from 'react';
import Widget from '../components/ContentWidget';
import "../css/About.css";

const About = () => {
    return(
        <Widget title='About'>
                <p>
                    speedrun.com is a site that provides leaderboards, resources, forums and more, for speedrunning.
                </p>
                <br/>
                <p>
                    Speedrunning is the act of playing a video game with the intent of completing 
                    it as fast as possible, for the purposes of entertainment and / or competition. 
                    You can read more about speedrunning on <a className='about' href="https://en.wikipedia.org/wiki/Speedrunning">Wikipedia.</a> 
                </p>
        </Widget>
    )
}

export default About;