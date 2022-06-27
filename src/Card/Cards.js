import React from "react";
import Card from "./Card";

export default function Cards(props){
    return(
        props.cards.map(card => {
            return <Card key={card.id} title={card.title} description={card.description} infoURL={card.infoURL} imgURI={card.imgURI} alt={card.alt}/>
        })
    )
}