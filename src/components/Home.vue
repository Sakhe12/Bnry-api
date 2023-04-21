<template lang="">
    <div>
        <h1> Latest News Daily</h1>
        <h2>Local, International, Politics, Sports & More</h2>
    </div>
    <img class="img-fluid" src="https://i.postimg.cc/kGSYdFKQ/Screenshot-2023-04-21-154755.png" alt="">
</template>
<script>
export default {
    name: "home_us"
}
</script>
<style scoped>
h1 {
    position: relative;
    font-size: 70px;
    font-weight: bold;
    border-right: 4px solid black;
    width: 500px;
    margin: auto;
    text-align: center;
    margin-bottom: 30px;
    top: 20px;

color: #000000;
}
    
h2{
    position: relative;
    font-weight: normal;
    top: 20px;

color: #000000;
}
img {
    position: relative;
width: 1920px;
height: 391px;
top: 50px;
}

@media (max-width: 768px){
    h1 {
        width: auto;
        height: auto;
        text-align: center;
        border-right: none;
    }
}
</style>