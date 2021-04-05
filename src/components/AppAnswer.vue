<template>
    <button 
        :style="{width: widthBtn + 'px'}" 
        class="animate__animated  animate__faster" 
        @click="toAnswer"
    >
        {{ answer }}
    </button>
</template>

<script>
export default {
    name: 'app-answer',
    props: {
        id: String,
        answer: String,
        textColor: String,
        widthBtn: Number,
    },
    mounted() {
        this.$el.classList.add('animate__slideInRight');
    },
    methods: {
        toAnswer() {
            if (this.id === "restart") {
                this.$store.commit('testRestart');
                return;
            }
            const userAnswer = {
                question: this.$store.getters.getQuestionId,
                answer: this.id,
            };
            this.$store.commit('addUserAnswer', userAnswer);
            this.$store.commit('nextPage');
        }

    }
}
</script>

<style lang="scss" scoped>
    button {
        display: block;
        padding: 13px 15px;
        margin-bottom: 10px;
        background-color: rgba(0,0,0,0);
        border: solid 2px white;
        font-size: 16px;
        line-height: 18px;
        font-weight: 400;
        font-style: normal;
        color: white;
        &:active {
            background-color: white;
            color: black;
        }
        &:focus {
            outline: none;
        }
    }
</style>