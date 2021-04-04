<template>
    <div class="image__container animate__animated animate__faster"
    :style="{backgroundColor: bgc}"
    :class="[className]"
    >
        <slot></slot>
    </div>  
</template>

<script>
export default {
    name: 'image-container',
    props: {
        bgc: String,
        className: String,
    },
    mounted() {
        this.$el.classList.add('animate__slideInDown');
    }
}
</script>

<style lang="scss">
    .image__container {
        display: flex;
        align-items: center;
        padding: 10px 0;
        justify-content: center;
        flex-grow: 1;
    }
    @media (min-width: 375px) {
        .image__container {
            &__container {
                flex-grow: 1;
                padding: 0;
            }
        }
    }
</style>