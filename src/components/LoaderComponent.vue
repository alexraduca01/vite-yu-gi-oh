<template>
    <div class="mybg">
        <div class="center-content text-center">
            <h2>Attendi il caricamento delle carte...</h2>
            <img class="mt-5" src="img/yugioh.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoaderComponent',
    }
</script>

<style lang="scss" scoped>
.mybg {
    width: 100%;
    height: 60vw;
    background-image: url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW1nMjFrNjM4YzVqZWFxYTRmenkyMmI5eTdkOWZwMjVwMWJ2bnB4cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GOQXMz9VPpOhi/giphy.gif');
    background-size: 100%;
    background-repeat: no-repeat;
}

.center-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    animation-name: spin;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    
    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>