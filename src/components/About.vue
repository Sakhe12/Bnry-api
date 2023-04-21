<template lang="">
    <div class="body">
    <div class="container">
        <div class="row gap-4 mx-4 d-sm-flex justify-content-center">
            <h2 class="display-2 head">Latest News Daily</h2>
            <div class="card" style="max-width: 540px;" v-for="tesla in teslas" :key="tesla">
                <div class="card-body">
                    <h5 class="card-title">{{ tesla.title }}</h5>
                    <p class="card-text">{{ tesla.description }}</p>
                    <img :src="tesla.urlToImage" class="img-fluid rounded-start" alt="" />
                    <a :href="tesla.url" class="btn">view article</a>
    <p class="card-text">{{ tesla.category }}</p>
    <p class="card-text">{{ tesla.publishedAt }}</p>
    <p class="card-text">{{ tesla.content }}</p>
  </div>
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
    name: 'about_due'
}
</script>
<style scoped>
.body {
    background:#80836C;
    padding-bottom: 3rem;
}
.btn {
    background-color: #DDBEA9;
    border: #DDBEA9;
}
/* 
.head {
    width: 391px;
    height: 160px;
    top: 279px;
    left: 90px;
} */
.card {
    top: 10px;
    background: rgba(254, 244, 236, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    opacity: 80%;
}

    
</style>