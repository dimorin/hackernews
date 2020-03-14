<template>
    <div>
        <ul>
            <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
        <button @click="$emit('renew')">data refresh</button>
    </div>    
</template>

<script>
export default {
    props:{
        items:Array,
    },    
}
</script>

<style>

</style>
