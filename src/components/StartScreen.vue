<template>
    <app-error v-if="error.length" :errors="error" />
    <div class="wrapper">
        <div class="wrapper__column-1">
            <section class="wrapper__header">
                <h1>eBay исполняется 25<br> лет!Проверьте, а все<br> ли у вас сбалансировано<br> в жизни</h1>
                <start-button />
            </section>
        </div> 
        <div class="wrapper__column-2">
            <div class="block block__top"><app-watch /></div>
            <div class="block block__bottom"><app-joy-stick /></div>
        </div>
    </div>
</template>

<script>
import StartButton from './StartButton';
import AppError from './AppError';
import AppWatch from './ikons/AppWatch';
import AppJoyStick from './ikons/AppJoyStick';
export default {
    name: 'start-screen',
    computed: {
        error() {
            return this.$store.getters.getErrors;
        }
    },
    components: {
        StartButton,
        AppError,
        AppWatch,
        AppJoyStick,
    }
}
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        min-height: 100vh;

        &__column-1 {
            width: 70%;
            padding-top: 144px;
            background-color: #659EFF;
        }

        &__header {
            max-width: 395px;
            margin: 0 auto;
        }

        &__column-2 {
            width: 30%;
        }
    }

    h1 {
        font-size: 32px;
        line-height: 40px;
        font-weight: 900;
        color: #fff;
    }

    .block {
        min-height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        &__top {
            background-color: #3615F2;
        }

        &__bottom {
            background-color: #3261F7;
        }
    }

    @media(max-width: 375px) {
        .wrapper {
            display: flex;
            flex-direction: column;
        }

        .wrapper__header h1{
            font-size: 24px;
            line-height: 30px;
            font-weight: 900;
        }

        .wrapper__header {
            max-width: 290px;
        }

        .btn-custom {
            margin-bottom: 75px;
        }

        .wrapper__column-1, .wrapper__column-2 {
            width: 100%;
        }

        .wrapper__column-2 {
            display: flex;
            height: 100%;
            flex-grow: 1;
        }

        .block {
            width: 50%;
        }
    }
</style>