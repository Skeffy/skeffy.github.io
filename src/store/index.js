import { createStore as _createStore } from 'vuex';

export function createStore(currentStats) {
    return _createStore({
        state: {
            projects: [
                {
                    name: "Flag Guesser",
                    desc: "A Worlde-like daily game where you have to guess the country that a flag belongs to. A Java/Spring Boot backend handles serving the client country information from a PostgreSQL database while the Vue.js front end handles the game logic and tracking user stats.",
                    img: "/flag-guesser-thumbnail.png", tech: "Java | Spring Boot | Vue.js",
                    link: "https://guesstheflag.netlify.app"
                },
                {
                    name: "Dungeons and Dragons Character Creator",
                    desc: "This project is in very early development. Stay tuned!",
                    img: "/wip.png",
                    tech: "Javascript | Vue.js"
                },
            ],

            skills: {
                    name: "Skills",
                    list: ["Java", "Spring Boot", "PostgreSQL", "javaScript", "Docker", "Vue.js", "HTML", "CSS", "RESTful API", "Table Design", "JDBC", "Agile", "Unit Testing", "SOLID", "Git"]
            },

            softwares: {
                name: "Softwares/Tools",
                list: ["IntelliJ", "Postman", "PgAdmin", "VS Code", "Docker", "Android Studio", "GitHub", "AWS", "Azure"]

            },
        },

        mutations: {
            
        }
    });
}