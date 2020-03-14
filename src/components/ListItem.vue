<template>
  <div>
    <ul>
      <li v-for="item in ListItems" :key="item.id" class="post">
        <div class="points">{{ item.points || 0 }}</div>
        <div>
          <p class="news-title">
              <template v-if="item.domain">
                <a :href="item.url">
                    {{item.title}}
                </a>
              </template>
              <template v-else>
                <router-link :to="`/item/${item.id}`">
                    {{ item.title }}
                </router-link>
              </template>              
          </p>        
          <small class="link-text">
            {{item.time_ago}} by 
            <router-link :to="`/user/${item.user}`" v-if="item.user">
              {{item.user}}
            </router-link>   
            <a :href="item.url" v-else>
                {{ item.domain }}
            </a>       
          </small>
        </div>        
      </li>
    </ul>
  </div>
</template>

<script>
export default {   
    computed:{
        ListItems(){
          return this.$store.state.list;
            /* const name = this.$route.name;
            let state;
            if(name === 'news'){
                state = this.$store.state.news;
            }else if(name === 'ask'){
                state = this.$store.state.asks;
            }else if(name === 'jobs'){
                state = this.$store.state.jobs;
            }
            return state;         */    
        }
    }, 
    /* created(){
        const name = this.$route.name;
        if(name === 'news'){
            this.$store.dispatch('FETCH_NEWS');
        }else if(name === 'ask'){
            this.$store.dispatch('FETCH_ASKS');  
        }else if(name === 'jobs'){
            this.$store.dispatch('FETCH_JOBS');
        }
    },  */   
}
</script>

<style scoped>
  .points{display:flex;justify-content:center;align-items:center;width:80px;height:60px;color:#42b883;}
  ul{margin:0;padding:0;}
  .post{list-style: none;display:flex;align-items: center;border-bottom:1px solid #eeeeee;}
</style>