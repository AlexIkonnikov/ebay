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
import { getQuestions, getAnswers } from './api.js';
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
    const questions = await getQuestions();
    this.$store.dispatch('setQuestions', questions);
    const answers = await getAnswers();
    this.$store.dispatch('setAnswers', answers);
  },
  computed: {
    currentQuestion() {
      return this.$store.state.currentQuestion;
    },
    testIsNotBegin() {
      return this.$store.state.testIsNotBegin;
    }
  }
}
</script>
