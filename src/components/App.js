import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png'
import Title from './Title';
import Header from './Header';

class App extends Component{

    state = { displayBio:false}
    // constructor(){
    //     super();
    //     this.state = { displayBio: false };
    //     this.toogleDisplayBio = this.toogleDisplayBio.bind(this);
    // }

    toogleDisplayBio = ()=>{
        this.setState({displayBio: !this.state.displayBio});
    }

    render(){
        return (
            <div>
                <Header/>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello</h1>
                <p>My name is Sajidur Rahman.</p>
                <Title />
                {/* {this.state.displayBio ? <Title /> : null} */}
                <p>I'm always forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Bangladesh.</p>
                            <p>My favorite language is Javascript.</p>
                            <p>Besides coding I am also loving writing story.</p>
                            <button className='btn btn-primary' onClick={this.toogleDisplayBio}>Show less</button>
                        </div>
                    ):(
                        <div>
                            <button className='btn btn-primary' onClick={this.toogleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr/>
                <Projects />
                <hr/>
                <SocialProfiles />
            </div>
        )
    }
}

export default App;