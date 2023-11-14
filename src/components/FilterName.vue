<template>
    <div class="my-3">
        <label class="fs-4">Cerca per nome!</label>
        <input type="text" class="form-control" v-model="nameFilter" @keyup.enter="$emit('CardFilter', nameFilter)">
    </div>
</template>

<script>
    export default {
        name: 'FilterName',
        data(){
            return {
                nameFilter: '',
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>