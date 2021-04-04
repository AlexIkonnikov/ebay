<template>
    <div class="wrapper">
        <app-question 
            :question="question.text" 
            :bgc="'#FF6927'" 
            :answers="answers"
        />
        <div class="image">
            <div class="image__wrapper">
                <image-container :bgc="'#FFDEC5'">
                    <box-ikon/>
                </image-container>

                <div class="image__column">
                    <image-container :bgc="'#FDF4BA'">
                        <drill-ikon />
                    </image-container>

                    <image-container :bgc="'#F9E46E'">
                        <cup-ikon />
                    </image-container>
                </div>
            </div>
            <image-container :bgc="'#FFB783'">
                <bear-ikon />
            </image-container>
        </div>
  </div>
</template>

<script>
import AppQuestion from './AppQuestion';
import ImageContainer from './ImageContainer';
import BoxIkon from './ikons/BoxIkon';
import DrillIkon from './ikons/DrillIkon';
import CupIkon from './ikons/CupIkon';
import BearIkon from './ikons/BearIkon';
export default {
    name: 'second-question',
    data() {
        return {
            question: this.$store.getters.getQuestion,
            answers: this.$store.getters.getAnswers
        }
    },
    components: {
        AppQuestion,
        ImageContainer,
        BoxIkon,
        DrillIkon,
        CupIkon,
        BearIkon
    }
}
</script>