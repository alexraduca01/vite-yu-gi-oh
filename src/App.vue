<template>
  <HeaderComponent />
  <div class="bg-warning">
    <div class="container p-4">
      <select name="cards" id="cards" class="form-select p-1">
        <FilterComponent v-for="item in myCards" :archetype="item.archetype" />
      </select>
    </div>
    <div class="container bg-white p-5">
      <div class="bg-primary p-2 row">
        <h5 class="m-0">Found {{ myCards.length }} cards</h5>
      </div>
      <div class="row justify-content-between">
        <CardComponent v-for="card in myCards" :thumb="card.card_images[0].image_url" :title="card.name" :race="card.archetype"/>
      </div>
    </div>
  </div>
  
  
</template>

<script>

import CardComponent from './components/CardComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FilterComponent from './components/FilterComponent.vue';
import axios from 'axios';
import {store} from './data/store';
  export default {
    components: {
      CardComponent,
      HeaderComponent,
      FilterComponent,
    },
    data(){
      return {
        store,
        myCards: [],
      }
    },
    methods: {
      getCards(){
        axios.get(store.apiUrl).then((response) => {
          this.myCards = response.data.data;
        })
      },
    },
    created() {
      this.getCards();
    },
  }
</script>

<style lang="scss" scoped>
select {
  width: 6vw!important;
}
</style>
