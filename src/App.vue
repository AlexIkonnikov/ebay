<template>
  <start-screen v-if="testIsNotBegin"/>
  <first-question v-if="currentQuestion === 1"/>
  <second-question v-if="currentQuestion === 2"/>
  <last-question v-if="currentQuestion === 3"/>
  <app-result v-if="currentQuestion === 4"/>
</template>

<script>
import StartScreen from './components/StartScreen';
import FirstQuestion from './components/FirstQuestion';
import SecondQuestion from './components/SecondQuestion';
import LastQuestion from './components/LastQuestion';
import AppResult from './components/AppResult';
import { api } from './api.js';
export default {
  components: { 
    StartScreen,
    FirstQuestion,
    SecondQuestion,
    LastQuestion,
    AppResult
  },
  name: 'App',
  mounted: async function () {
    const data = await api.getData();
    if(data.error) {
      this.$store.commit('addError', data.error)
      return;
    }
    this.$store.dispatch('setQuestions', data.questions);
    this.$store.dispatch('setAnswers', data.answers);
  },
  computed: {
    currentQuestion() {
      return this.$store.getters.getCurrentQuestion;
    },
    testIsNotBegin() {
      return this.$store.getters.getTestStatus;
    }
  }
}
</script>
