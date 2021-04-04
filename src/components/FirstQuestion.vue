<template>
    <div class="wrapper">
        <app-question 
            :question="question.text" 
            :headerColor="'#365001'" 
            :bgc="'#FBCE26'" 
            :answers="answers"
        />
        <div class="image">
    
            <image-container :bgc="'#FDF4BA'">
                <wagon-ikon/>
            </image-container>

            <div class="image__wrapper">
                <image-container :bgc="'#F9E377'">
                    <circle-ikon />
                </image-container>

                <div class="image__column">
                    <image-container :bgc="'#CAE53C'">
                        <joy-stick-ikon />
                    </image-container>

                    <image-container :bgc="'#EBF86E'">
                        <bike-ikon />
                    </image-container>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppQuestion from './AppQuestion';
import ImageContainer from './ImageContainer';
import WagonIkon from './ikons/Wagon';
import CircleIkon from './ikons/CircleIkon';
import JoyStickIkon from './ikons/JoyStickIkon';
import BikeIkon from './ikons/BikeIkon';
export default {
    name: 'first-question',
    data() {
        return {
            question: this.$store.getters.getQuestion,
            answers: this.$store.getters.getAnswers,
        }
    },
    components: {
        AppQuestion,
        ImageContainer,
        WagonIkon,
        CircleIkon,
        JoyStickIkon,
        BikeIkon
    }
}
</script>
<style lang="scss">
</style>