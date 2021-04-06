<template>
    <div class="question" :style="{backgroundColor: bgc}">
        <section class="wrapper__header">
            <h1 :style="{color: headerColor ? headerColor : 'white'}" >{{ question }}</h1>
            <div class="wrapper__answer">
                <app-answer 
                    v-for="answer in answers" 
                    :key="answer.id"
                    :answer_id="answer.id" 
                    :answer_category_id="answer.id_category" 
                    :answer="answer.text" 
                />
            </div>
        </section>
    </div>
</template>

<script>
import AppAnswer from './AppAnswer';
export default {
    name: 'app-question',
    props: {
        question: String,
        headerColor: String,
        bgc: String,
        answers: Array,
    },
    components: {
        AppAnswer
    }
}
</script>

<style>
    .question {
        padding-top: 75px;
    }

    .wrapper__header {
        max-width: 280px;
        margin: 0 auto;
    }
           
    h1 {
        font-size: 24px;
        line-height: 30px;
    }

    .wrapper__answer {
        padding: 20px 0 48px 0; 
    }

    @media (min-width: 375px) {
        .question {
            display: flex;
            width: 55%;
            min-height: 100vh;
            padding-top: 125px;
        }

        .wrapper__header {
            max-width: 322px;
            margin: 0 auto;
        }

        h1 {
            font-size: 26px;
            line-height: 33px;
        }
    }
</style>