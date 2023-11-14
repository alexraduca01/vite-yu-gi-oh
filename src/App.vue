<template>
  <LoaderComponent v-if="store.flag" />
  <div v-else>
    <HeaderComponent />
    <div class="bg-warning">
      <div class="container p-4">
          <FilterComponent @filter-archetype="changeArchetype" />
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
import axios from 'axios';
import {store} from './data/store';
  export default {
    components: {
      CardComponent,
      HeaderComponent,
      FilterComponent,
      LoaderComponent,
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
          store.flag = false;
        });
      },
      getArchetypes(){
        axios.get(store.archeUrl).then((response) => {
          store.myArchetypes = response.data;
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
    },
    created() {
      this.getCards();
      this.getArchetypes();
    }
  }
</script>

<style lang="scss" scoped>

</style>