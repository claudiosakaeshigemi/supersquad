import React , { Component } from 'react';
import CharacterList from './CharacterList';
import '../styles/index.css';
import HeroList from './heroList';



class App extends Component {
    render () {
        return ( 
            <div className= "App"> 
                <h2> SuperSquad</h2>
                <div className="col-md-6">
                    <CharacterList/>
                </div>

                <div className="col-md-6">
                    <HeroList/> 
                </div>
                
            </div>
        )
    }
}

export default App;