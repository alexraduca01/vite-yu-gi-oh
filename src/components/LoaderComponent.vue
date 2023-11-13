<template>
    <div>
        <h2 class="text-white">Attendi il caricamento delle carte</h2>
        <img src="https://www.staynerd.com/wp-content/uploads/yu-gi-oh-il-lato-oscuro-delle-dimensioni.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: 'LoaderComponent',
    }
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>