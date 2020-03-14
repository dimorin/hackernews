<template>
    <div class="bar">
        <router-link to="/news">news</router-link>
        <router-link to="/ask">ask</router-link>
        <router-link to="/jobs">jobs</router-link>
        <router-link to="/AsyncAwaitTest"><small>AsyncAwaitTest</small></router-link>
        <router-link to="/CommonTest"><small>CommonTest</small></router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scope>
.bar{background:#42b883;}
.bar a{margin:0 10px;padding:10px;text-decoration:none;color:#dddddd;font-size:20px;}
.bar a.router-link-exact-active {
    text-decoration:none;color:#ffffff;
}
.bar a small{font-size:10px;}
</style>
