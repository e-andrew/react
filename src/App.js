import React from "react";
import Cards from "./Card/Cards";
import CardHeader from "./Card/CardHeader";

function App() {
    const cards = [
        {
            id: 0,
            title: "HyperText Markup Language",
            description: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
            infoURL: "https://en.wikipedia.org/wiki/HTML",
            imgURI: "/img/html_icon.png",
            alt: "html_icon"
        },
        {
            id: 1,
            title: "Cascading Style Sheets",
            description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
            infoURL: "https://en.wikipedia.org/wiki/CSS",
            imgURI: "/img/css_icon.png",
            alt: "css_icon"
        },
        {
            id: 2,
            title: "LESS",
            description: "Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets (CSS) and run on the client side or server side. Designed by Alexis Sellier.",
            infoURL: "https://en.wikipedia.org/wiki/Less_(stylesheet_language)",
            imgURI: "/img/less_icon.png",
            alt: "less_icon"
        },
        {
            id: 3,
            title: "Syntactically Awesome Stylesheets",
            description: "Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.",
            infoURL: "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)",
            imgURI: "/img/sass_icon.png",
            alt: "sass_icon"
        },
        {
            id: 4,
            title: "Bootstrap",
            description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
            infoURL: "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)",
            imgURI: "/img/bootstrap_icon.png",
            alt: "bootstrap_icon"
        },
        {
            id: 5,
            title: "JavaScript",
            description: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
            infoURL: "https://en.wikipedia.org/wiki/JavaScript",
            imgURI: "/img/js_icon.jpg",
            alt: "js_icon"
        },
        {
            id: 6,
            title: "TypeScript",
            description: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.",
            infoURL: "https://en.wikipedia.org/wiki/TypeScript",
            imgURI: "/img/ts_icon.png",
            alt: "ts_icon"
        },
        {
            id: 7,
            title: "jQuery",
            description: "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License.",
            infoURL: "https://en.wikipedia.org/wiki/JQuery",
            imgURI: "/img/jquery_icon.png",
            alt: "jquery_icon"
        },
        {
            id: 8,
            title: "React",
            description: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
            infoURL: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
            imgURI: "/img/react_icon.png",
            alt: "react_icon"
        },
        {
            id: 9,
            title: "Angular",
            description: "Angular (commonly referred to as \"Angular 2+\" or \"Angular CLI\") is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
            infoURL: "https://en.wikipedia.org/wiki/Angular_(web_framework)",
            imgURI: "/img/angular_icon.png",
            alt: "angular_icon"
        },
        {
            id: 10,
            title: "VueJS",
            description: "Vue.js (commonly referred to as Vue; pronounced \"view\") is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.",
            infoURL: "https://en.wikipedia.org/wiki/Vue.js",
            imgURI: "/img/vue_js_icon.png",
            alt: "vue_js_icon"
        }
    ];
    const [shownCards, setShownCards] = React.useState(cards)

    function setShownCard(id) {
        if(id === 11){
            setShownCards(cards);
        } else {
            setShownCards(cards.filter(card => card.id === id))
        }
    }

    return (
      <div>
          <CardHeader setShownCard={setShownCard}/>
          <Cards cards={shownCards}/>
      </div>
    );
}

export default App;




