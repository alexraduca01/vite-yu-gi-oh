<template>
  <LoaderComponent v-if="store.flag" />
  <div v-else style="height: 100%;">
    <HeaderComponent />
    <div class="bg-warning p-4" style="height: 100%;">
      <div class="container p-4">
          <FilterComponent @filter-archetype="changeArchetype" />
          <FilterName @card-filter="filterByName"/>
      </div>
      <div class="container bg-white p-5">
        <div class="bg-dark p-2 row">
          <h5 class="m-0 text-white">Found {{ store.myCards.length }} cards</h5>
        </div>
        <div class="row justify-content-between">
          <CardComponent v-for="card in store.myCards" :thumb="card.card_images[0].image_url" :title="card.name" :race="card.archetype"/>
        </div>
      </div>
    </div>
  </div>
  
  
  
</template>

<script>

import CardComponent from './components/CardComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FilterComponent from './components/FilterComponent.vue';
import LoaderComponent from './components/LoaderComponent.vue';
import FilterName from './components/FilterName.vue';
import axios from 'axios';
import {store} from './data/store';
  export default {
    components: {
      CardComponent,
      HeaderComponent,
      FilterComponent,
      LoaderComponent,
      FilterName,
    },
    data(){
      return {
        store,
        params: null,
      }
    },
    methods: {
      getCards(){
        axios.get(store.apiUrl, { params: this.params }).then((response) => {
          store.myCards = response.data.data;
        });
      },
      changeArchetype(search){
        console.log(search);
        if(search){
          this.params = {
            archetype: search,
          }
        } else {
          this.params = null
        }
        this.getCards();
      },
      filterByName(value){
        if(value){
          this.params = {
            fname: value,
          }
        } else {
          this.params = null
        }
        this.getCards();
      }
    },
    created() {
      function getCards(){
        return axios.get(store.apiUrl);
      }
      function getArchetypes(){
        return axios.get(store.archeUrl);
      }
      Promise.all([getCards(), getArchetypes()]).then(function(response){
        store.myCards = response[0].data.data;
        store.myArchetypes = response[1].data;
        store.flag = false;
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>