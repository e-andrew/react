import React from "react";

const styles = {
    container: {
        width: "1000px",
        margin: "auto",
        padding: "30px",
        backgroundColor: "rgba(7, 238, 219, 0.8)",
        backfaceVisibility: "visible"
    },

    h1: {
        margin: 0,
        padding: 0,
        fontFamily: "Elemental, serif",
        fontSize: "30px",
        fontWeight: 700,
        color: "white",
        textAlign: "center",
        textShadow: "0 0 10px #FCA21E,0 0 20px #FCA21E,0 0 30px #FCA21E,0 0 40px #FCA21E"
    },

    buttons: {
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center"
    },

    button: {
        height: "40px",
        fontFamily: "VioletSans, serif",
        fontSize: "18px",
        textAlign: "justify"
    }
}

export default function CardHeader(props){
    return(
        <div style={styles.container}>

            <h1 style={styles.h1}>Choose The Card</h1>

            <div style={styles.buttons}>
                <button style={styles.button} onClick={() => props.setShownCard(0)}>HTML</button>
                <button style={styles.button} onClick={() => props.setShownCard(1)}>CSS</button>
                <button style={styles.button} onClick={() => props.setShownCard(2)}>LESS</button>
                <button style={styles.button} onClick={() => props.setShownCard(3)}>SASS</button>
                <button style={styles.button} onClick={() => props.setShownCard(4)}>Bootstrap</button>
                <button style={styles.button} onClick={() => props.setShownCard(5)}>JavaScript</button>
                <button style={styles.button} onClick={() => props.setShownCard(6)}>TypeScript</button>
                <button style={styles.button} onClick={() => props.setShownCard(7)}>jQuery</button>
                <button style={styles.button} onClick={() => props.setShownCard(8)}>React</button>
                <button style={styles.button} onClick={() => props.setShownCard(9)}>Angular</button>
                <button style={styles.button} onClick={() => props.setShownCard(10)}>VueJS</button>
                <button style={styles.button} onClick={() => props.setShownCard(11)}>All</button>
            </div>
        </div>
    )
}