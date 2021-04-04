import { createStore } from 'vuex';

const store = createStore({
    state: {
        testIsNotBegin: true,
        currentQuestion: 0,
        questions: [],
        answers: [],
        userAnswers: [],
    },
    mutations: {
        nextPage(state) {
            state.currentQuestion ++;
        },
        testStart(state) {
            state.testIsNotBegin = false;
        },
        testRestart(state) {
            state.testIsNotBegin = true;
            state.currentQuestion = 0;
        }, 
        addUserAnswer(state, payload) {
            state.userAnswers.push(payload);
        },
        setQuestions(state, payload) {
            state.questions = payload;
        },
        setAnswers(state, payload) {
            state.answers = payload;
        }
    },
    actions: {
        setQuestions(context, payload) {
            context.commit('setQuestions', payload);
        },
        setAnswers(context, payload) {
            context.commit('setAnswers', payload);
        },
    },
    getters: {
        getQuestion(state) {
            return state.questions.filter((it) => {
                return (it.id - 0) == state.currentQuestion;
            })[0];
        },
        getQuestionText(state) {
            return state.questions[state.currentQuestion - 1].text;
        },
        getAnswers(state) {
            return state.answers.filter((it) => {
                return (it.id_question - 0)  === state.currentQuestion; 
            });
        },
        getUserAnswers(state) {
            return state.userAnswers;
        },
    }
});

export default store;