<template>
    <div class="wrapper">
        <app-question 
            :question="question.text" 
            :bgc="'#1BAB49'" 
            :answers="answers"
        />
        <div class="image">
            <div class="image__wrapper">
                <image-container :bgc="'#EBF86E'">
                    <pot-ikon />
                </image-container>

                <image-container :bgc="'#F5FBBD'">
                    <dress-ikon />
                </image-container>
            </div>
            <image-container :bgc="'#57E76B'" :className="'p-0'">
                <smart-watch-ikon />
            </image-container>
        </div>
  </div>
</template>

<script>
import AppQuestion from './AppQuestion';
import ImageContainer from './ImageContainer';
import SmartWatchIkon from './ikons/SmartWatchIkon';
import PotIkon from './ikons/PotIkon';
import DressIkon from './ikons/DressIkon';

export default {
    name: 'last-question',
    data() {
        return {
            question: this.$store.getters.getQuestion,
            answers: this.$store.getters.getAnswers
        }
    },
    components: {
        AppQuestion,
        ImageContainer,
        SmartWatchIkon,
        PotIkon,
        DressIkon
    }
}
</script>