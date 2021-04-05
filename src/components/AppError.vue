<template>
    <div class="alert alert-danger" role="alert">
        <p v-for="error in errors" :key="error" >{{ error }}</p>
    </div>
</template>

<script>
export default {
    name: 'app-error',
    props: {
        errors: Array
    }
}
</script>

<style scoped>
    .alert {
        position: absolute;
        width: 100%;
        margin: 0;
        border-radius: unset;
    }
</style>