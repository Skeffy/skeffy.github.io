import { createStore as _createStore } from 'vuex';

export function createStore(currentStats) {
    return _createStore({
        state: {
            projects: [
                {name: "Flag Guesser",
                    desc: "A Worlde-like daily game where you have to guess the country that a flag belongs to. A Java/Spring Boot backend handles serving the client country information from a PostgreSQL database while the Vue.js front end handles the game logic and tracking user stats.",
                    img: "/src/assets/flag-guesser-thumbnail.png", tech: "Java | Spring Boot | Vue.js",
                    link: "https://guesstheflag.netlify.app"},
                {name: "Test Project2",
                    desc: "This project is also widdeway a test",
                    img: "/src/assets/wip.png",
                    tech: "Javascript | Vue.js"},
            ]
        },

        mutations: {
            
        }
    });
}