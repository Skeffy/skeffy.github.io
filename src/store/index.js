import { createStore as _createStore } from 'vuex';

export function createStore(currentStats) {
    return _createStore({
        state: {
            projects: [
                {name: "Flag Guesser",
                    desc: "A Worlde-like daily game where you have to guess the country that a flag belongs to. A Java/Spring Boot backend handles serving the client country information from a PostgreSQL database while the Vue.js front end handles the game logic and tracking user stats.",
                    img: "/flag-guesser-thumbnail.png", tech: "Java | Spring Boot | Vue.js",
                    link: "https://guesstheflag.netlify.app"},
                {name: "Dungeons and Dragons Character Creator",
                    desc: "This project is in very early development. Stay tuned!",
                    img: "/wip.png",
                    tech: "Javascript | Vue.js"},
            ]
        },

        mutations: {
            
        }
    });
}