<template>
    <div>
        <user-profile :info="fetchedItem">
            <router-link slot="username" :to="`/user/${fetchedItem.user}`">
                {{ fetchedItem.id}}
            </router-link>
            <div slot="time">{{ 'Posted '+ fetchedItem.time_ago}}</div>
        </user-profile>
        
        <section>
            <h3>{{ fetchedItem.title }}</h3>
            <div v-html="fetchedItem.content"></div>
        </section>
        <ul>
           <li v-for="comment in fetchedItem.comments" :key="comment.id">
               {{ comment.content }}
           </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '@/components/UserProfile.vue'
export default {
    components:{
        UserProfile,
    },
    computed:{
        ...mapGetters(['fetchedItem']),       
    },
    created(){
        this.$store.dispatch('FETCH_ITEM',this.$route.params.id);
    }
}
</script>

<style scope>
    .user-container{display:flex;}
    .fa-user{font-size:40px;}
</style>
