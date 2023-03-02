import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CarTable} from "./map/MapMetod";




const App = () => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
          <CarTable  cars={topCars}/>
        </div>
    );
}

export default App;
