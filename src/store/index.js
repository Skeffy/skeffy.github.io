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
                    link: "https://github.com/Skeffy/TellerNet"
                },
                {
                    name: "Octave",
                    desc: "A social media platform for discovering, sharing, and talking about all things music. Built with a microservice architecture with authentication service, core services, and databases all living in independent Docker containers.",
                    img: "/octave.png",
                    tech: "Java | Spring Boot | React | Typescript | Docker",
                    link: "https://github.com/Skeffy/Octave"
                },
                {
                    name: "Minecraft Stews Mod",
                    desc: "A mod for the game Minecraft that adds a new block with it's own unique crafting system and a whole list of recipes for new consumables. Includes custom assets, block, block entity, recipes, and items. Also features compatability for Just Enough Items.",
                    img: "/stews.png",
                    tech: "Java | Forge Mod Loader | Blockbench",
                    link: "https://github.com/Skeffy/Skeffy-Stews"
                }
            ],

            skills: {
                    name: "Skills",
                    list: ["Java", "Spring Boot", "PostgreSQL", "javaScript", "Docker", "Vue.js", "React", "HTML", "CSS", "RESTful API", "Table Design", "JDBC", "Agile", "Unit Testing", "SOLID", "Git", "Kafka", "Maven", "Gradle"]
            },

            softwares: {
                name: "Softwares/Tools",
                list: ["IntelliJ", "Postman", "PgAdmin", "VS Code", "Docker", "Android Studio", "GitHub", "AWS", "Azure"]

            },

            education: [
                {
                    name: "Tech Elevator",
                    desc: "Full-stack bootcamp designing software systems and solutions with 800+ hours of education and application.",
                    date: "2023 - 2024"
                },

                {
                    name: "University of Dayton",
                    desc: "Credit earned towards Bachelors of Science in computer engineering",
                    date: "2016 - 2017"
                },
            ]
        },

        mutations: {
            
        }
    });
}