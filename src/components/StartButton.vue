<template>
  <button class="btn-custom" @click="testStart">Начать тест</button>
</template>

<script>
export default {
  name: 'start-button',
  methods: {
    testStart() {
      this.$store.commit('testStart');
      this.$store.commit('nextPage');
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