import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CarTable} from "./map/MapMetod";
import {UniversButton} from "./components/Buttons/UniversButton";


const App = () => {


    return (
        <div>
            {/*<button>MyYouTubeChanel_1</button>
            <button>MyYouTubeChanel_1</button>*/}

            <UniversButton name={"MyYouTubeChanel_1"}/>
            <UniversButton name={"MyYouTubeChanel_1_2"}/>
        </div>
    );
}

export default App;
