<template lang="">
    <div class="container">
        <div class="row gap-4 mx-4 d-sm-flex justify-content-center">
            <h2 class="display-2 head">Latest News Daily</h2>
            <div class="line"></div>
            <div class="card" style="width: 18rem;" v-for="tesla in teslas" :key="tesla">
  <img :src="tesla.urlToImage" class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">{{ tesla.title }}</h5>
    <p class="card-text">{{ tesla.description }}</p>
    <a href="">{{ tesla.url }}</a>
    <p class="card-text">{{ tesla.description }}</p>
    <p class="card-text">{{ tesla.publishedAt }}</p>
    <p class="card-text">{{ tesla.content }}</p>
  </div>
</div>
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';
export default {
    setup() {
        const store = useStore();
        store.dispatch("fetchArticles");
        let teslas = computed(() => store.state.teslas);
        return {
            teslas
        };
    },
    name: 'home_due'
}
</script>
<style scoped>
.head {
    width: 391px;
    height: 160px;
    top: 279px;
    left: 90px;
}
.card {
    background-color: #FEF2F4;
}

    
</style>