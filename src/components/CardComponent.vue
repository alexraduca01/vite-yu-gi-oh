<template>
    <div class="card my-card border-0 mb-4 p-0">
        <div>
            <img :src="thumb" :alt="title">
        </div>
        <div class="bg-warning text-center card-body">
            <p class="text-white card-title">{{ title }}</p>
            <p class="m-0 card-text">{{ race }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: 
        {
            thumb: String,
            title: String,
            race: String,
        },
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
.my-card {
    width: calc(100% / 5 - 30px);
}
img {
    width: 100%;
}
</style>