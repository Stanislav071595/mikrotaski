import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {CarTable} from "./map/MapMetod";
import {UniversButton} from "./components/Buttons/UniversButton";




type FilterType = 'All' | 'Dollars' | 'RUBLS'

const App = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollars ', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS ', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars ', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS ', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS ', value: 50, number: ' v1234567890'},
    ])

    let currentMoney = money;

    const[filter, setFilter] = useState<FilterType>("All")

    if(filter === 'Dollars'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars ')
    }
    if (filter === 'RUBLS'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS ')
    }





    const OneClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (

        <>
            <ul>
                {currentMoney.map((ObjUseState, index) => {
                    return (
                        <li key={index}>
                            <span>{ObjUseState.banknots}</span>
                            <span>{ObjUseState.value}</span>
                            <span>{ObjUseState.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={()=>OneClickFilterHandler("All")}>All</button>
                <button onClick={()=>OneClickFilterHandler("RUBLS")}>RUBLS</button>
                <button onClick={()=>OneClickFilterHandler("Dollars")}>Dollars</button>
            </div>

        </>
    )
}


/*    const Button1Foo = (subscriber: string, age: number, adress: string) => {
        console.log(subscriber, age, adress)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log("I'm stupid button")
    }*/


/*    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a);
    }
    const onClickHandler2 = () => {
        setA(--a);
    }
    const onClickHandler3 = () => {
        setA(a=0)
    }*/


/*    return (
        <div>
            {/!*<button>MyYouTubeChanel_1</button>
            <button>MyYouTubeChanel_1</button>*!/}

            {/!*<UniversButton name={"MyYouTubeChanel_1"} callBack={()=>Button1Foo ("Im Vasya", 21, "live in Voronezh")}/>
            <UniversButton name={"MyYouTubeChanel_2"} callBack={()=>Button2Foo ("Im Ivan")}/>
            <UniversButton name={"Stupid button"} callBack={Button3Foo}/>*!/}

            {/!*<h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler2}>delete</button>
            <button onClick={onClickHandler3}>reset</button>*!/}

        </div>
    );*/


export default App;
