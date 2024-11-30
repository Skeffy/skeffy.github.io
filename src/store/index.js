import { createStore as _createStore } from 'vuex';

export function createStore(currentStats) {
    return _createStore({
        state: {
            projects: [
                {
                    name: "Flag Guesser",
                    desc: "A Wordle-like daily game where you have to guess the country that a flag belongs to. A Java/Spring Boot backend handles serving the client country information from a PostgreSQL database while the Vue.js front end handles the game logic and tracking user stats.",
                    img: "/flag-guesser-thumbnail.png",
                    tech: "Java | Spring Boot | Vue.js | Bootstrap",
                    link: "https://guesstheflag.netlify.app"
                },
                {
                    name: "TellerNet",
                    desc: "A Java based server application for handling common bank teller duties such as creating customer profiles, opening new accounts, and logging account transactions. Information is stored via a PostgreSQL database and manipulated through a front-end built in Vue.js.",
                    img: "/wip.png",
                    tech: "Java | Spring Boot | PostgreSQL | Vue.js",
                    link: ""
                },
            ],

            skills: {
                    name: "Skills",
                    list: ["Java", "Spring Boot", "PostgreSQL", "javaScript", "Docker", "Vue.js", "HTML", "CSS", "RESTful API", "Table Design", "JDBC", "Agile", "Unit Testing", "SOLID", "Git", "Kafka"]
            },

            softwares: {
                name: "Softwares/Tools",
                list: ["IntelliJ", "Postman", "PgAdmin", "VS Code", "Docker", "Android Studio", "GitHub", "AWS", "Azure"]

            },

            education: [
                {
                    name: "Tech Elevator",
                    desc: "This is a description of this education.",
                    date: "May 2024"
                },
            ]
        },

        mutations: {
            
        }
    });
}