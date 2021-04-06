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
        answer_id: String,
        answer_category_id: String,
        answer: String,
        textColor: String,
        widthBtn: Number,
    },
    mounted() {
        this.$el.classList.add('animate__slideInLeft');
    },
    methods: {
        toAnswer() {
            if (this.answer_id === "restart") {
                this.$store.commit('testRestart');
                return;
            }
            const userAnswer = {
                question_id: this.$store.getters.getQuestionId,
                answer_id: this.answer_id,
                category: this.answer_category_id,
            };
            this.$store.commit('addUserAnswer', userAnswer);
            this.$store.commit('nextPage');
        }

    }
}
</script>

<style lang="scss" scoped>
    button {
        box-sizing: border-box;
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