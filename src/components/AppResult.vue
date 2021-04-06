<template>
    <div class="wrapper result">
        <section class="result__section">
            <div class="result__container">
                <h1 class="result__header">Результаты вашего теста:</h1>
                <p class="result__text">Вы прошли тест и можете посмотреть на свои результаты</p>
                <app-answer :answer="'Пройти ещё раз'" :widthBtn="185" :answer_id="'restart'" />
                <app-answer :answer="'Устроить шопинг'" :widthBtn="185" />
                <div class="result__wrapper">
                    <p class="result__text">Поделиться:</p>
                    <social-ikons/>
                </div>
                <button @click="result">результат</button>
            </div>
        </section>
        <div class="image">
            <result-ikon :result="result()" />
        </div>
    </div>
</template>

<script>
import { api } from '../api.js';
import AppAnswer from './AppAnswer';
import ResultIkon from './ikons/ResultIkon';
import SocialIkons from './ikons/SocialIkons';
export default {
    name: 'app-result',
    methods: {
        result() {
            const result = this.$store.getters.getUserAnswers;
            api.setUserAnswer(result);
            const data = {
                friends: 0,
                works: 0,
                development: 0
            }
            result.forEach((it) => {
                switch (it.category - 0) {
                    case 1: 
                        data.friends ++;
                        break;
                    case 2: 
                        data.works ++;
                        break;
                    case 3: 
                        data.development++;
                        break;
                }
            });

            return data;
        }
    },
    components: {
        AppAnswer,
        ResultIkon,
        SocialIkons
    }
}
</script>

<style lang="scss" scoped>
    p {
        margin: 0;
    }
    .result {
        min-height: 100vh;
        &__container {
            max-width: 290px;
            margin: 0 auto;
        }

        &__section {
            background-color: #C4E5FC;
        }

        &__header {
            font-size: 24px;
            line-height: 30px;
            color: #111259;
            font-weight: bold;
            padding: 45px 0px 5px;
        }

        &__text{
            font-size: 14px;
            line-height: 20px;
            color: #111259;
            padding-right: 10px;
        }

        &__wrapper {
            display: flex;
            justify-content: start;
            align-items: center;
            padding: 20px 0;
        }

        &__header ~ &__text {
            padding-bottom: 20px;
        }
    }

    .image {
        background-color: #92C9FF;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 14px 0px;
    }

    @media (min-width: 500px) {
        .result {

            &__section {
                width: 50%;
            }

            &__header {
                font-size: 32px;
                line-height: 40px;
            }

            &__wrapper {
                padding-top: 44px;
            }

            &__text  {
                font-size: 18px;
                line-height: 24px;
                max-width: 260px;
            }
        }
    }
</style>