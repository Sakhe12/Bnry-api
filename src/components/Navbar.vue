<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand title" href="/about">The Whistleblower<i class="bi bi-newspaper"></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
        <li class="nav-item">
            <router-link class="txt" to="about">Home</router-link> |
        </li>
        <li class="nav-item">
            <router-link class="txt" to="/">About</router-link> |
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>
<script>
export default {
    name: 'navbar_nav'
}
</script>
<style >
    .txt {
        text-decoration: none;
    }
    .title {
      font-family: 'Pacifico', cursive;
    }
    nav {
      background-color: #80836C;
    }
</style>