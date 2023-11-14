<template>
    <div>
        <select class="form-control w-25" name="archetypes" v-model="searchArchetype" @change="$emit('filterArchetype', searchArchetype)" id="archetypes">
            <option value="">All</option>
            <option v-for="items in store.myArchetypes" :value="items.archetype_name">{{ items.archetype_name }}</option>
        </select>
    </div>
</template>

<script>
import {store} from '../data/store';
    export default {
        name: 'FilterComponent',
        data(){
            return {
                searchArchetype: '',
                store,
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>