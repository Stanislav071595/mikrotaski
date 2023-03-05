import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CarTable} from "./map/MapMetod";
import {UniversButton} from "./components/Buttons/UniversButton";


const App = () => {

    const Button1Foo = (subscriber: string, age: number, adress: string) => {
        console.log(subscriber, age, adress)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log("I'm stupid button")
    }


    return (
        <div>
            {/*<button>MyYouTubeChanel_1</button>
            <button>MyYouTubeChanel_1</button>*/}

            <UniversButton name={"MyYouTubeChanel_1"} callBack={()=>Button1Foo ("Im Vasya", 21, "live in Voronezh")}/>
            <UniversButton name={"MyYouTubeChanel_2"} callBack={()=>Button2Foo ("Im Ivan")}/>
            <UniversButton name={"Stupid button"} callBack={Button3Foo}/>
        </div>
    );
}

export default App;
