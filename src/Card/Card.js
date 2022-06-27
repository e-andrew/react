import React from "react";

const styles = {
    container: {
        width: "1000px",
        margin: "auto",
        padding: "30px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgba(7, 238, 219, 0.5)",
        backfaceVisibility: "visible"
    },

    h1: {
        margin: 0,
        padding: 0,
        fontFamily: "Elemental, serif",
        fontSize: "30px",
        fontWeight: 700,
        textAlign: "left",
        textShadow: "0 0 10px #FCA21E,0 0 20px #FCA21E,0 0 30px #FCA21E,0 0 40px #FCA21E"
    },

    a: {
        margin: 0,
        padding: 0,
        textDecoration: "none",
        color: "white"
    },

    p: {
        margin: 0,
        padding: "10px",
        fontFamily: "VioletSans, serif",
        fontSize: "18px",
        textAlign: "justify",
        color: "black",
        textShadow: "0 0 10px white",
        backgroundColor: "rgba(7, 234, 219, 0.7)"
    },

    description: {
        margin: 0,
        padding: 0,
        width: "700px",
        wordBreak: "break-word"
    },

    icon: {
        height: "200px",
        width: "200px"
    }
}

export default function Card({title, description, infoURL, imgURI, alt}) {
    return (
        <div style={styles.container}>
            <div style={styles.description}>
                <h1 style={styles.h1}><a style={styles.a} href={infoURL} target="_blank">{title}</a></h1>
                <p style={styles.p}>{description} </p>
            </div>
            <img style={styles.icon} src={ imgURI } alt={ alt }/>
        </div>
    )
}