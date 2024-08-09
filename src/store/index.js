import { createStore as _createStore } from 'vuex';

export function createStore(currentStats) {
    return _createStore({
        state: {
            projects: [
                {name: "Flag Guesser", desc: "", img: "logo.svg", tech: "Java | Spring Boot | Vue.js"},
                {name: "Test Project2", desc: "This project is also widdeway a test", img: "logo.svg", tech: "Javascript | Vue.js"},
            ]
        },

        mutations: {
            
        }
    });
}