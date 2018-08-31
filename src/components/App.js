import React , { Component } from 'react';
import CharacterList from './CharacterList';
import '../styles/index.css';
import HeroList from './heroList';
import Squadstats from './SquadStats';



class App extends Component {
    render () {
        return ( 
            <div className= "App"> 
                <h2> SuperSquad</h2>
                <div className="col-md-4">
                    <CharacterList/>
                </div>

                <div className="col-md-4">
                    <HeroList/> 
                </div>
                
                <div className="col-md-4">
                    <Squadstats/> 
                </div>
            </div>
        )
    }
}

export default App;