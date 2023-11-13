<template>
    <option :value="archetype">{{ archetype }}</option>
</template>

<script>
    export default {
        name: 'FilterComponent',
        props: {
            archetype: String,
        }
    }
</script>

<style lang="scss" scoped>

</style>