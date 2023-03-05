import React from "react";



export const Button = () => {

/*
    const myFirstSubscriber = () => {
        console.log("Hello, I'm Vasya")
    }

    const mySecondSubscriber = () => {
        console.log("Hello, I'm Petya")
    }
*/

    const onClickHandler = (name: string) => {
        console.log(name)
    }

/*    const foo1 = () => {
        console.log(100200)
    }
    const foo2 = (name: number) => {
        console.log(name)

    }*/


    return (
        <div>
            <button onClick={(event)=>onClickHandler( "Vasya")}>Subscriber</button>;
            <button onClick={(event)=>onClickHandler( "Petya")}>Subscriber</button>;

            {/*<button onClick={foo1}>1</button>
            <button onClick={(event)=>foo2 ( 100200 )}>2</button>*/}
        </div>
    )
}