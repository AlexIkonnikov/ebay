<template>
  <button class="btn-custom" @click="testStart" :disabled="error.length || !dataIsReady">
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="!dataIsReady && !error.length"></span>
    <template v-if="!dataIsReady && !error.length">
      Loading..
    </template>

    <template v-else-if="error.length">
      Woops..
    </template>

    <template v-else>
      Начать тест
    </template>
  </button>
</template>

<script>
export default {
  name: 'start-button',
  methods: {
    testStart() {
      this.$store.commit('testStart');
      this.$store.commit('nextPage');
    }
  },
  computed: {
    error() {
      return this.$store.getters.getErrors;
    },
    dataIsReady() {
      return this.$store.getters.getDataStatus;
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-custom {
    padding: 15px 20px;
    background-color: #fff;
    color: #629DFF;
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
    margin-top: 20px;
    &:hover {
      background-color: #2E5BFB;
      color: #fff;
    }
    &:focus {
      outline: none;
    }
    &:active {
      background-color: #3400F6;
    }
}

</style>