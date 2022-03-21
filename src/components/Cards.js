import React from "react";

function Card(props) {
    let tit

    if (props.item.title.length > 55) {
        tit = props.item.title.slice(0,50) + " ..."
        console.log(tit);
    }
    else {
        tit = props.item.title
    }

    return (
        <div className="card">
            <a href={props.item.link} alt="Hold"><img className="card__img" src={props.item.image}/></a>
            <div className="card__info">
                <img className="card__logo" src={props.item.imgLogo}/>
                <div>
                    <a href={props.item.link}><h2 className="card__title">{tit}</h2></a>
                    <a href={props.item.linkChan}><h4 className="card__author">{props.item.author}</h4></a>
                    <span className="card__views">{props.item.views} views · {props.item.date}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;