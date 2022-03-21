import React from "react";
import Card from "./Cards"
import data from "../data"



function Main() {

    const cards = data.map(function(item) {
        return <Card key={item.id}
                    item = {item}
                />
    })

    console.log(cards)
    return (
        <div className="main">
            {cards}
            {cards}
            {cards}
            {cards}
        </div>
    )
}

export default Main;