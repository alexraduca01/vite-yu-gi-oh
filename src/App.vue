<template>
  <div class="container">
    <div class="row p-5">
      <CardComponent v-for="card in myCards" :thumb="card.card_images[0].image_url" :title="card.name" :race="card.archetype"/>
    </div>
    
  </div>
  
</template>

<script>

import CardComponent from './components/CardComponent.vue';
import axios from 'axios';
import {store} from './data/store';
  export default {
    components: {
      CardComponent,
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
      }
    },
    created() {
      this.getCards();
    }
  }
</script>

<style lang="scss" scoped>

</style>
