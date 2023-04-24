<template lang="">
    <div class="body">
    <div class="container">
        <div class="row gap-4 mx-4 d-sm-flex justify-content-center">
            <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="news">
        <button class="btn btn-outline-success" type="submit" @click.prevent="findArticle(news)">Search</button>
      </form>
            <div class="card" style="max-width: 540px;" v-for="tesla in teslas" :key="tesla">
                <div class="card-body">
                    <h5 class="card-title">{{ tesla.title }}</h5>
                    <p class="card-text">{{ tesla.description }}</p>
                    <img :src="tesla.urlToImage" class="img-fluid rounded-start" alt="" />
                    <p class="card-text">{{ tesla.category }}</p>
                    <a :href="tesla.url" class="btn"><strong>view article</strong></a>
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
import store from '@/store';
export default {
    setup() {
        const store = useStore();
        store.dispatch("fetchArticles");
        let teslas = computed(() => store.state.teslas);
        return {
            teslas
        };
    },
    methods: {
        findArticle(news) {
            store.dispatch('searchArticles', news)
        },
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
    background-color: #b49886;
    border: #DDBEA9;
    top: 2px;
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

form {
    margin-top: 1rem;
    margin-left: 150%;
}
input {
    width: 150px;
}

@media (max-width: 768px){
    form {
     margin: auto;   
    }
}
    
</style>